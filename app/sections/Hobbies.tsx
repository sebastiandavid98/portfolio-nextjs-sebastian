"use client";
import { useState, useEffect } from "react";

const hobbies = [
  { label: "Voleibol",          emoji: "🏐", color: "from-amber-500 to-orange-500",   shadow: "hover:shadow-amber-500/25",  desc: "Deporte en equipo" },
  { label: "Ping Pong",         emoji: "🏓", color: "from-emerald-500 to-green-600",  shadow: "hover:shadow-emerald-500/25", desc: "Reflejos y precisión" },
  { label: "Música",            emoji: "🎵", color: "from-violet-500 to-purple-600",  shadow: "hover:shadow-violet-500/25",  desc: "Escuchar y sentir" },
  { label: "Tocar instrumentos",emoji: "🎸", color: "from-rose-500 to-red-600",       shadow: "hover:shadow-rose-500/25",    desc: "Expresión musical" },
  { label: "Fútbol",            emoji: "⚽", color: "from-green-500 to-emerald-700",  shadow: "hover:shadow-green-600/25",   desc: "Pasión y equipo" },
  { label: "Dibujar",           emoji: "✏️", color: "from-yellow-500 to-amber-600",   shadow: "hover:shadow-yellow-500/25",  desc: "Creatividad visual" },
  { label: "Crear páginas web", emoji: "💻", color: "from-[#4A7C59] to-[#2D5A3D]",   shadow: "hover:shadow-green-700/25",   desc: "Diseño y desarrollo" },
];

const words = ["código", "pantalla", "teclado", "trabajo", "IDE"];

function TypewriterWord() {
  const [index, setIndex]   = useState(0);
  const [text, setText]     = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const speed   = deleting ? 60 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A7C59] to-[#C4A84A] dark:from-[#5D9E72] dark:to-[#C4A84A]">
        {text}
      </span>
      <span className="cursor-blink text-[#4A7C59] dark:text-[#5D9E72]" />
    </span>
  );
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="relative py-16 px-6 overflow-hidden"
      style={{ background: "var(--gradient-section)" }}>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#4A7C59]/5 dark:bg-[#5D9E72]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-56 h-56 bg-[#C4A84A]/5 dark:bg-[#C4A84A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="animate-slide-right flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-[#4A7C59] dark:bg-[#5D9E72]" />
          <span className="text-[#4A7C59] dark:text-[#5D9E72] text-sm font-semibold tracking-widest uppercase">
            Pasatiempos
          </span>
        </div>

        {/* Interactive title */}
        <h2 className="animate-fade-up text-4xl sm:text-5xl font-extrabold text-[#1C1208] dark:text-[#F5EDD8] leading-tight mb-2">
          Fuera del{" "}
          <TypewriterWord />
        </h2>
        <p className="animate-fade-up delay-100 text-[#7A6248] dark:text-[#8A7A60] text-base mb-10 max-w-xl">
          Lo que me apasiona cuando no estoy programando.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {hobbies.map((h, i) => (
            <div
              key={h.label}
              style={{ animationDelay: `${0.07 * i}s` }}
              className={`animate-fade-up group flex flex-col items-center gap-3 bg-white dark:bg-[#1A1208] border border-[#DDD5C5] dark:border-[#2A1E0E] hover:border-[#4A7C59]/60 dark:hover:border-[#5D9E72]/40 rounded-2xl p-6 cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl ${h.shadow}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${h.color} flex items-center justify-center text-3xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                {h.emoji}
              </div>

              {/* Label */}
              <span className="text-[#1C1208] dark:text-[#F5EDD8] text-sm font-bold text-center leading-tight group-hover:text-[#4A7C59] dark:group-hover:text-[#5D9E72] transition-colors duration-200">
                {h.label}
              </span>

              {/* Description */}
              <span className="text-[#7A6248] dark:text-[#8A7A60] text-xs text-center leading-tight">
                {h.desc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

