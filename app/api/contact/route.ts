import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "../../../lib/supabase";

// ── Types ────────────────────────────────────────────────────
type ContactInsert = {
  name: string;
  email: string;
  message: string;
};

// ── In-memory fallback (dev without Supabase configured) ─────
type MemoryEntry = ContactInsert & { id: string; created_at: string };
const memoryStore: MemoryEntry[] = [];

// ── Validation ───────────────────────────────────────────────
function validate(body: unknown): {
  errors: string[];
  data: ContactInsert | null;
} {
  if (!body || typeof body !== "object") {
    return { errors: ["Cuerpo de la solicitud inválido."], data: null };
  }

  const raw = body as Record<string, unknown>;
  const name    = String(raw.name    ?? "").trim();
  const email   = String(raw.email   ?? "").trim();
  const message = String(raw.message ?? "").trim();
  const errors: string[] = [];

  if (!name || name.length < 2)   errors.push("El nombre debe tener al menos 2 caracteres.");
  if (name.length > 100)          errors.push("El nombre no puede superar los 100 caracteres.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                                  errors.push("El email no es válido.");
  if (!message || message.length < 10)  errors.push("El mensaje debe tener al menos 10 caracteres.");
  if (message.length > 2000)      errors.push("El mensaje no puede superar los 2000 caracteres.");

  if (errors.length > 0) return { errors, data: null };
  return { errors: [], data: { name, email, message } };
}

// ── POST /api/contact ────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Content-Type guard
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, errors: ["Content-Type debe ser application/json."] },
      { status: 415 }
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: ["JSON inválido en el cuerpo de la solicitud."] },
      { status: 400 }
    );
  }

  // Validate
  const { errors, data } = validate(body);
  if (errors.length > 0 || !data) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // Persist
  const client = getSupabaseClient();

  if (client) {
    // ── Supabase ──────────────────────────────────────────────
    const { error } = await client
      .from("contacts")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .insert(data as any);

    if (error) {
      // Log server-side only — never expose DB errors to the client
      console.error("[Supabase] Insert error:", error.message);
    }
  } else {
    // ── In-memory fallback (local dev) ────────────────────────
    memoryStore.push({
      ...data,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
    });
    console.info("[Contact API] Saved to memory store (Supabase not configured).");
  }

  return NextResponse.json(
    { ok: true, message: "¡Mensaje recibido! Te responderé pronto." },
    { status: 201 }
  );
}

// ── GET /api/contact (dev utility — disable in production) ───
export async function GET() {
  const client = getSupabaseClient();

  if (client) {
    const { data, error } = await client
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
    note: "In-memory store active. Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable Supabase.",
  });
}
