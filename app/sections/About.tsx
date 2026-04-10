"use client";
import { useLang } from "../context/LangContext";

const skills = [
  { name: "JavaScript", color: "bg-yellow-400", icon: "JS" },
  { name: "TypeScript", color: "bg-blue-500", icon: "TS" },
  { name: "React", color: "bg-cyan-400", icon: "⚛" },
  { name: "Next.js", color: "bg-gray-900 dark:bg-white", icon: "N" },
  { name: "Node.js", color: "bg-green-500", icon: "⬡" },
  { name: "Tailwind", color: "bg-teal-400", icon: "~" },
  { name: "Git", color: "bg-orange-500", icon: "⎇" },
];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="bg-white dark:bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-blue-600" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase">{t.about.label}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              {t.about.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                {t.about.titleAccent}
              </span>
            </h2>

            <div className="space-y-4 text-gray-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="flex gap-8 mt-10">
              {[
                { value: "5°", label: t.about.semester },
                { value: "5+", label: t.about.projects },
                { value: "2+", label: t.about.years },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-extrabold text-gray-900 dark:text-white">{value}</p>
                  <p className="text-gray-500 dark:text-slate-500 text-sm mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gray-500 dark:text-slate-500 text-sm font-semibold uppercase tracking-widest mb-5">{t.about.skills}</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 bg-gray-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-500/50 px-4 py-2.5 rounded-xl transition-all duration-200 group cursor-default"
                >
                  <span className={`w-5 h-5 rounded-md ${s.color} flex items-center justify-center text-white text-xs font-bold`}>
                    {s.icon}
                  </span>
                  <span className="text-gray-700 dark:text-slate-300 text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
