"use client";
import { useLang } from "../context/LangContext";

const skills = [
  { name: "JavaScript", color: "bg-yellow-400", icon: "JS" },
  { name: "TypeScript", color: "bg-blue-500", icon: "TS" },
  { name: "React", color: "bg-cyan-400", icon: "⚛" },
  { name: "Next.js", color: "bg-gray-800", icon: "N" },
  { name: "Node.js", color: "bg-green-500", icon: "⬡" },
  { name: "Tailwind", color: "bg-teal-400", icon: "~" },
  { name: "Git", color: "bg-orange-500", icon: "⎇" },
];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative bg-white dark:bg-slate-950 py-20 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="animate-slide-right flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-blue-600" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase">{t.about.label}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="animate-fade-up text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-5">
              {t.about.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                {t.about.titleAccent}
              </span>
            </h2>

            <div className="animate-fade-up delay-100 space-y-3 text-gray-600 dark:text-slate-400 text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Stats */}
            <div className="animate-fade-up delay-200 grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "5°", label: t.about.semester },
                { value: "5+", label: t.about.projects },
                { value: "2+", label: t.about.years },
              ].map(({ value, label }) => (
                <div key={label} className="bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50 rounded-xl p-4 text-center hover:border-blue-300 dark:hover:border-blue-500/40 transition-colors duration-300">
                  <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">{value}</p>
                  <p className="text-gray-500 dark:text-slate-500 text-xs mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — skills */}
          <div className="animate-fade-up delay-300">
            <p className="text-gray-400 dark:text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">{t.about.skills}</p>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((s, i) => (
                <div
                  key={s.name}
                  style={{ animationDelay: `${0.1 * i}s` }}
                  className="animate-fade-up flex items-center gap-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-500/60 hover:bg-blue-50 dark:hover:bg-blue-500/5 hover:-translate-y-0.5 px-4 py-2.5 rounded-xl transition-all duration-300 group cursor-default shadow-sm hover:shadow-md hover:shadow-blue-500/10"
                >
                  <span className={`w-6 h-6 rounded-md ${s.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {s.icon}
                  </span>
                  <span className="text-gray-700 dark:text-slate-300 text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
