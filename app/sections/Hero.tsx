"use client";
import Image from "next/image";
import { useLang } from "../context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-900 flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            {t.hero.badge}
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-4">
            Sebastián
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Marcillo
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 dark:text-slate-300 font-medium mb-2">
            {t.hero.role}
          </p>
          <p className="text-gray-500 dark:text-slate-400 text-sm mb-6">{t.hero.semester}</p>
          <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              {t.hero.downloadCV}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-gray-100 dark:hover:bg-slate-700/50 text-gray-800 dark:text-slate-200 font-semibold px-7 py-3.5 rounded-xl border border-gray-300 dark:border-slate-600 hover:border-blue-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {t.hero.viewProjects}
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 blur-2xl opacity-20 dark:opacity-30 scale-110" />
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-2xl">
              <div className="rounded-full overflow-hidden w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gray-200 dark:bg-slate-800 relative">
                <Image
                  src="/imagenes/profile.jpg"
                  alt="Foto de perfil de Sebastián Marcillo"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover relative z-10"
                  priority
                />
                {/* Fallback avatar */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500">
                  <span className="text-white font-extrabold text-6xl select-none">S</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
              💻 {t.hero.openToWork}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
