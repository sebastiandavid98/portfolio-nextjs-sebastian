import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "contacts.json");

type ContactEntry = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

// Ensure data dir and file exist
async function ensureDB(): Promise<ContactEntry[]> {
  const dir = path.dirname(DB_PATH);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
  try {
    const raw = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(raw) as ContactEntry[];
  } catch {
    await fs.writeFile(DB_PATH, "[]", "utf-8");
    return [];
  }
}

function validate(body: Record<string, unknown>) {
  const errors: string[] = [];
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || name.length < 2) errors.push("El nombre debe tener al menos 2 caracteres.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("El email no es válido.");
  if (!message || message.length < 10) errors.push("El mensaje debe tener al menos 10 caracteres.");
  if (message.length > 2000) errors.push("El mensaje no puede superar los 2000 caracteres.");

  return { errors, name, email, message };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { errors, name, email, message } = validate(body);

    if (errors.length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const contacts = await ensureDB();
    const entry: ContactEntry = {
      id: crypto.randomUUID(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    contacts.push(entry);
    await fs.writeFile(DB_PATH, JSON.stringify(contacts, null, 2), "utf-8");

    return NextResponse.json({ ok: true, message: "Mensaje recibido correctamente." }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: false, errors: ["Error interno del servidor."] }, { status: 500 });
  }
}

export async function GET() {
  try {
    const contacts = await ensureDB();
    return NextResponse.json({ ok: true, count: contacts.length, data: contacts });
  } catch {
    return NextResponse.json({ ok: false, errors: ["Error al leer los mensajes."] }, { status: 500 });
  }
}
