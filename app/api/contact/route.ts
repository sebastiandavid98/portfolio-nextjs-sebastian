import { NextRequest, NextResponse } from "next/server";

// ── Types ────────────────────────────────────────────────────
type ContactEntry = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

// ── In-memory store (works on Vercel serverless) ─────────────
// For persistent storage, replace with a DB call (e.g. Supabase, PlanetScale, MongoDB Atlas)
const store: ContactEntry[] = [];

// ── Validation ───────────────────────────────────────────────
function validate(body: unknown): { errors: string[]; name: string; email: string; message: string } {
  const errors: string[] = [];

  if (!body || typeof body !== "object") {
    return { errors: ["Cuerpo de la solicitud inválido."], name: "", email: "", message: "" };
  }

  const raw = body as Record<string, unknown>;
  const name    = String(raw.name    ?? "").trim();
  const email   = String(raw.email   ?? "").trim();
  const message = String(raw.message ?? "").trim();

  if (!name || name.length < 2)
    errors.push("El nombre debe tener al menos 2 caracteres.");
  if (name.length > 100)
    errors.push("El nombre no puede superar los 100 caracteres.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push("El email no es válido.");
  if (!message || message.length < 10)
    errors.push("El mensaje debe tener al menos 10 caracteres.");
  if (message.length > 2000)
    errors.push("El mensaje no puede superar los 2000 caracteres.");

  return { errors, name, email, message };
}

// ── POST /api/contact ────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Only accept JSON
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

  const entry: ContactEntry = {
    id: crypto.randomUUID(),
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  };

  // Try to persist locally (dev only — fails silently on Vercel read-only FS)
  try {
    const { promises: fs } = await import("fs");
    const path = await import("path");
    const dbPath = path.join(process.cwd(), "data", "contacts.json");
    const dir = path.dirname(dbPath);
    await fs.mkdir(dir, { recursive: true });
    let existing: ContactEntry[] = [];
    try {
      const raw = await fs.readFile(dbPath, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      // File doesn't exist yet — start fresh
    }
    existing.push(entry);
    await fs.writeFile(dbPath, JSON.stringify(existing, null, 2), "utf-8");
  } catch {
    // Silently ignore on read-only environments (Vercel, etc.)
    // In production, replace this block with a real DB write
  }

  // Always store in memory for the current instance
  store.push(entry);

  return NextResponse.json(
    { ok: true, message: "¡Mensaje recibido! Te responderé pronto." },
    { status: 201 }
  );
}

// ── GET /api/contact (dev utility) ──────────────────────────
export async function GET() {
  return NextResponse.json({
    ok: true,
    count: store.length,
    data: store,
    note: "In-memory only. Data resets on each serverless cold start.",
  });
}
