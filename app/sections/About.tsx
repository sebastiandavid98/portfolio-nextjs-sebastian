"use client";
import { useLang } from "../context/LangContext";
import SectionHeader from "../components/ui/SectionHeader";

const skills = [
  {
    name: "JavaScript",
    bg: "bg-yellow-400",
    shadow: "hover:shadow-yellow-400/30",
    border: "hover:border-yellow-400/60",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
        <path d="M9 25.3l2.3-1.4c.4.8.8 1.4 1.7 1.4.9 0 1.4-.3 1.4-1.7V14h2.8v9.7c0 2.8-1.6 4-4 4-2.1 0-3.4-1.1-4.2-2.4zM19.3 25l2.3-1.3c.6 1 1.3 1.7 2.7 1.7 1.1 0 1.8-.6 1.8-1.3 0-.9-.7-1.2-1.9-1.8l-.7-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-1.9 1.5-3.4 3.8-3.4 1.6 0 2.8.6 3.6 2l-2.2 1.4c-.4-.8-1-1.1-1.7-1.1-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.6 1.6l.7.3c2.2 1 3.4 1.9 3.4 4.1 0 2.3-1.8 3.6-4.3 3.6-2.4 0-3.9-1.1-4.7-2.7z" fill="#000"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    bg: "bg-blue-600",
    shadow: "hover:shadow-blue-500/30",
    border: "hover:border-blue-500/60",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <rect width="32" height="32" rx="4" fill="#3178C6"/>
        <path d="M18.3 22.7v2.6c.4.2.9.4 1.5.5.6.1 1.2.2 1.9.2.6 0 1.2-.1 1.8-.2.5-.1 1-.4 1.4-.7.4-.3.7-.7.9-1.2.2-.5.3-1.1.3-1.8 0-.5-.1-1-.2-1.4-.2-.4-.4-.8-.7-1.1-.3-.3-.7-.6-1.1-.9-.4-.3-.9-.5-1.5-.8-.4-.2-.8-.3-1.1-.5-.3-.1-.5-.3-.7-.4-.2-.1-.3-.3-.4-.5-.1-.2-.1-.4-.1-.6 0-.2 0-.4.1-.5.1-.2.2-.3.4-.4.2-.1.4-.2.6-.2.2 0 .5-.1.8-.1.2 0 .5 0 .7.1.3 0 .5.1.8.2.3.1.5.2.7.3.2.1.4.3.6.4v-2.4c-.4-.1-.8-.3-1.3-.3-.5-.1-1-.1-1.6-.1-.6 0-1.2.1-1.7.2-.5.2-1 .4-1.4.7-.4.3-.7.7-.9 1.2-.2.5-.3 1-.3 1.7 0 .8.2 1.5.7 2.1.5.6 1.2 1.1 2.2 1.5.4.2.8.3 1.2.5.3.2.6.3.9.5.2.2.4.4.5.6.1.2.2.5.2.7 0 .2 0 .4-.1.6-.1.2-.2.3-.4.5-.2.1-.4.2-.7.3-.3.1-.6.1-.9.1-.6 0-1.2-.1-1.8-.4-.5-.2-1-.5-1.4-.9zM14.5 17.3H18v-2.3H8v2.3h3.5V28h3V17.3z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "React",
    bg: "bg-cyan-500",
    shadow: "hover:shadow-cyan-400/30",
    border: "hover:border-cyan-400/60",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <rect width="32" height="32" rx="4" fill="#20232A"/>
        <ellipse cx="16" cy="16" rx="2.5" ry="2.5" fill="#61DAFB"/>
        <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none"/>
        <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120 16 16)"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    bg: "bg-gray-900",
    shadow: "hover:shadow-gray-500/30",
    border: "hover:border-gray-400/60",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <rect width="32" height="32" rx="4" fill="#000"/>
        <path d="M16 5.5C10.2 5.5 5.5 10.2 5.5 16S10.2 26.5 16 26.5 26.5 21.8 26.5 16 21.8 5.5 16 5.5zm4.5 14.8l-6.8-9.3H12v9h1.5v-6.9l6.2 8.5c-.4.2-.8.4-1.2.5V20.3zm1.5-.6V12h-1.5v6.5l1.5 2.2z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    bg: "bg-green-600",
    shadow: "hover:shadow-green-500/30",
    border: "hover:border-green-500/60",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <rect width="32" height="32" rx="4" fill="#339933"/>
        <path d="M16 5l10 5.8v11.5L16 27 6 22.3V10.8L16 5z" fill="#fff" fillOpacity=".1"/>
        <path d="M16 6.5l8.7 5v10L16 26.5l-8.7-5v-10L16 6.5z" stroke="#fff" strokeWidth=".8" fill="none"/>
        <path d="M13 19.5c0 .8.5 1.3 1.2 1.3.4 0 .7-.1.9-.4l.9.5c-.4.6-1 1-1.9 1-1.3 0-2.2-.9-2.2-2.4 0-1.4.9-2.4 2.1-2.4 1.3 0 2.1 1 2.1 2.4v.3H13zm2.1-.7c-.1-.6-.5-1-1.1-1-.5 0-.9.4-1 1h2.1zM18.5 21.8l-1.8-4.7h1.1l1.2 3.4 1.2-3.4H21l-1.8 4.7h-.7z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    bg: "bg-teal-500",
    shadow: "hover:shadow-teal-400/30",
    border: "hover:border-teal-400/60",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <rect width="32" height="32" rx="4" fill="#0F172A"/>
        <path d="M16 9c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.1 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C19.2 10.2 18.1 9 16 9zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.1 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C14.2 16.2 13.1 15 11 15z" fill="#38BDF8"/>
      </svg>
    ),
  },
  {
    name: "Git",
    bg: "bg-orange-600",
    shadow: "hover:shadow-orange-500/30",
    border: "hover:border-orange-500/60",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <rect width="32" height="32" rx="4" fill="#F05032"/>
        <path d="M27.2 14.8l-10-10a1.7 1.7 0 00-2.4 0l-2.4 2.4 3 3a2 2 0 012.6 2.6l2.9 2.9a2 2 0 11-1.2 1.2l-2.7-2.7v7a2 2 0 11-1.6 0V14a2 2 0 01-1.1-2.6L11 8.3 4.8 14.5a1.7 1.7 0 000 2.4l10 10a1.7 1.7 0 002.4 0l10-10a1.7 1.7 0 000-2.1z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    bg: "bg-green-700",
    shadow: "hover:shadow-green-600/30",
    border: "hover:border-green-500/60",
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
        <rect width="32" height="32" rx="4" fill="#13AA52"/>
        <path d="M16 5c0 0-7 7.5-7 13a7 7 0 0014 0C23 12.5 16 5 16 5zm0 18.5a1.5 1.5 0 01-1.5-1.5v-5.5a1.5 1.5 0 013 0V22a1.5 1.5 0 01-1.5 1.5z" fill="white"/>
      </svg>
    ),
  },
];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative bg-white dark:bg-slate-950 py-20 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        <SectionHeader
          label={t.about.label}
          title={t.about.title}
          titleAccent={t.about.titleAccent}
          className="mb-10"
        />

        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          {/* Left — text */}
          <div>
            <div className="animate-fade-up delay-100 space-y-3 text-gray-600 dark:text-slate-400 text-base leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </div>

          {/* Right — stats */}
          <div className="animate-fade-up delay-200 grid grid-cols-3 gap-4 md:mt-4">
            {[
              { value: "5°", label: t.about.semester },
              { value: "5+", label: t.about.projects },
              { value: "2+", label: t.about.years },
            ].map(({ value, label }) => (
              <div key={label}
                className="bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50 rounded-2xl p-5 text-center hover:border-blue-300 dark:hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
                <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">{value}</p>
                <p className="text-gray-500 dark:text-slate-500 text-xs mt-1 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div>
          <p className="animate-slide-right text-gray-400 dark:text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="h-px w-6 bg-gray-300 dark:bg-slate-700" />
            {t.about.skills}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((s, i) => (
              <div
                key={s.name}
                style={{ animationDelay: `${0.07 * i}s` }}
                className={`animate-fade-up group flex flex-col items-center gap-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 ${s.border} rounded-2xl p-5 cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${s.shadow} hover:shadow-xl hover:bg-white dark:hover:bg-slate-800`}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white dark:bg-slate-900 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  {s.icon}
                </div>
                <span className="text-gray-700 dark:text-slate-300 text-sm font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 text-center">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
