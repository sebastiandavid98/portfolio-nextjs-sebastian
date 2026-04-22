"use client";
import { useRef } from "react";

const skills = [
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "React / Next.js", level: 85 },
  { name: "Node.js / Express", level: 75 },
  { name: "Python / Django", level: 70 },
  { name: "Java", level: 70 },
  { name: "MySQL / MongoDB", level: 72 },
  { name: "Git / GitHub", level: 88 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Figma", level: 65 },
];

const projects = [
  { name: "Backend Energía Solar", tech: "Node.js · Express · MongoDB", desc: "API REST para gestión de paneles solares y reportes en tiempo real." },
  { name: "Frontend Energía Solar", tech: "React · Chart.js · CSS", desc: "Dashboard interactivo para visualización de datos de energía solar." },
  { name: "Mercado Libre Clone", tech: "React · Tailwind CSS · API", desc: "Clon funcional con búsqueda, filtros y carrito de compras." },
  { name: "Sistema Diseño Software", tech: "Java · UML · Patrones", desc: "Aplicación de patrones de diseño en soluciones empresariales." },
];

const timeline = [
  { year: "2022", title: "Bachillerato", place: "Institución Educativa", desc: "Educación media técnica con énfasis en tecnología." },
  { year: "2023", title: "Inicio Ing. de Software", place: "Universidad Cooperativa de Colombia", desc: "Python, Django, bases de datos, fundamentos de programación." },
  { year: "2024", title: "Desarrollo Intermedio", place: "Universidad Cooperativa de Colombia", desc: "Java, TypeScript, CSS, UML, Git y GitHub." },
  { year: "2025", title: "Experiencia Avanzada", place: "Universidad Cooperativa de Colombia", desc: "2° y 3° Seminario Nacional de Ingeniería de Software. Git avanzado." },
  { year: "2026", title: "Nivel Actual — Full Stack", place: "Universidad Cooperativa de Colombia", desc: "Next.js, Figma, pruebas unitarias, despliegue en Vercel." },
];

export default function CV() {
  const cvRef = useRef<HTMLDivElement>(null);

  const downloadCV = async () => {
    const element = cvRef.current;
    if (!element) return;

    // Dynamic import to avoid SSR issues
    const html2pdf = (await import("html2pdf.js")).default;

    const opt = {
      margin:      [8, 8, 8, 8],
      filename:    "Sebastian_David_Marcillo_CV.pdf",
      image:       { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF:       { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">

      {/* Download button */}
      <div className="max-w-[794px] mx-auto mb-4 flex justify-end">
        <button
          onClick={downloadCV}
          className="flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-green-700/30 hover:-translate-y-0.5 active:scale-95 text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          Descargar CV en PDF
        </button>
      </div>

      {/* ── CV Sheet ── */}
      <div
        ref={cvRef}
        id="cv"
        style={{
          width: "794px",
          minHeight: "1123px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          fontFamily: "'Segoe UI', Arial, sans-serif",
          fontSize: "11px",
          color: "#1a1a1a",
          boxShadow: "0 4px 32px rgba(0,0,0,0.15)",
        }}
      >
        {/* ── Header ── */}
        <div style={{
          background: "linear-gradient(135deg, #15803d 0%, #166534 60%, #6b4f3b 100%)",
          padding: "32px 40px 28px",
          color: "#ffffff",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <h1 style={{ fontSize: "28px", fontWeight: "800", margin: "0 0 4px", letterSpacing: "-0.5px" }}>
                Sebastián David Marcillo
              </h1>
              <p style={{ fontSize: "13px", fontWeight: "600", margin: "0 0 12px", opacity: 0.9, letterSpacing: "1px", textTransform: "uppercase" }}>
                Estudiante de Ingeniería de Software
              </p>
              <p style={{ fontSize: "11px", opacity: 0.8, maxWidth: "420px", lineHeight: "1.6", margin: 0 }}>
                Desarrollador web full-stack apasionado por construir productos digitales con código limpio,
                buenas prácticas y diseño centrado en el usuario. 5° semestre en la Universidad Cooperativa de Colombia.
              </p>
            </div>
            <div style={{ textAlign: "right", fontSize: "10px", opacity: 0.85, lineHeight: "1.8" }}>
              <div>📧 barbasel98@gmail.com</div>
              <div>📱 +57 324 615 9170</div>
              <div>🔗 linkedin.com/in/sebastian-david-4a1459390</div>
              <div>💻 github.com/sebastiandavid98</div>
              <div>📍 Pasto, Colombia</div>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div style={{ display: "flex", gap: "0" }}>

          {/* Left column */}
          <div style={{ width: "38%", backgroundColor: "#f0fdf4", padding: "24px 20px", borderRight: "1px solid #bbf7d0" }}>

            {/* Skills */}
            <div style={{ marginBottom: "24px" }}>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#15803d", textTransform: "uppercase", letterSpacing: "1.5px", margin: "0 0 12px", paddingBottom: "6px", borderBottom: "2px solid #16a34a" }}>
                Habilidades
              </h2>
              {skills.map((s) => (
                <div key={s.name} style={{ marginBottom: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                    <span style={{ fontSize: "10px", fontWeight: "600", color: "#1a3d22" }}>{s.name}</span>
                    <span style={{ fontSize: "9px", color: "#4a7c59" }}>{s.level}%</span>
                  </div>
                  <div style={{ height: "5px", backgroundColor: "#dcfce7", borderRadius: "99px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${s.level}%`, background: "linear-gradient(90deg, #16a34a, #22c55e)", borderRadius: "99px" }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div style={{ marginBottom: "24px" }}>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#15803d", textTransform: "uppercase", letterSpacing: "1.5px", margin: "0 0 12px", paddingBottom: "6px", borderBottom: "2px solid #16a34a" }}>
                Herramientas
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {["VS Code", "Postman", "Figma", "XAMPP", "Linux", "Vercel", "Supabase", "Resend"].map((t) => (
                  <span key={t} style={{ fontSize: "9px", fontWeight: "600", padding: "3px 8px", backgroundColor: "#dcfce7", color: "#15803d", borderRadius: "99px", border: "1px solid #bbf7d0" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div style={{ marginBottom: "24px" }}>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#15803d", textTransform: "uppercase", letterSpacing: "1.5px", margin: "0 0 12px", paddingBottom: "6px", borderBottom: "2px solid #16a34a" }}>
                Idiomas
              </h2>
              {[{ lang: "Español", level: "Nativo" }, { lang: "Inglés", level: "Básico-Intermedio" }].map((l) => (
                <div key={l.lang} style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "10px", fontWeight: "600", color: "#1a3d22" }}>{l.lang}</span>
                  <span style={{ fontSize: "9px", color: "#4a7c59", fontStyle: "italic" }}>{l.level}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#15803d", textTransform: "uppercase", letterSpacing: "1.5px", margin: "0 0 12px", paddingBottom: "6px", borderBottom: "2px solid #16a34a" }}>
                Certificados
              </h2>
              {[
                { title: "2° Seminario Nacional de Ing. de Software", date: "Mayo 2025", issuer: "U. Cooperativa de Colombia" },
                { title: "3° Seminario Nacional de Ing. de Software", date: "Oct. 2025", issuer: "U. Cooperativa de Colombia" },
              ].map((c) => (
                <div key={c.title} style={{ marginBottom: "10px", paddingLeft: "8px", borderLeft: "3px solid #16a34a" }}>
                  <p style={{ fontSize: "10px", fontWeight: "700", color: "#1a3d22", margin: "0 0 2px" }}>{c.title}</p>
                  <p style={{ fontSize: "9px", color: "#4a7c59", margin: "0 0 1px" }}>{c.issuer}</p>
                  <p style={{ fontSize: "9px", color: "#6b4f3b", margin: 0 }}>{c.date} · 8 horas</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div style={{ flex: 1, padding: "24px 28px" }}>

            {/* Projects */}
            <div style={{ marginBottom: "22px" }}>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#15803d", textTransform: "uppercase", letterSpacing: "1.5px", margin: "0 0 12px", paddingBottom: "6px", borderBottom: "2px solid #16a34a" }}>
                Proyectos Destacados
              </h2>
              {projects.map((p) => (
                <div key={p.name} style={{ marginBottom: "10px", padding: "10px 12px", backgroundColor: "#f0fdf4", borderRadius: "8px", border: "1px solid #bbf7d0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#15803d" }}>{p.name}</span>
                    <span style={{ fontSize: "9px", color: "#6b4f3b", fontWeight: "600", backgroundColor: "#fef3c7", padding: "1px 6px", borderRadius: "99px" }}>{p.tech}</span>
                  </div>
                  <p style={{ fontSize: "10px", color: "#374151", margin: 0, lineHeight: "1.5" }}>{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Experience / Timeline */}
            <div>
              <h2 style={{ fontSize: "11px", fontWeight: "700", color: "#15803d", textTransform: "uppercase", letterSpacing: "1.5px", margin: "0 0 12px", paddingBottom: "6px", borderBottom: "2px solid #16a34a" }}>
                Trayectoria Académica
              </h2>
              <div style={{ position: "relative", paddingLeft: "20px" }}>
                {/* Vertical line */}
                <div style={{ position: "absolute", left: "6px", top: "6px", bottom: "6px", width: "2px", backgroundColor: "#bbf7d0" }} />

                {timeline.map((item, i) => (
                  <div key={i} style={{ position: "relative", marginBottom: "12px" }}>
                    {/* Dot */}
                    <div style={{ position: "absolute", left: "-17px", top: "4px", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#16a34a", border: "2px solid #ffffff", boxShadow: "0 0 0 2px #16a34a" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <p style={{ fontSize: "11px", fontWeight: "700", color: "#1a3d22", margin: "0 0 1px" }}>{item.title}</p>
                        <p style={{ fontSize: "10px", color: "#15803d", margin: "0 0 2px", fontWeight: "600" }}>{item.place}</p>
                        <p style={{ fontSize: "10px", color: "#4b5563", margin: 0, lineHeight: "1.5" }}>{item.desc}</p>
                      </div>
                      <span style={{ fontSize: "9px", fontWeight: "700", color: "#6b4f3b", backgroundColor: "#fef3c7", padding: "2px 8px", borderRadius: "99px", whiteSpace: "nowrap", marginLeft: "8px" }}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div style={{ backgroundColor: "#15803d", padding: "10px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.7)" }}>Sebastián David Marcillo · CV 2025</span>
          <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.7)" }}>github.com/sebastiandavid98</span>
        </div>
      </div>
    </div>
  );
}
