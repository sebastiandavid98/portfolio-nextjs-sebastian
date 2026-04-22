"use client";
import { useLang } from "../context/LangContext";
import SectionHeader from "../components/ui/SectionHeader";

const skills = [
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "TypeScript", color: "bg-green-600" },
  { name: "React", color: "bg-cyan-400" },
  { name: "Next.js", color: "bg-slate-900 dark:bg-slate-200" },
  { name: "Node.js", color: "bg-green-600" },
  { name: "Tailwind", color: "bg-teal-400" },
  { name: "Git", color: "bg-orange-600" },
  { name: "MongoDB", color: "bg-green-600" },
  { name: "MySQL", color: "bg-blue-600" },
  { name: "XAMPP", color: "bg-orange-600" },
  { name: "Python", color: "bg-green-600" },
  { name: "Java", color: "bg-red-600" },
  { name: "Figma", color: "bg-purple-600" },
];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative bg-white dark:bg-slate-950 py-16 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-50 dark:bg-green-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left — text */}
          <div className="animate-fade-up">
            <SectionHeader
              label={t.about.label}
              title={t.about.title}
              titleAccent={t.about.titleAccent}
              className="mb-6"
            />
            <div className="space-y-4 text-gray-600 dark:text-slate-400 text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="flex gap-10 mt-10">
              {[
                { value: "5°", label: t.about.semester },
                { value: "5+", label: t.about.projects },
                { value: "2+", label: t.about.years },
              ].map(({ value, label }) => (
                <div key={label} className="animate-fade-up">
                  <p className="text-3xl font-extrabold text-gray-900 dark:text-white">{value}</p>
                  <p className="text-gray-500 dark:text-slate-500 text-xs font-medium uppercase tracking-wider mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills Grid */}
          <div className="animate-fade-up delay-200">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-6 bg-gray-300 dark:bg-slate-700" />
              <span className="text-gray-400 dark:text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
                {t.about.skills}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-3 bg-gray-50/50 dark:bg-slate-900/40 border border-gray-100 dark:border-slate-800/50 px-4 py-3 rounded-xl hover:bg-white dark:hover:bg-slate-800 hover:border-blue-400/30 hover:shadow-md transition-all duration-300"
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${skill.color} shadow-sm group-hover:scale-110 transition-transform`} />
                  <span className="text-gray-700 dark:text-slate-300 text-sm font-semibold tracking-tight">
                    {skill.name}
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



