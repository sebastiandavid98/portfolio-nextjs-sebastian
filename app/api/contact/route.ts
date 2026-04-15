import { NextRequest, NextResponse } from "next/server";
import { getSupabaseClient } from "../../../lib/supabase";
import { Resend } from "resend";

// ── Types ────────────────────────────────────────────────────
type ContactInsert = { name: string; email: string; message: string };
type MemoryEntry   = ContactInsert & { id: string; created_at: string };
const memoryStore: MemoryEntry[] = [];

// ── Validation ───────────────────────────────────────────────
function validate(body: unknown): { errors: string[]; data: ContactInsert | null } {
  if (!body || typeof body !== "object") {
    return { errors: ["Cuerpo de la solicitud inválido."], data: null };
  }

  const raw     = body as Record<string, unknown>;
  const name    = String(raw.name    ?? "").trim();
  const email   = String(raw.email   ?? "").trim();
  const message = String(raw.message ?? "").trim();

  console.log("📥 DATOS RECIBIDOS:", { name, email, message });

  const errors: string[] = [];
  if (!name || name.length < 2)  errors.push("El nombre debe tener al menos 2 caracteres.");
  if (name.length > 100)         errors.push("El nombre no puede superar los 100 caracteres.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                                 errors.push("El email no es válido.");
  if (!message || message.length < 10)  errors.push("El mensaje debe tener al menos 10 caracteres.");
  if (message.length > 2000)     errors.push("El mensaje no puede superar los 2000 caracteres.");

  if (errors.length > 0) {
    console.log("❌ ERRORES DE VALIDACIÓN:", errors);
    return { errors, data: null };
  }
  return { errors: [], data: { name, email, message } };
}

// ── POST /api/contact ────────────────────────────────────────
export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("json")) {
    return NextResponse.json(
      { ok: false, errors: ["Content-Type debe ser application/json."] },
      { status: 415 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
    console.log("📦 BODY PARSEADO:", body);
  } catch (err) {
    console.error("❌ Error parseando JSON:", err);
    return NextResponse.json(
      { ok: false, errors: ["JSON inválido."] },
      { status: 400 }
    );
  }

  const { errors, data } = validate(body);
  if (errors.length > 0 || !data) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // ── 1. Guardar en Supabase ───────────────────────────────────
  const client = getSupabaseClient();
  console.log("🔌 Supabase configurado:", !!client);

  if (client) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error: dbError } = await client.from("contacts").insert(data as any);
    if (dbError) {
      console.error("❌ [Supabase] Error:", dbError.message);
    } else {
      console.log("✅ [Supabase] Guardado correctamente");
    }
  } else {
    memoryStore.push({ ...data, id: crypto.randomUUID(), created_at: new Date().toISOString() });
    console.info("💾 Guardado en memoria (Supabase no configurado)");
  }

  // ── 2. Enviar email con Resend ───────────────────────────────
  const resendKey = process.env.RESEND_API_KEY;
  console.log("📧 RESEND_API_KEY presente:", !!resendKey);

  if (resendKey) {
    try {
      // Instantiate inside the handler so build time doesn't crash
      // when RESEND_API_KEY is not available during static analysis
      const resend = new Resend(resendKey);
      const emailResponse = await resend.emails.send({        from: "Portafolio <onboarding@resend.dev>",   // dominio verificado en Resend
        to:   ["barbasel98@gmail.com"],                // tu correo real
        replyTo: data.email,                           // reply va al remitente
        subject: `📬 Nuevo mensaje de ${data.name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f8fafc;border-radius:12px;">
            <h2 style="color:#1e3a5f;margin-bottom:8px;">Nuevo mensaje desde tu portafolio</h2>
            <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;" />

            <p style="margin:0 0 4px;color:#64748b;font-size:13px;">NOMBRE</p>
            <p style="margin:0 0 16px;color:#0f172a;font-size:16px;font-weight:600;">${data.name}</p>

            <p style="margin:0 0 4px;color:#64748b;font-size:13px;">EMAIL</p>
            <p style="margin:0 0 16px;color:#0f172a;font-size:16px;">
              <a href="mailto:${data.email}" style="color:#3b82f6;">${data.email}</a>
            </p>

            <p style="margin:0 0 4px;color:#64748b;font-size:13px;">MENSAJE</p>
            <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;padding:16px;color:#334155;font-size:15px;line-height:1.6;white-space:pre-wrap;">${data.message}</div>

            <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
            <p style="color:#94a3b8;font-size:12px;text-align:center;">
              Enviado desde sebastiandavid.dev · ${new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })}
            </p>
          </div>
        `,
      });

      console.log("📧 RESEND RESPONSE:", JSON.stringify(emailResponse, null, 2));

      if (emailResponse.error) {
        console.error("❌ [Resend] Error al enviar:", emailResponse.error);
      } else {
        console.log("✅ [Resend] Email enviado. ID:", emailResponse.data?.id);
      }
    } catch (emailErr) {
      console.error("❌ [Resend] Excepción:", emailErr);
    }
  } else {
    console.warn("⚠️  RESEND_API_KEY no configurada — email no enviado");
  }

  return NextResponse.json(
    { ok: true, message: "¡Mensaje recibido! Te responderé pronto." },
    { status: 201 }
  );
}

// ── GET /api/contact ─────────────────────────────────────────
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
    note: "In-memory store activo. Configura NEXT_PUBLIC_SUPABASE_URL para usar Supabase.",
  });
}
