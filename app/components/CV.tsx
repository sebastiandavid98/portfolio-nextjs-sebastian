"use client";

export default function CV() {
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-800 py-10 px-4 flex flex-col items-center">

      {/* Action bar */}
      <div className="w-full max-w-[794px] flex items-center justify-between mb-5">
        <a href="/"
          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Volver al portafolio
        </a>

        <a href="/api/cv" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-green-700/25 hover:-translate-y-0.5 active:scale-95 text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          Descargar PDF
        </a>
      </div>

      {/* A4 sheet preview */}
      <div
        className="w-full max-w-[794px] bg-white shadow-2xl shadow-black/30 rounded-sm overflow-hidden"
        style={{ minHeight: "1123px", border: "1px solid #d1d5db" }}
      >

        {/* ── Header ── */}
        <div style={{ background: "linear-gradient(135deg, #15803d 0%, #166534 70%, #6b4f3b 100%)", padding: "20px 28px 16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px" }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: "24px", fontWeight: 800, color: "#fff", margin: "0 0 3px", letterSpacing: "-0.5px" }}>
                Sebastián David Marcillo
              </h1>
              <p style={{ fontSize: "10px", fontWeight: 700, color: "#bbf7d0", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 8px" }}>
                Estudiante de Ingeniería de Software
              </p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.82)", lineHeight: 1.55, maxWidth: "360px", margin: 0 }}>
                Desarrollador web full-stack apasionado por construir productos digitales con código limpio,
                buenas prácticas y diseño centrado en el usuario. 5° semestre en la Universidad Cooperativa de Colombia.
              </p>
            </div>
            <div style={{ textAlign: "right", fontSize: "10px", color: "rgba(255,255,255,0.82)", lineHeight: "1.9" }}>
              <div>barbasel98@gmail.com</div>
              <div>+57 324 615 9170</div>
              <div>linkedin.com/in/sebastian-david-4a1459390</div>
              <div>github.com/sebastiandavid98</div>
              <div>Pasto, Colombia</div>
            </div>
          </div>
        </div>

        {/* Café accent bar */}
        <div style={{ height: "4px", background: "#6b4f3b" }} />

        {/* ── Body ── */}
        <div style={{ display: "flex", minHeight: "1000px" }}>

          {/* Left */}
          <div style={{ width: "35%", backgroundColor: "#f0fdf4", padding: "18px 14px 18px 18px", borderRight: "1px solid #bbf7d0" }}>

            {/* Skills */}
            <Section title="Habilidades">
              {[
                { name: "JavaScript / TypeScript", level: 82 },
                { name: "React / Next.js", level: 85 },
                { name: "Node.js / Express", level: 75 },
                { name: "Python / Django", level: 70 },
                { name: "Java", level: 70 },
                { name: "MySQL / MongoDB", level: 72 },
                { name: "Git / GitHub", level: 88 },
                { name: "Tailwind CSS", level: 90 },
                { name: "Figma", level: 65 },
              ].map((sk) => (
                <div key={sk.name} style={{ marginBottom: "7px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, color: "#1a3d22" }}>{sk.name}</span>
                    <span style={{ fontSize: "9px", color: "#4a7c59" }}>{sk.level}%</span>
                  </div>
                  <div style={{ height: "5px", backgroundColor: "#dcfce7", borderRadius: "99px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${sk.level}%`, background: "linear-gradient(90deg,#16a34a,#22c55e)", borderRadius: "99px" }} />
                  </div>
                </div>
              ))}
            </Section>

            {/* Tools */}
            <Section title="Herramientas">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {["VS Code", "Postman", "Figma", "XAMPP", "Vercel", "Supabase", "Linux", "Resend"].map((t) => (
                  <span key={t} style={{ fontSize: "9px", fontWeight: 600, padding: "2px 7px", backgroundColor: "#dcfce7", color: "#15803d", borderRadius: "99px", border: "1px solid #bbf7d0" }}>
                    {t}
                  </span>
                ))}
              </div>
            </Section>

            {/* Languages */}
            <Section title="Idiomas">
              {[{ l: "Español", n: "Nativo" }, { l: "Inglés", n: "Básico-Intermedio" }].map((x) => (
                <div key={x.l} style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 700, color: "#1a3d22" }}>{x.l}</span>
                  <span style={{ fontSize: "9px", color: "#4a7c59", fontStyle: "italic" }}>{x.n}</span>
                </div>
              ))}
            </Section>

            {/* Certs */}
            <Section title="Certificados">
              {[
                { t: "2° Seminario Nacional de Ing. de Software", d: "Mayo 2025 · 8h" },
                { t: "3° Seminario Nacional de Ing. de Software", d: "Oct. 2025 · 8h" },
              ].map((c) => (
                <div key={c.t} style={{ marginBottom: "10px", paddingLeft: "7px", borderLeft: "3px solid #16a34a" }}>
                  <p style={{ fontSize: "10px", fontWeight: 700, color: "#1a3d22", margin: "0 0 2px" }}>{c.t}</p>
                  <p style={{ fontSize: "9px", color: "#6b4f3b", margin: "0 0 1px" }}>U. Cooperativa de Colombia</p>
                  <p style={{ fontSize: "9px", color: "#4a7c59", margin: 0 }}>{c.d}</p>
                </div>
              ))}
            </Section>
          </div>

          {/* Right */}
          <div style={{ flex: 1, padding: "18px 22px 18px 18px" }}>

            {/* Projects */}
            <Section title="Proyectos Destacados">
              {[
                { name: "Backend Energía Solar",   tech: "Node.js · Express · MongoDB", desc: "API REST para gestión de paneles solares y reportes en tiempo real." },
                { name: "Frontend Energía Solar",  tech: "React · Chart.js · CSS",      desc: "Dashboard interactivo para visualización de datos de energía solar." },
                { name: "Mercado Libre Clone",     tech: "React · Tailwind · API",       desc: "Clon funcional con búsqueda, filtros y carrito de compras." },
                { name: "Sistema Diseño Software", tech: "Java · UML · Patrones",        desc: "Aplicación de patrones de diseño en soluciones empresariales." },
              ].map((p) => (
                <div key={p.name} style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "7px", padding: "9px 11px", marginBottom: "8px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "#15803d" }}>{p.name}</span>
                    <span style={{ fontSize: "8px", color: "#6b4f3b", backgroundColor: "#fef3c7", padding: "1px 6px", borderRadius: "99px", fontWeight: 600 }}>{p.tech}</span>
                  </div>
                  <p style={{ fontSize: "10px", color: "#374151", margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
                </div>
              ))}
            </Section>

            {/* Timeline */}
            <Section title="Trayectoria Académica">
              <div style={{ paddingLeft: "16px", position: "relative" }}>
                <div style={{ position: "absolute", left: "5px", top: "4px", bottom: "4px", width: "2px", backgroundColor: "#bbf7d0" }} />
                {[
                  { year: "2022",      title: "Bachillerato",            place: "Institución Educativa",      desc: "Educación media técnica con énfasis en tecnología." },
                  { year: "2023",      title: "Inicio Ing. de Software", place: "U. Cooperativa de Colombia", desc: "Python, Django, bases de datos, fundamentos de programación." },
                  { year: "2024",      title: "Desarrollo Intermedio",   place: "U. Cooperativa de Colombia", desc: "Java, TypeScript, CSS, UML, Git y GitHub." },
                  { year: "2025",      title: "Experiencia Avanzada",    place: "U. Cooperativa de Colombia", desc: "2° y 3° Seminario Nacional de Ing. de Software." },
                  { year: "2025–2026", title: "Full Stack Actual",       place: "Proyectos personales",       desc: "Next.js, Figma, pruebas unitarias, despliegue en Vercel." },
                ].map((item, i) => (
                  <div key={i} style={{ position: "relative", marginBottom: "11px" }}>
                    <div style={{ position: "absolute", left: "-19px", top: "4px", width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#16a34a", border: "2px solid #fff", boxShadow: "0 0 0 1.5px #16a34a" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a3d22", margin: "0 0 1px" }}>{item.title}</p>
                        <p style={{ fontSize: "10px", color: "#15803d", margin: "0 0 2px", fontWeight: 600 }}>{item.place}</p>
                        <p style={{ fontSize: "10px", color: "#4b5563", margin: 0, lineHeight: 1.45 }}>{item.desc}</p>
                      </div>
                      <span style={{ fontSize: "8px", fontWeight: 700, color: "#6b4f3b", backgroundColor: "#fef3c7", padding: "2px 7px", borderRadius: "99px", whiteSpace: "nowrap", marginLeft: "8px" }}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

          </div>
        </div>

        {/* Footer */}
        <div style={{ backgroundColor: "#15803d", padding: "8px 28px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.65)" }}>Sebastián David Marcillo · CV 2025</span>
          <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.65)" }}>github.com/sebastiandavid98</span>
        </div>
      </div>

      <p className="text-gray-500 dark:text-gray-400 text-xs mt-4">
        Vista previa del CV · Haz clic en "Descargar PDF" para obtener el archivo
      </p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <h3 style={{
        fontSize: "9px", fontWeight: 700, color: "#15803d",
        textTransform: "uppercase", letterSpacing: "1.3px",
        borderBottom: "1.5px solid #16a34a", paddingBottom: "4px", marginBottom: "8px", marginTop: 0,
      }}>
        {title}
      </h3>
      {children}
    </div>
  );
}
