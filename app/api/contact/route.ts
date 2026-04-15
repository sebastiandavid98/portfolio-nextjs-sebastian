import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

// ── Types ────────────────────────────────────────────────────
type ContactEntry = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

// ── In-memory fallback (when Supabase is not configured) ─────
const memoryStore: ContactEntry[] = [];

// ── Validation ───────────────────────────────────────────────
function validate(body: unknown): {
  errors: string[];
  name: string;
  email: string;
  message: string;
} {
  if (!body || typeof body !== "object") {
    return { errors: ["Cuerpo de la solicitud inválido."], name: "", email: "", message: "" };
  }

  const raw = body as Record<string, unknown>;
  const name    = String(raw.name    ?? "").trim();
  const email   = String(raw.email   ?? "").trim();
  const message = String(raw.message ?? "").trim();
  const errors: string[] = [];

  if (!name || name.length < 2)    errors.push("El nombre debe tener al menos 2 caracteres.");
  if (name.length > 100)           errors.push("El nombre no puede superar los 100 caracteres.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("El email no es válido.");
  if (!message || message.length < 10)  errors.push("El mensaje debe tener al menos 10 caracteres.");
  if (message.length > 2000)       errors.push("El mensaje no puede superar los 2000 caracteres.");

  return { errors, name, email, message };
}

// ── POST /api/contact ────────────────────────────────────────
export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, errors: ["Content-Type debe ser application/json."] },
      { status: 415 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: ["JSON inválido en el cuerpo de la solicitud."] },
      { status: 400 }
    );
  }

  const { errors, name, email, message } = validate(body);
  if (errors.length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // ── Save to Supabase ────────────────────────────────────────
  const supabaseConfigured =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseConfigured) {
    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) {
      console.error("[Supabase] Insert error:", error.message);
      // Don't expose DB errors to the client — still return success
      // so the user experience is not broken
    }
  } else {
    // Fallback: in-memory store for local dev without Supabase
    memoryStore.push({
      id: crypto.randomUUID(),
      name,
      email,
      message,
      created_at: new Date().toISOString(),
    });
  }

  return NextResponse.json(
    { ok: true, message: "¡Mensaje recibido! Te responderé pronto." },
    { status: 201 }
  );
}

// ── GET /api/contact (dev utility) ──────────────────────────
export async function GET() {
  const supabaseConfigured =
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseConfigured) {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ ok: false, errors: [error.message] }, { status: 500 });
    }

    return NextResponse.json({ ok: true, count: data?.length ?? 0, data });
  }

  return NextResponse.json({
    ok: true,
    count: memoryStore.length,
    data: memoryStore,
    note: "Using in-memory store. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable Supabase.",
  });
}
