"use client";
import { useLang } from "../context/LangContext";

const academic = {
  es: [
    {
      title: "Ingeniería de Software",
      place: "Universidad Cooperativa de Colombia",
      date: "2022 — Presente",
      description: "Cursando el 5° semestre. Materias destacadas: Algoritmos, Bases de Datos, Ingeniería de Requisitos, Desarrollo Web y Programación Orientada a Objetos.",
    },
  ],
  en: [
    {
      title: "Software Engineering",
      place: "Universidad Cooperativa de Colombia",
      date: "2022 — Present",
      description: "Currently in 5th semester. Key subjects: Algorithms, Databases, Requirements Engineering, Web Development and Object-Oriented Programming.",
    },
  ],
};

const work = {
  es: [
    {
      title: "Desarrollador Web Freelance",
      place: "Independiente",
      date: "2023 — Presente",
      description: "Diseño y desarrollo de sitios web y aplicaciones para clientes. Stack principal: Next.js, Tailwind CSS y Node.js.",
    },
    {
      title: "Segundo Seminario Nacional de Ingeniería de Software",
      place: "Universidad Cooperativa de Colombia",
      date: "Mayo 2025",
      description: "Participación en el seminario nacional con duración de 8 horas. Sede Pasto.",
    },
    {
      title: "Tercer Seminario Nacional de Ingeniería de Software",
      place: "Universidad Cooperativa de Colombia",
      date: "Octubre 2025",
      description: "Participación en el seminario nacional con duración de 8 horas. Sede Pasto.",
    },
  ],
  en: [
    {
      title: "Freelance Web Developer",
      place: "Independent",
      date: "2023 — Present",
      description: "Design and development of websites and applications for clients. Main stack: Next.js, Tailwind CSS and Node.js.",
    },
    {
      title: "2nd National Software Engineering Seminar",
      place: "Universidad Cooperativa de Colombia",
      date: "May 2025",
      description: "Participation in the national seminar, 8 hours duration. Pasto campus.",
    },
    {
      title: "3rd National Software Engineering Seminar",
      place: "Universidad Cooperativa de Colombia",
      date: "October 2025",
      description: "Participation in the national seminar, 8 hours duration. Pasto campus.",
    },
  ],
};

function TimelineColumn({ label, icon, items }: { label: string; icon: React.ReactNode; items: typeof academic.es }) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-sm font-semibold px-4 py-2 rounded-full mb-10">
        {icon}{label}
      </div>
      <div className="relative pl-6 border-l border-gray-200 dark:border-slate-700/60 space-y-10">
        {items.map((item, i) => (
          <div key={i} className="relative group">
            <span className="absolute -left-[1.65rem] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors duration-200" />
            <span className="inline-block text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 px-2.5 py-0.5 rounded-full mb-2">
              {item.date}
            </span>
            <div className="bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-slate-700/50 rounded-xl p-5 hover:border-blue-400 dark:hover:border-blue-500/30 transition-all duration-300">
              <h4 className="text-gray-900 dark:text-white font-bold text-base mb-0.5">{item.title}</h4>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">{item.place}</p>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const { t, lang } = useLang();

  return (
    <section id="experience" className="bg-gray-50 dark:bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-blue-600" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase">{t.experience.label}</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-14">
          {t.experience.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t.experience.titleAccent}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-14">
          <TimelineColumn
            label={t.experience.academic}
            icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3.5l4 2 4-2" /></svg>}
            items={academic[lang]}
          />
          <TimelineColumn
            label={t.experience.work}
            icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            items={work[lang]}
          />
        </div>
      </div>
    </section>
  );
}
