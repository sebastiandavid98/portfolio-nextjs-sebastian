"use client";
import Image from "next/image";
import { useLang } from "../context/LangContext";
import { DownloadIcon, CodeIcon } from "../components/icons";
import { SITE } from "../lib/config";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-6 overflow-hidden">

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
      <div className="animate-pulse-glow absolute top-1/4 -left-40 w-[500px] h-[500px] bg-green-400/10 dark:bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="animate-pulse-glow delay-300 absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-amber-400/10 dark:bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-300/5 dark:bg-green-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

        {/* ── Text content ── */}
        <div className="flex-1 text-center md:text-left">

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
            <a
              href={SITE.cv}
              download
              className="group relative inline-flex items-center justify-center gap-2 bg-[#4A7C59] dark:bg-[#5D9E72] text-white font-semibold px-7 py-3.5 rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-green-700/30 hover:shadow-green-600/50 hover:-translate-y-1 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <DownloadIcon className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              {t.hero.downloadCV}
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 bg-white/70 dark:bg-[#1A1208]/70 backdrop-blur-sm text-[#1C1208] dark:text-[#F5EDD8] font-semibold px-7 py-3.5 rounded-xl border border-[#C8BCA8] dark:border-[#3A2A14] hover:border-[#4A7C59] dark:hover:border-[#5D9E72] hover:text-[#4A7C59] dark:hover:text-[#5D9E72] transition-all duration-300 hover:-translate-y-1 active:scale-95 hover:shadow-lg hover:shadow-green-700/10"
            >
              <CodeIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
              {t.hero.viewProjects}
            </a>
          </div>

        </div>

        {/* ── Profile image ── */}
        <div className="animate-scale-in delay-200 animate-float flex-shrink-0 flex justify-center">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4A7C59] to-[#C4A84A] blur-3xl opacity-25 dark:opacity-30 scale-125 animate-pulse-glow" />

            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-[#4A7C59]/30 dark:border-[#5D9E72]/20 animate-pulse" />

            {/* Gradient border */}
            <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-[#4A7C59] via-[#C4A84A] to-[#5D9E72] shadow-2xl shadow-green-700/25">
              <div className="rounded-full overflow-hidden w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-br from-[#4A7C59] to-[#C4A84A] relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Foto de perfil de Sebastián Marcillo"
                  fill
                  className="object-cover object-center z-10 relative"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
