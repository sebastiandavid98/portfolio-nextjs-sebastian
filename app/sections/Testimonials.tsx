"use client";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Profesor de Algoritmos",
    avatar: "CM",
    gradient: "from-green-600 to-green-400",
    comment:
      "Sebastián demuestra una capacidad de análisis excepcional. Su enfoque para resolver problemas complejos y su dedicación al aprendizaje lo distinguen del resto del grupo.",
    stars: 5,
  },
  {
    name: "Laura Jiménez",
    role: "Compañera de equipo",
    avatar: "LJ",
    gradient: "from-violet-500 to-purple-400",
    comment:
      "Trabajar con Sebastián fue una experiencia increíble. Siempre propone soluciones creativas, escribe código limpio y se asegura de que el equipo esté alineado en cada sprint.",
    stars: 5,
  },
  {
    name: "Andrés Torres",
    role: "Mentor — Bootcamp Web",
    avatar: "AT",
    gradient: "from-emerald-500 to-teal-400",
    comment:
      "En poco tiempo Sebastián pasó de conocer los fundamentos a construir aplicaciones full-stack completas. Su ritmo de aprendizaje y su actitud proactiva son admirables.",
    stars: 5,
  },
  {
    name: "Valentina Ríos",
    role: "Compañera de proyecto",
    avatar: "VR",
    gradient: "from-rose-500 to-pink-400",
    comment:
      "Sebastián tiene un ojo muy bueno para el diseño y la experiencia de usuario. Cada interfaz que construye se ve profesional y funciona perfectamente en cualquier dispositivo.",
    stars: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 350);
  }, [animating]);

  const next = useCallback(() => {
    goTo((active + 1) % testimonials.length, "right");
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + testimonials.length) % testimonials.length, "left");
  }, [active, goTo]);

  // Auto-advance every 5s
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="relative bg-white dark:bg-slate-950 py-10 px-6 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/50 dark:bg-green-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">

        {/* Header */}
        <div className="animate-slide-right flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-green-700" />
          <span className="text-green-700 dark:text-green-400 text-sm font-semibold tracking-widest uppercase">Testimonios</span>
        </div>
        <h2 className="animate-fade-up text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-5">
          Lo que dicen{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">de mí</span>
        </h2>

        {/* Carousel */}
        <div className="relative">

          {/* Main card */}
          <div
            className="relative bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-3xl p-8 sm:p-12 overflow-hidden transition-all duration-300"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction === "right" ? "-40px" : "40px"})`
                : "translateX(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {/* Big quote mark */}
            <div className={`absolute top-6 right-8 text-8xl font-serif leading-none bg-gradient-to-br ${t.gradient} bg-clip-text text-transparent opacity-20 select-none`}>
              "
            </div>

            {/* Top accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient} rounded-t-3xl`} />

            {/* Stars */}
            <div className="mb-4">
              <Stars count={t.stars} />
            </div>

            {/* Quote */}
            <blockquote className="text-gray-700 dark:text-slate-300 text-lg sm:text-xl leading-relaxed font-medium mb-5 relative z-10">
              "{t.comment}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {t.avatar}
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-bold text-base">{t.name}</p>
                <p className="text-gray-500 dark:text-slate-400 text-sm">{t.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full flex items-center justify-center text-gray-600 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-400 hover:border-green-500 shadow-md transition-all duration-200 hover:scale-110"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full flex items-center justify-center text-gray-600 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-400 hover:border-green-500 shadow-md transition-all duration-200 hover:scale-110"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots + mini previews */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > active ? "right" : "left")}
              className={`flex items-center gap-2 transition-all duration-300 ${
                i === active
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              <div className={`rounded-full bg-gradient-to-br ${item.gradient} transition-all duration-300 ${
                i === active ? "w-8 h-3" : "w-3 h-3"
              }`} />
            </button>
          ))}
        </div>

        {/* Mini avatar strip */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > active ? "right" : "left")}
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-xs font-bold transition-all duration-300 ${
                i === active
                  ? "scale-110 shadow-lg ring-2 ring-offset-2 ring-offset-white dark:ring-offset-slate-950 ring-blue-400"
                  : "opacity-50 hover:opacity-80 hover:scale-105"
              }`}
            >
              {item.avatar}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}



