"use client";
import { useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";
import SectionHeader from "../components/ui/SectionHeader";
import TechPill from "../components/ui/TechPill";

type TimelineItem = {
  year: string;
  title: string;
  institution?: string;
  points: string[];
  tech?: string[];
  type: "academic" | "work" | "milestone";
};

const timeline: Record<string, TimelineItem[]> = {
  es: [
    {
      year: "2022",
      title: "Bachillerato",
      institution: "Institución Educativa",
      type: "academic",
      points: ["Educación básica y media técnica", "Herramientas tecnológicas", "Inicio en programación"],
      tech: ["HTML", "Python", "Java", "MySQL"],
    },
    {
      year: "2023",
      title: "Inicio Ingeniería de Software",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: ["Fundamentos de programación", "Python avanzado", "Django", "Bases de datos", "Markdown"],
      tech: ["Python", "Django", "MySQL", "Markdown"],
    },
    {
      year: "2024",
      title: "Desarrollo Intermedio",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: ["Java orientado a objetos", "TypeScript", "CSS avanzado", "Diagramas UML", "Git y GitHub"],
      tech: ["Java", "TypeScript", "CSS", "UML", "Git"],
    },
    {
      year: "2025",
      title: "Experiencia Avanzada",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: ["Uso intensivo de Git", "2° Seminario Nacional de Ing. de Software", "3° Seminario Nacional de Ing. de Software"],
      tech: ["Git", "GitHub"],
    },
    {
      year: "2025–2026",
      title: "Desarrollo Full Stack",
      institution: "Proyectos personales y académicos",
      type: "work",
      points: ["Backend y Frontend integrado", "Pruebas unitarias", "Despliegue en Vercel", "Optimización de rendimiento"],
      tech: ["Next.js", "Node.js", "Vercel", "Testing"],
    },
    {
      year: "2026",
      title: "Nivel Actual",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: ["Java y TypeScript avanzado", "Next.js y React", "Figma UI/UX", "Proyectos completos"],
      tech: ["Java", "TypeScript", "Next.js", "Figma"],
    },
  ],
  en: [
    {
      year: "2022",
      title: "High School",
      institution: "Educational Institution",
      type: "academic",
      points: ["Basic and technical secondary education", "Technology tools", "Introduction to programming"],
      tech: ["HTML", "Python", "Java", "MySQL"],
    },
    {
      year: "2023",
      title: "Software Engineering — Start",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: ["Programming fundamentals", "Advanced Python", "Django", "Databases", "Markdown"],
      tech: ["Python", "Django", "MySQL", "Markdown"],
    },
    {
      year: "2024",
      title: "Intermediate Development",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: ["Object-oriented Java", "TypeScript", "Advanced CSS", "UML diagrams", "Git and GitHub"],
      tech: ["Java", "TypeScript", "CSS", "UML", "Git"],
    },
    {
      year: "2025",
      title: "Advanced Experience",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: ["Intensive Git usage", "2nd National Software Engineering Seminar", "3rd National Software Engineering Seminar"],
      tech: ["Git", "GitHub"],
    },
    {
      year: "2025–2026",
      title: "Full Stack Development",
      institution: "Personal and academic projects",
      type: "work",
      points: ["Integrated Backend and Frontend", "Unit testing", "Vercel deployment", "Performance optimization"],
      tech: ["Next.js", "Node.js", "Vercel", "Testing"],
    },
    {
      year: "2026",
      title: "Current Level",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: ["Advanced Java and TypeScript", "Next.js and React", "Figma UI/UX", "Complete projects"],
      tech: ["Java", "TypeScript", "Next.js", "Figma"],
    },
  ],
  fr: [
    {
      year: "2022", title: "Lycée", institution: "Établissement scolaire", type: "academic",
      points: ["Formation secondaire technique", "Outils technologiques", "Introduction à la programmation"],
      tech: ["HTML", "Python", "Java", "MySQL"],
    },
    {
      year: "2023", title: "Début Génie Logiciel", institution: "Universidad Cooperativa de Colombia", type: "academic",
      points: ["Fondamentaux de programmation", "Python avancé", "Django", "Bases de données"],
      tech: ["Python", "Django", "MySQL"],
    },
    {
      year: "2024", title: "Développement Intermédiaire", institution: "Universidad Cooperativa de Colombia", type: "academic",
      points: ["Java orienté objet", "TypeScript", "CSS avancé", "UML", "Git"],
      tech: ["Java", "TypeScript", "CSS", "UML", "Git"],
    },
    {
      year: "2025", title: "Expérience Avancée", institution: "Universidad Cooperativa de Colombia", type: "milestone",
      points: ["Git intensif", "2ème Séminaire National", "3ème Séminaire National"],
      tech: ["Git", "GitHub"],
    },
    {
      year: "2025–2026", title: "Développement Full Stack", institution: "Projets personnels", type: "work",
      points: ["Backend et Frontend", "Tests unitaires", "Déploiement Vercel"],
      tech: ["Next.js", "Node.js", "Vercel"],
    },
    {
      year: "2026", title: "Niveau Actuel", institution: "Universidad Cooperativa de Colombia", type: "milestone",
      points: ["Java et TypeScript avancés", "Next.js", "Figma", "Projets complets"],
      tech: ["Java", "TypeScript", "Next.js", "Figma"],
    },
  ],
  ja: [
    {
      year: "2022", title: "高校", institution: "教育機関", type: "academic",
      points: ["基礎・技術中等教育", "技術ツール", "プログラミング入門"],
      tech: ["HTML", "Python", "Java", "MySQL"],
    },
    {
      year: "2023", title: "ソフトウェアエンジニアリング開始", institution: "Universidad Cooperativa de Colombia", type: "academic",
      points: ["プログラミング基礎", "Python上級", "Django", "データベース"],
      tech: ["Python", "Django", "MySQL"],
    },
    {
      year: "2024", title: "中級開発", institution: "Universidad Cooperativa de Colombia", type: "academic",
      points: ["オブジェクト指向Java", "TypeScript", "高度なCSS", "UML", "Git"],
      tech: ["Java", "TypeScript", "CSS", "UML", "Git"],
    },
    {
      year: "2025", title: "高度な学術経験", institution: "Universidad Cooperativa de Colombia", type: "milestone",
      points: ["Git集中使用", "第2回全国セミナー", "第3回全国セミナー"],
      tech: ["Git", "GitHub"],
    },
    {
      year: "2025–2026", title: "フルスタック開発", institution: "個人・学術プロジェクト", type: "work",
      points: ["バックエンド・フロントエンド統合", "ユニットテスト", "Vercelデプロイ"],
      tech: ["Next.js", "Node.js", "Vercel"],
    },
    {
      year: "2026", title: "現在のレベル", institution: "Universidad Cooperativa de Colombia", type: "milestone",
      points: ["Java・TypeScript上級", "Next.js", "Figma", "完全なプロジェクト"],
      tech: ["Java", "TypeScript", "Next.js", "Figma"],
    },
  ],
};

const typeConfig = {
  academic:  { dot: "bg-blue-500",    line: "border-blue-400",   badge: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20",    label: { es: "Académico", en: "Academic",     fr: "Académique",    ja: "学術" } },
  work:      { dot: "bg-emerald-500", line: "border-emerald-400", badge: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20", label: { es: "Laboral",   en: "Work",          fr: "Professionnel", ja: "職歴" } },
  milestone: { dot: "bg-violet-500",  line: "border-violet-400",  badge: "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/20",   label: { es: "Hito",      en: "Milestone",     fr: "Étape clé",     ja: "マイルストーン" } },
};

function HorizontalCard({ item, index, lang, position }: {
  item: TimelineItem;
  index: number;
  lang: string;
  position: "top" | "bottom";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const cfg = typeConfig[item.type];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="timeline-item flex flex-col items-center"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Top card or spacer */}
      {position === "top" ? (
        <div className="group w-52 bg-white dark:bg-[#0F1E3A] border border-gray-200 dark:border-[#1A2E50] rounded-2xl p-4 hover:border-blue-300 dark:hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 mb-4">
          <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-2 ${cfg.badge}`}>
            {cfg.label[lang as keyof typeof cfg.label] ?? cfg.label.es}
          </span>
          <h3 className="text-gray-900 dark:text-white font-bold text-sm leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
          {item.institution && (
            <p className="text-blue-600 dark:text-blue-400 text-xs mb-2 leading-tight">{item.institution}</p>
          )}
          <ul className="space-y-0.5 mb-3">
            {item.points.map((p, i) => (
              <li key={i} className="flex items-start gap-1.5 text-gray-500 dark:text-slate-400 text-xs">
                <span className="mt-1 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          {item.tech && (
            <div className="flex flex-wrap gap-1">
              {item.tech.map((t) => <TechPill key={t} label={t} className="text-[10px] px-2 py-0.5" />)}
            </div>
          )}
        </div>
      ) : (
        <div className="h-4 mb-4" />
      )}

      {/* Connector line top */}
      <div className={`w-px h-6 ${position === "top" ? "bg-gradient-to-b from-gray-300 dark:from-slate-600 to-transparent" : "bg-transparent"}`} />

      {/* Dot */}
      <div className={`w-4 h-4 rounded-full ${cfg.dot} border-4 border-white dark:border-[#060D1F] shadow-md z-10 shrink-0`} />

      {/* Connector line bottom */}
      <div className={`w-px h-6 ${position === "bottom" ? "bg-gradient-to-t from-gray-300 dark:from-slate-600 to-transparent" : "bg-transparent"}`} />

      {/* Year label */}
      <span className="text-xs font-bold text-gray-500 dark:text-slate-400 mt-1 mb-2 whitespace-nowrap">
        {item.year}
      </span>

      {/* Bottom card or spacer */}
      {position === "bottom" ? (
        <div className="group w-52 bg-white dark:bg-[#0F1E3A] border border-gray-200 dark:border-[#1A2E50] rounded-2xl p-4 hover:border-blue-300 dark:hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 hover:translate-y-1 transition-all duration-300 mt-2">
          <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-2 ${cfg.badge}`}>
            {cfg.label[lang as keyof typeof cfg.label] ?? cfg.label.es}
          </span>
          <h3 className="text-gray-900 dark:text-white font-bold text-sm leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
          {item.institution && (
            <p className="text-blue-600 dark:text-blue-400 text-xs mb-2 leading-tight">{item.institution}</p>
          )}
          <ul className="space-y-0.5 mb-3">
            {item.points.map((p, i) => (
              <li key={i} className="flex items-start gap-1.5 text-gray-500 dark:text-slate-400 text-xs">
                <span className="mt-1 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          {item.tech && (
            <div className="flex flex-wrap gap-1">
              {item.tech.map((t) => <TechPill key={t} label={t} className="text-[10px] px-2 py-0.5" />)}
            </div>
          )}
        </div>
      ) : (
        <div className="h-4" />
      )}
    </div>
  );
}

export default function Experience() {
  const { t, lang } = useLang();
  const items = timeline[lang] ?? timeline.es;

  return (
    <section id="experience" className="relative bg-gray-50 dark:bg-slate-900 py-14 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        <SectionHeader
          label={t.experience.label}
          title={t.experience.title}
          titleAccent={t.experience.titleAccent}
          className="mb-4"
        />

        {/* Year range */}
        <div className="animate-fade-up delay-100 flex items-center gap-3 mb-8">
          <span className="text-gray-400 dark:text-slate-500 text-sm font-medium">2022</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 via-blue-400 to-violet-400 dark:from-slate-700 dark:via-blue-500 dark:to-violet-500" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">2026</span>
        </div>

        {/* Horizontal timeline — scrollable on mobile */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6">
          <div className="inline-flex items-center min-w-max relative">

            {/* Horizontal center line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-700/60 to-transparent pointer-events-none" />

            {/* Cards */}
            <div className="flex items-center gap-0">
              {items.map((item, i) => (
                <div key={i} className="flex items-center">
                  <HorizontalCard
                    item={item}
                    index={i}
                    lang={lang}
                    position={i % 2 === 0 ? "top" : "bottom"}
                  />
                  {/* Connector between cards */}
                  {i < items.length - 1 && (
                    <div className="w-8 h-px bg-gradient-to-r from-gray-300 to-gray-300 dark:from-slate-600 dark:to-slate-600 shrink-0 self-center" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile fallback hint */}
        <p className="text-center text-gray-400 dark:text-slate-600 text-xs mt-4 md:hidden">
          ← Desliza para ver más →
        </p>

      </div>
    </section>
  );
}
