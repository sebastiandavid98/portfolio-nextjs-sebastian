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
      points: [
        "Formación en educación básica y media técnica",
        "Enfoque en herramientas tecnológicas",
        "Inicio en programación",
      ],
      tech: ["HTML", "Python", "Java", "MySQL"],
    },
    {
      year: "2023",
      title: "Inicio Ingeniería de Software",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: [
        "Fundamentos de programación",
        "Python avanzado",
        "Desarrollo con Django",
        "Conexiones a bases de datos",
        "Uso de Markdown",
      ],
      tech: ["Python", "Django", "MySQL", "Markdown"],
    },
    {
      year: "2024",
      title: "Desarrollo Intermedio",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: [
        "Java orientado a objetos",
        "TypeScript",
        "CSS avanzado",
        "Diagramas UML",
        "Historias de usuario",
        "Git y GitHub",
      ],
      tech: ["Java", "TypeScript", "CSS", "UML", "Git"],
    },
    {
      year: "2025",
      title: "Experiencia Académica Avanzada",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: [
        "Uso intensivo de Git y flujos de trabajo colaborativos",
        "Segundo Seminario Nacional de Ingeniería de Software",
        "Tercer Seminario Nacional de Ingeniería de Software",
      ],
      tech: ["Git", "GitHub"],
    },
    {
      year: "2025 – 2026",
      title: "Desarrollo Full Stack",
      institution: "Proyectos personales y académicos",
      type: "work",
      points: [
        "Desarrollo Backend y Frontend integrado",
        "Pruebas unitarias y de integración",
        "Despliegue en Vercel",
        "Optimización de rendimiento",
      ],
      tech: ["Next.js", "Node.js", "Vercel", "Testing"],
    },
    {
      year: "2026",
      title: "Nivel Actual",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: [
        "Java y TypeScript avanzado",
        "Next.js y ecosistema React",
        "Figma para diseño UI/UX",
        "Desarrollo de proyectos completos",
      ],
      tech: ["Java", "TypeScript", "Next.js", "Figma"],
    },
  ],
  en: [
    {
      year: "2022",
      title: "High School",
      institution: "Educational Institution",
      type: "academic",
      points: [
        "Basic and technical secondary education",
        "Focus on technology tools",
        "Introduction to programming",
      ],
      tech: ["HTML", "Python", "Java", "MySQL"],
    },
    {
      year: "2023",
      title: "Software Engineering — Start",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: [
        "Programming fundamentals",
        "Advanced Python",
        "Django development",
        "Database connections",
        "Markdown usage",
      ],
      tech: ["Python", "Django", "MySQL", "Markdown"],
    },
    {
      year: "2024",
      title: "Intermediate Development",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: [
        "Object-oriented Java",
        "TypeScript",
        "Advanced CSS",
        "UML diagrams",
        "User stories",
        "Git and GitHub",
      ],
      tech: ["Java", "TypeScript", "CSS", "UML", "Git"],
    },
    {
      year: "2025",
      title: "Advanced Academic Experience",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: [
        "Intensive Git usage and collaborative workflows",
        "2nd National Software Engineering Seminar",
        "3rd National Software Engineering Seminar",
      ],
      tech: ["Git", "GitHub"],
    },
    {
      year: "2025 – 2026",
      title: "Full Stack Development",
      institution: "Personal and academic projects",
      type: "work",
      points: [
        "Integrated Backend and Frontend development",
        "Unit and integration testing",
        "Deployment on Vercel",
        "Performance optimization",
      ],
      tech: ["Next.js", "Node.js", "Vercel", "Testing"],
    },
    {
      year: "2026",
      title: "Current Level",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: [
        "Advanced Java and TypeScript",
        "Next.js and React ecosystem",
        "Figma for UI/UX design",
        "Complete project development",
      ],
      tech: ["Java", "TypeScript", "Next.js", "Figma"],
    },
  ],
  fr: [
    {
      year: "2022",
      title: "Lycée",
      institution: "Établissement scolaire",
      type: "academic",
      points: [
        "Formation secondaire technique",
        "Accent sur les outils technologiques",
        "Introduction à la programmation",
      ],
      tech: ["HTML", "Python", "Java", "MySQL"],
    },
    {
      year: "2023",
      title: "Début Génie Logiciel",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: [
        "Fondamentaux de la programmation",
        "Python avancé",
        "Développement avec Django",
        "Connexions aux bases de données",
      ],
      tech: ["Python", "Django", "MySQL"],
    },
    {
      year: "2024",
      title: "Développement Intermédiaire",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: ["Java orienté objet", "TypeScript", "CSS avancé", "Diagrammes UML", "Git et GitHub"],
      tech: ["Java", "TypeScript", "CSS", "UML", "Git"],
    },
    {
      year: "2025",
      title: "Expérience Académique Avancée",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: ["Utilisation intensive de Git", "2ème Séminaire National", "3ème Séminaire National"],
      tech: ["Git", "GitHub"],
    },
    {
      year: "2025 – 2026",
      title: "Développement Full Stack",
      institution: "Projets personnels et académiques",
      type: "work",
      points: ["Backend et Frontend intégrés", "Tests unitaires", "Déploiement sur Vercel"],
      tech: ["Next.js", "Node.js", "Vercel"],
    },
    {
      year: "2026",
      title: "Niveau Actuel",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: ["Java et TypeScript avancés", "Next.js", "Figma", "Projets complets"],
      tech: ["Java", "TypeScript", "Next.js", "Figma"],
    },
  ],
  ja: [
    {
      year: "2022",
      title: "高校",
      institution: "教育機関",
      type: "academic",
      points: ["基礎・技術中等教育", "技術ツールへの注力", "プログラミング入門"],
      tech: ["HTML", "Python", "Java", "MySQL"],
    },
    {
      year: "2023",
      title: "ソフトウェアエンジニアリング開始",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: ["プログラミング基礎", "Python上級", "Django開発", "データベース接続"],
      tech: ["Python", "Django", "MySQL"],
    },
    {
      year: "2024",
      title: "中級開発",
      institution: "Universidad Cooperativa de Colombia",
      type: "academic",
      points: ["オブジェクト指向Java", "TypeScript", "高度なCSS", "UML図", "Git"],
      tech: ["Java", "TypeScript", "CSS", "UML", "Git"],
    },
    {
      year: "2025",
      title: "高度な学術経験",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: ["Git集中使用", "第2回全国セミナー", "第3回全国セミナー"],
      tech: ["Git", "GitHub"],
    },
    {
      year: "2025 – 2026",
      title: "フルスタック開発",
      institution: "個人・学術プロジェクト",
      type: "work",
      points: ["バックエンド・フロントエンド統合", "ユニットテスト", "Vercelデプロイ"],
      tech: ["Next.js", "Node.js", "Vercel"],
    },
    {
      year: "2026",
      title: "現在のレベル",
      institution: "Universidad Cooperativa de Colombia",
      type: "milestone",
      points: ["Java・TypeScript上級", "Next.js", "Figma", "完全なプロジェクト開発"],
      tech: ["Java", "TypeScript", "Next.js", "Figma"],
    },
  ],
};

const typeConfig = {
  academic:  { dot: "bg-blue-500",   badge: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-500/20",  label: { es: "Académico", en: "Academic", fr: "Académique", ja: "学術" } },
  work:      { dot: "bg-emerald-500", badge: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20", label: { es: "Laboral", en: "Work", fr: "Professionnel", ja: "職歴" } },
  milestone: { dot: "bg-violet-500",  badge: "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-500/20",  label: { es: "Hito", en: "Milestone", fr: "Étape clé", ja: "マイルストーン" } },
};

function TimelineCard({ item, index, lang }: { item: TimelineItem; index: number; lang: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const cfg = typeConfig[item.type];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="timeline-item relative flex items-start gap-0 md:gap-6"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Desktop: left side content */}
      <div className={`hidden md:flex flex-1 ${isLeft ? "justify-end pr-6" : "justify-start pl-6 order-last"}`}>
        {isLeft && (
          <div className="max-w-sm w-full">
            <CardContent item={item} cfg={cfg} lang={lang} />
          </div>
        )}
        {!isLeft && (
          <span className={`mt-1 inline-block text-xs font-bold px-3 py-1.5 rounded-full border ${cfg.badge}`}>
            {item.year}
          </span>
        )}
      </div>

      {/* Center dot */}
      <div className="hidden md:flex flex-col items-center shrink-0 pt-1">
        <div className={`w-4 h-4 rounded-full ${cfg.dot} border-4 border-white dark:border-[#060D1F] shadow-md z-10`} />
      </div>

      {/* Desktop: right side content */}
      <div className={`hidden md:flex flex-1 ${isLeft ? "justify-start pl-6" : "justify-end pr-6"}`}>
        {!isLeft && (
          <div className="max-w-sm w-full">
            <CardContent item={item} cfg={cfg} lang={lang} />
          </div>
        )}
        {isLeft && (
          <span className={`mt-1 inline-block text-xs font-bold px-3 py-1.5 rounded-full border ${cfg.badge}`}>
            {item.year}
          </span>
        )}
      </div>

      {/* Mobile: full width */}
      <div className="md:hidden flex gap-4 w-full pl-2">
        <div className="flex flex-col items-center shrink-0 pt-1.5">
          <div className={`w-3.5 h-3.5 rounded-full ${cfg.dot} border-4 border-white dark:border-[#060D1F] shadow-md z-10`} />
          <div className="w-px flex-1 bg-gradient-to-b from-gray-300 dark:from-slate-700 to-transparent mt-1" />
        </div>
        <div className="flex-1 pb-6">
          <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-2 ${cfg.badge}`}>
            {item.year}
          </span>
          <CardContent item={item} cfg={cfg} lang={lang} />
        </div>
      </div>
    </div>
  );
}

function CardContent({ item, cfg, lang }: { item: TimelineItem; cfg: typeof typeConfig.academic; lang: string }) {
  return (
    <div className="group bg-white dark:bg-[#0F1E3A] border border-gray-200 dark:border-[#1A2E50] rounded-2xl p-5 hover:border-blue-300 dark:hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/8 hover:-translate-y-1 transition-all duration-300">
      {/* Type badge */}
      <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${cfg.badge}`}>
        {cfg.label[lang as keyof typeof cfg.label] ?? cfg.label.es}
      </span>

      <h3 className="text-gray-900 dark:text-white font-bold text-base leading-snug mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
        {item.title}
      </h3>

      {item.institution && (
        <p className="text-blue-600 dark:text-blue-400 text-xs font-medium mb-3">{item.institution}</p>
      )}

      <ul className="space-y-1 mb-4">
        {item.points.map((p, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-slate-400 text-sm">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 shrink-0" />
            {p}
          </li>
        ))}
      </ul>

      {item.tech && item.tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.tech.map((t) => (
            <TechPill key={t} label={t} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const { t, lang } = useLang();
  const items = timeline[lang] ?? timeline.es;

  return (
    <section id="experience" className="relative bg-gray-50 dark:bg-slate-900 py-20 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        <SectionHeader
          label={t.experience.label}
          title={t.experience.title}
          titleAccent={t.experience.titleAccent}
          className="mb-4"
        />

        {/* Year range bar */}
        <div className="animate-fade-up delay-100 flex items-center gap-3 mb-14">
          <span className="text-gray-400 dark:text-slate-500 text-sm font-medium">2022</span>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 via-blue-400 to-violet-400 dark:from-slate-700 dark:via-blue-500 dark:to-violet-500" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">2026</span>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-300 dark:via-blue-700/60 to-transparent -translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">
            {items.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} lang={lang} />
            ))}
          </div>
        </div>

        {/* End cap */}
        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-600 to-violet-500 shadow-lg shadow-blue-500/30" />
            <div className="w-px h-6 bg-gradient-to-b from-blue-400 to-transparent dark:from-blue-600" />
          </div>
        </div>

      </div>
    </section>
  );
}
