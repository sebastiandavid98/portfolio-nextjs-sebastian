"use client";
import { useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";

type Item = { title: string; place: string; date: string; description: string; type: "academic" | "work" };

const items: Record<string, Item[]> = {
  es: [
    { type: "academic", title: "Bachillerato", place: "Institución Educativa", date: "2016 – 2021", description: "Formación secundaria con énfasis en ciencias exactas y primer acercamiento a la programación." },
    { type: "academic", title: "Ingeniería de Software", place: "Universidad Cooperativa de Colombia", date: "2022 – Presente", description: "Cursando el 5° semestre. Materias: Algoritmos, Bases de Datos, Ingeniería de Requisitos, Desarrollo Web y POO." },
    { type: "work", title: "Desarrollador Web Freelance", place: "Independiente", date: "2023 – Presente", description: "Diseño y desarrollo de sitios web y aplicaciones para clientes. Stack: Next.js, Tailwind CSS y Node.js." },
    { type: "work", title: "2° Seminario Nacional de Ing. de Software", place: "Universidad Cooperativa de Colombia", date: "Mayo 2025", description: "Participación en el seminario nacional con duración de 8 horas. Sede Pasto." },
    { type: "work", title: "3° Seminario Nacional de Ing. de Software", place: "Universidad Cooperativa de Colombia", date: "Octubre 2025", description: "Participación en el seminario nacional con duración de 8 horas. Sede Pasto." },
  ],
  en: [
    { type: "academic", title: "High School", place: "Educational Institution", date: "2016 – 2021", description: "Secondary education with emphasis on exact sciences and first approach to programming." },
    { type: "academic", title: "Software Engineering", place: "Universidad Cooperativa de Colombia", date: "2022 – Present", description: "Currently in 5th semester. Subjects: Algorithms, Databases, Requirements Engineering, Web Development and OOP." },
    { type: "work", title: "Freelance Web Developer", place: "Independent", date: "2023 – Present", description: "Design and development of websites and applications for clients. Stack: Next.js, Tailwind CSS and Node.js." },
    { type: "work", title: "2nd National Software Engineering Seminar", place: "Universidad Cooperativa de Colombia", date: "May 2025", description: "Participation in the national seminar, 8 hours duration. Pasto campus." },
    { type: "work", title: "3rd National Software Engineering Seminar", place: "Universidad Cooperativa de Colombia", date: "October 2025", description: "Participation in the national seminar, 8 hours duration. Pasto campus." },
  ],
  fr: [
    { type: "academic", title: "Lycée", place: "Établissement scolaire", date: "2016 – 2021", description: "Formation secondaire avec accent sur les sciences exactes et première approche de la programmation." },
    { type: "academic", title: "Génie Logiciel", place: "Universidad Cooperativa de Colombia", date: "2022 – Présent", description: "En 5ème semestre. Matières : Algorithmes, Bases de Données, Génie des Exigences, Développement Web et POO." },
    { type: "work", title: "Développeur Web Freelance", place: "Indépendant", date: "2023 – Présent", description: "Conception et développement de sites web et d'applications. Stack : Next.js, Tailwind CSS et Node.js." },
    { type: "work", title: "2ème Séminaire National de Génie Logiciel", place: "Universidad Cooperativa de Colombia", date: "Mai 2025", description: "Participation au séminaire national d'une durée de 8 heures. Campus de Pasto." },
    { type: "work", title: "3ème Séminaire National de Génie Logiciel", place: "Universidad Cooperativa de Colombia", date: "Octobre 2025", description: "Participation au séminaire national d'une durée de 8 heures. Campus de Pasto." },
  ],
  ja: [
    { type: "academic", title: "高校", place: "教育機関", date: "2016 – 2021", description: "理系科目を中心とした中等教育とプログラミングへの最初のアプローチ。" },
    { type: "academic", title: "ソフトウェアエンジニアリング", place: "Universidad Cooperativa de Colombia", date: "2022 – 現在", description: "5学期在学中。科目：アルゴリズム、データベース、要件工学、Web開発、OOP。" },
    { type: "work", title: "フリーランスWebデベロッパー", place: "独立", date: "2023 – 現在", description: "クライアント向けWebサイト・アプリ開発。スタック：Next.js、Tailwind CSS、Node.js。" },
    { type: "work", title: "第2回全国ソフトウェアエンジニアリングセミナー", place: "Universidad Cooperativa de Colombia", date: "2025年5月", description: "8時間のセミナーに参加。パスト校にて開催。" },
    { type: "work", title: "第3回全国ソフトウェアエンジニアリングセミナー", place: "Universidad Cooperativa de Colombia", date: "2025年10月", description: "8時間のセミナーに参加。パスト校にて開催。" },
  ],
};

const AcademicIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-4-3.5l4 2 4-2" />
  </svg>
);

const WorkIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

function TimelineItem({ item, index }: { item: Item; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;
  const isAcademic = item.type === "academic";

  return (
    <div
      ref={ref}
      className={`timeline-item relative flex items-center gap-0 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
    >
      {/* Card — desktop alternating, mobile always right */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"} pl-10 md:pl-0`}>
        <div className={`group inline-block w-full bg-white dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700/50 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-blue-500/8 hover:-translate-y-1 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500/40 text-left`}>

          {/* Type badge */}
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${
            isAcademic
              ? "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20"
              : "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20"
          }`}>
            {isAcademic ? <AcademicIcon /> : <WorkIcon />}
            {isAcademic ? "Académico" : "Laboral"}
          </span>

          <h3 className="text-gray-900 dark:text-white font-bold text-base leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">{item.place}</p>
          <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Center dot — hidden on mobile (uses left border instead) */}
      <div className="hidden md:flex flex-col items-center shrink-0 z-10">
        <div className={`w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 shadow-lg transition-all duration-500 ${
          isAcademic ? "bg-cyan-500" : "bg-blue-600"
        } group-hover:scale-125`} />
      </div>

      {/* Date — desktop opposite side */}
      <div className={`hidden md:flex flex-1 ${isLeft ? "justify-start" : "justify-end"}`}>
        <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full border ${
          isAcademic
            ? "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20"
            : "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20"
        }`}>
          {item.date}
        </span>
      </div>

      {/* Mobile: left dot */}
      <div className="absolute left-0 top-6 md:hidden flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 shadow-md ${
          isAcademic ? "bg-cyan-500" : "bg-blue-600"
        }`} />
      </div>
    </div>
  );
}

export default function Experience() {
  const { t, lang } = useLang();
  const list = items[lang] ?? items.es;

  return (
    <section id="experience" className="relative bg-gray-50 dark:bg-slate-900 py-20 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">

        {/* Header */}
        <div className="animate-slide-right flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-blue-600" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase">{t.experience.label}</span>
        </div>
        <h2 className="animate-fade-up text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
          {t.experience.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t.experience.titleAccent}</span>
        </h2>

        {/* Year range */}
        <div className="animate-fade-up delay-100 flex items-center gap-3 mb-14">
          <span className="text-gray-400 dark:text-slate-500 text-sm font-medium">2016</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 via-blue-400 to-cyan-400 dark:from-slate-700 dark:via-blue-500 dark:to-cyan-500" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">2026</span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-300 dark:via-blue-700 to-transparent -translate-x-1/2" />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-300 dark:via-blue-700 to-transparent" />

          <div className="space-y-10">
            {list.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* End cap */}
        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30" />
            <div className="w-px h-6 bg-gradient-to-b from-blue-400 to-transparent dark:from-blue-600" />
          </div>
        </div>

      </div>
    </section>
  );
}
