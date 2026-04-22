"use client";
import { useLang } from "../context/LangContext";
import SectionHeader from "../components/ui/SectionHeader";

const skills = [
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F7DF1E]">
        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M1.5 1.5h21v21h-21v-21zm19.5 13.5c0-1.8-1.2-2.7-2.7-2.7-1.5 0-2.3.8-2.3 2.1 0 1.2.8 1.8 1.8 2.2l.5.2c.9.4 1.2.7 1.2 1.3 0 .6-.5 1-1.3 1-.8 0-1.3-.4-1.6-1.1l-1.6 1c.5 1.2 1.4 1.9 3.2 1.9 2 0 3.2-1.1 3.2-2.7 0-1.2-.7-1.9-1.9-2.4l-.5-.2c-.7-.3-1.1-.6-1.1-1.1 0-.5.5-.8 1.1-.8.6 0 1 .3 1.3.8l1.6-1.1zm-8.2 5.1c0 1.1-.7 1.8-1.9 1.8-1.1 0-1.8-.7-1.8-1.8v-6.6h1.8v6.6zm-1.8-10.2c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1.5-1.1 1.1-1.1 1.1.5 1.1 1.1z"/>
      </svg>
    )
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#3178C6]">
        <path d="M1.5 1.5h21v21h-21v-21zm19.5 13.5c0-1.8-1.2-2.7-2.7-2.7-1.5 0-2.3.8-2.3 2.1 0 1.2.8 1.8 1.8 2.2l.5.2c.9.4 1.2.7 1.2 1.3 0 .6-.5 1-1.3 1-.8 0-1.3-.4-1.6-1.1l-1.6 1c.5 1.2 1.4 1.9 3.2 1.9 2 0 3.2-1.1 3.2-2.7 0-1.2-.7-1.9-1.9-2.4l-.5-.2c-.7-.3-1.1-.6-1.1-1.1 0-.5.5-.8 1.1-.8.6 0 1 .3 1.3.8l1.6-1.1zM11.2 7.5h-7.5v2.3h2.6v10.5h2.3v-10.5h2.6v-2.3z"/>
      </svg>
    )
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#61DAFB]">
        <circle cx="12" cy="12" r="2.5"/><path d="M12 7.5c4.4 0 8 1.8 8 4s-3.6 4-8 4-8-1.8-8-4 3.6-4 8-4zm0-3c-6.1 0-11 3.1-11 7s4.9 7 11 7 11-3.1 11-7-4.9-7-11-7z" transform="rotate(60 12 12)"/><path d="M12 7.5c4.4 0 8 1.8 8 4s-3.6 4-8 4-8-1.8-8-4 3.6-4 8-4zm0-3c-6.1 0-11 3.1-11 7s4.9 7 11 7 11-3.1 11-7-4.9-7-11-7z" transform="rotate(120 12 12)"/><path d="M12 7.5c4.4 0 8 1.8 8 4s-3.6 4-8 4-8-1.8-8-4 3.6-4 8-4zm0-3c-6.1 0-11 3.1-11 7s4.9 7 11 7 11-3.1 11-7-4.9-7-11-7z"/>
      </svg>
    )
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-black dark:fill-white">
        <path d="M12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm6.5 18.2l-6.8-9.3h-1.2v9h1.5v-6.9l6.2 8.5c-.4.2-.8.4-1.2.5v.2zm1.5-.6v-8.6h-1.5v6.5l1.5 2.1z"/>
      </svg>
    )
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#339933]">
        <path d="M12 1l10.4 6v12l-10.4 6-10.4-6v-12l10.4-6zm0 2.3l-8.4 4.8v9.7l8.4 4.8 8.4-4.8v-9.7l-8.4-4.8zm-2.3 11.2c0 .8.5 1.3 1.2 1.3.4 0 .7-.1.9-.4l.9.5c-.4.6-1 1-1.9 1-1.3 0-2.2-.9-2.2-2.4 0-1.4.9-2.4 2.1-2.4 1.3 0 2.1 1 2.1 2.4v.3h-3.1zm2.1-.7c-.1-.6-.5-1-1.1-1-.5 0-.9.4-1 1h2.1zm3.3 2.5l-1.8-4.7h1.1l1.2 3.4 1.2-3.4h1.1l-1.8 4.7h-.8z"/>
      </svg>
    )
  },
  {
    name: "Tailwind",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#38BDF8]">
        <path d="M12 9c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.1 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-1.1-1.2-2.2-2.4-4.3-2.4zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.1 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-1.1-1.2-2.2-2.4-4.3-2.4z"/>
      </svg>
    )
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F05032]">
        <path d="M23.5 11.7l-9.8-9.8c-.4-.4-1-.4-1.4 0l-2.4 2.4 3 3c.4-.1.8 0 1.1.3.3.3.4.7.3 1.1l2.9 2.9c.4-.1.8 0 1.1.3.4.4.4 1 0 1.4s-1 .4-1.4 0c-.3-.3-.4-.7-.3-1.1l-2.7-2.7v7.1c.1.1.1.3.1.5 0 .6-.4 1-1 1s-1-.4-1-1c0-.2.1-.4.1-.5v-7.1c-.1-.1-.1-.3-.1-.5 0-.4.2-.8.5-1l-2.6-2.6-6.3 6.3c-.4.4-.4 1 0 1.4l9.8 9.8c.4.4 1 .4 1.4 0l9.8-9.8c.4-.4.4-1.1 0-1.5z"/>
      </svg>
    )
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#47A248]">
        <path d="M17.1 11.1c-.3-1.3-1-2.4-1.9-3.4 0 0-.2-.1-.2-.1-.4-.5-1.3-1.5-1.6-3-.1-.4-.2-1.1-.1-1.8.1-.4.3-.8.4-1 .1-.1 0-.3-.1-.3h-.1c-.4.1-1.3.5-2.1 1.7-.6.9-.9 2.2-1.1 3-.3 1.5-.9 2.4-1.3 3-.9.9-1.5 2.1-1.9 3.4-1.1 3.6.1 6.8.1 6.8 0 .2.2.4.4.4.1 0 .2 0 .3-.1.1-.1 2.2-1.3 2.2-1.3s1.2.6 3.1.6c1.9 0 3.1-.6 3.1-.6s2.1 1.2 2.2 1.3c.1.1.2.1.3.1.2 0 .4-.2.4-.4.1 0 1.3-3.2.2-6.8zm-5.1 7.2v-7.1s.1-.2.4-.2.4.2.4.2v7.1s-.1.2-.4.2-.4-.2-.4-.2z"/>
      </svg>
    )
  },
  {
    name: "MySQL",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4479A1]">
        <path d="M12.1 15.6c-.1 0-.1 0 0 0zm4.5-5.5c-.3-.1-.7-.2-1.1-.3-.4-.1-.8-.2-1.2-.3-.4-.1-.8-.2-1.3-.3-.4-.1-.8-.2-1.3-.2-.4-.1-.8-.1-1.3-.2-.4-.1-.8-.1-1.3-.1-.4-.1-.8-.1-1.3-.1-.4 0-.8 0-1.2 0-.4 0-.8.1-1.2.1-.4 0-.8.1-1.2.1-.4.1-.7.2-1.1.3-.3.1-.7.2-1 .4v11.8c.3.1.7.3 1 .4.3.1.7.2 1 .3.4.1.8.2 1.2.2.4.1.8.1 1.2.1.4 0 .8.1 1.2.1.4 0 .8 0 1.2 0 .4 0 .8-.1 1.2-.1.4-.1.8-.1 1.2-.2.4-.1.8-.2 1.1-.3.3-.1.7-.3 1-.4v-11.8zm-1.5 1.2v9.3c-.2.1-.5.2-.8.3-.3.1-.6.2-.9.2-.3.1-.6.1-.9.1-.3 0-.6.1-.9.1-.3 0-.6 0-.9 0-.3 0-.6 0-.9 0-.3 0-.6-.1-.9-.1-.3 0-.6-.1-.9-.2-.3-.1-.6-.2-.8-.3v-9.3c.2-.1.5-.2.8-.3.3-.1.6-.2.9-.2.3-.1.6-.1.9-.1.3 0 .6 0 .9 0 .3 0 .6 0 .9 0 .3 0 .6 0 .9.1.3.1.6.1.9.2.3.1.6.2.8.3z"/>
      </svg>
    )
  },
  {
    name: "XAMPP",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FB7A24]">
        <path d="M7 10l5 6-5 6h4l3-4 3 4h4l-5-6 5-6h-4l-3 4-3-4H7z"/>
      </svg>
    )
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 2C6.5 2 6.5 4.5 6.5 4.5v2.5h5.5v1H5.5c-2.5 0-4.5 2-4.5 5s2 5 4.5 5h1.5v-3c0-2.5 2-4.5 4.5-4.5h5.5c2 0 3.5-1.5 3.5-3.5V4.5C21.5 2 17.5 2 12 2zm-2.5 2.5a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB"/><path d="M12 22c5.5 0 5.5-2.5 5.5-2.5V17H12v-1h6.5c2.5 0 4.5-2 4.5-5s-2-5-4.5-5h-1.5v3c0 2.5-2 4.5-4.5 4.5H6.5c-2 0-3.5 1.5-3.5 3.5v4.5c0 2.5 4 2.5 9.5 2.5zm1.5-2.5a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B"/>
      </svg>
    )
  },
  {
    name: "Java",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#007396]">
        <path d="M6.2 19.3s-1 .5.7.8c1.9.2 2.8.2 4.9-.3 0 0 .6.3 1.3.6-4.4 1.9-10 .1-6.9-1.1zm-.6-2s-1.1.8.6 1c1.6.1 2.8.1 5.1-.2 0 0 .4.4 1 .6-4.4 1.2-9.4.1-6.7-1.4zm3.7-5.5c1.3 1.4-.6 2.7-.6 2.7s2.9-1.4 1.6-3.3c-1.3-1.8-2.2-2.5 3.2-5.4 0 0-8.6 2.1-4.2 6zM12.1 21s.7.5-.8 1c-2.8.9-11.7 1.1-14.2 0-.9-.4.8-.1 1.3-.1.5 0 .8 0 .8 0-1-.6-6 1.3-2.5 1.8 9.3 1.5 17-.6 15.4-1.7v-.2z"/>
      </svg>
    )
  },
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 26a4 4 0 004-4v-4h-4a4 4 0 000 8z" fill="#0ACF83"/><path d="M8 14a4 4 0 014-4h4v8h-4a4 4 0 01-4-4z" fill="#A259FF"/><path d="M8 6a4 4 0 014-4h4v8h-4A4 4 0 018 6z" fill="#F24E1E"/><path d="M16 2h4a4 4 0 010 8h-4V2z" fill="#FF7262"/><path d="M24 14a4 4 0 11-8 0 4 4 0 018 0z" fill="#1ABCFE"/>
      </svg>
    )
  },
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
                  <div className="shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </div>
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



