"use client";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Profesor de Algoritmos",
    avatar: "CM",
    comment: "Sebastián demuestra una capacidad de análisis excepcional. Su enfoque para resolver problemas complejos y su dedicación al aprendizaje lo distinguen del resto del grupo.",
  },
  {
    name: "Laura Jiménez",
    role: "Compañera de equipo",
    avatar: "LJ",
    comment: "Trabajar con Sebastián fue una experiencia increíble. Siempre propone soluciones creativas, escribe código limpio y se asegura de que el equipo esté alineado en cada sprint.",
  },
  {
    name: "Andrés Torres",
    role: "Mentor — Bootcamp Web",
    avatar: "AT",
    comment: "En poco tiempo Sebastián pasó de conocer los fundamentos a construir aplicaciones full-stack completas. Su ritmo de aprendizaje y su actitud proactiva son admirables.",
  },
  {
    name: "Valentina Ríos",
    role: "Compañera de proyecto",
    avatar: "VR",
    comment: "Sebastián tiene un ojo muy bueno para el diseño y la experiencia de usuario. Cada interfaz que construye se ve profesional y funciona perfectamente en cualquier dispositivo.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white dark:bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-blue-600" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase">Testimonios</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-14">
          Lo que dicen{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">de mí</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <article key={t.name}
              className="flex flex-col bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-slate-700/50 rounded-2xl p-7 hover:border-blue-400 dark:hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 dark:text-slate-500 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">"{t.comment}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
