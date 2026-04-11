"use client";
import Image from "next/image";
import { useLang } from "../context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden">

      {/* ── Gradient background ── */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(to right, #2563eb 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Animated blobs */}
      <div className="animate-pulse-glow absolute top-1/4 -left-40 w-[500px] h-[500px] bg-blue-400/15 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="animate-pulse-glow delay-300 absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-cyan-400/15 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-300/5 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

        {/* ── Text content ── */}
        <div className="flex-1 text-center md:text-left">

          {/* Badge */}
          <div className="animate-fade-up delay-100">
            <span className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              {t.hero.badge}
            </span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-up delay-200 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-3">
            Sebastián
            <span className="block text-shimmer">
              Marcillo
            </span>
          </h1>

          {/* Role */}
          <p className="animate-fade-up delay-300 text-lg sm:text-xl text-gray-700 dark:text-slate-300 font-semibold mb-1">
            {t.hero.role}
          </p>
          <p className="animate-fade-up delay-300 text-gray-500 dark:text-slate-400 text-sm mb-5">
            {t.hero.semester}
          </p>

          {/* Description */}
          <p className="animate-fade-up delay-400 text-gray-600 dark:text-slate-400 text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">

            {/* Primary */}
            <a
              href="/cv.pdf"
              download
              className="group relative inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 active:scale-95"
            >
              {/* Shine sweep */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              {t.hero.downloadCV}
            </a>

            {/* Secondary */}
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm text-gray-800 dark:text-slate-200 font-semibold px-7 py-3.5 rounded-xl border border-gray-300 dark:border-slate-600 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 active:scale-95 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              {t.hero.viewProjects}
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-up delay-700 hidden md:flex items-center gap-3 mt-12">
            <div className="flex flex-col items-center gap-1">
              <span className="w-px h-6 bg-gradient-to-b from-transparent to-gray-400 dark:to-slate-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
            </div>
            <span className="text-gray-400 dark:text-slate-600 text-xs tracking-widest uppercase">scroll</span>
          </div>
        </div>

        {/* ── Profile image ── */}
        <div className="animate-scale-in delay-200 animate-float flex-shrink-0 flex justify-center">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 blur-3xl opacity-25 dark:opacity-30 scale-125 animate-pulse-glow" />

            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-blue-200/50 dark:border-blue-500/20 animate-pulse" />

            {/* Gradient border */}
            <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-600 shadow-2xl shadow-blue-500/25">
              <div className="rounded-full overflow-hidden w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-br from-blue-600 to-cyan-500 relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Foto de perfil de Sebastián Marcillo"
                  fill
                  className="object-cover object-center z-10 relative"
                  priority
                />
              </div>
            </div>

            {/* Open to work badge */}
            <div className="animate-fade-in delay-700 absolute -bottom-3 -right-3 flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {t.hero.openToWork}
            </div>

            {/* Floating tech pill */}
            <div className="animate-fade-in delay-600 absolute -top-2 -left-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg text-gray-700 dark:text-slate-300">
              Next.js ⚡
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
