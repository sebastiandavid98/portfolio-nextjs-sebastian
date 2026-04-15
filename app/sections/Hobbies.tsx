"use client";

const hobbies = [
  {
    label: "Voleibol",
    emoji: "🏐",
    color: "from-yellow-400 to-orange-400",
    bg: "hover:bg-yellow-50 dark:hover:bg-yellow-500/10",
    border: "hover:border-yellow-400/60 dark:hover:border-yellow-500/40",
    shadow: "hover:shadow-yellow-400/20",
    desc: "Deporte en equipo",
  },
  {
    label: "Ping Pong",
    emoji: "🏓",
    color: "from-blue-400 to-cyan-400",
    bg: "hover:bg-blue-50 dark:hover:bg-blue-500/10",
    border: "hover:border-blue-400/60 dark:hover:border-blue-500/40",
    shadow: "hover:shadow-blue-400/20",
    desc: "Reflejos y precisión",
  },
  {
    label: "Música",
    emoji: "🎵",
    color: "from-purple-400 to-pink-400",
    bg: "hover:bg-purple-50 dark:hover:bg-purple-500/10",
    border: "hover:border-purple-400/60 dark:hover:border-purple-500/40",
    shadow: "hover:shadow-purple-400/20",
    desc: "Escuchar y sentir",
  },
  {
    label: "Tocar instrumentos",
    emoji: "🎸",
    color: "from-rose-400 to-red-400",
    bg: "hover:bg-rose-50 dark:hover:bg-rose-500/10",
    border: "hover:border-rose-400/60 dark:hover:border-rose-500/40",
    shadow: "hover:shadow-rose-400/20",
    desc: "Expresión musical",
  },
  {
    label: "Fútbol",
    emoji: "⚽",
    color: "from-green-400 to-emerald-400",
    bg: "hover:bg-green-50 dark:hover:bg-green-500/10",
    border: "hover:border-green-400/60 dark:hover:border-green-500/40",
    shadow: "hover:shadow-green-400/20",
    desc: "Pasión y trabajo en equipo",
  },
  {
    label: "Dibujar",
    emoji: "✏️",
    color: "from-amber-400 to-yellow-400",
    bg: "hover:bg-amber-50 dark:hover:bg-amber-500/10",
    border: "hover:border-amber-400/60 dark:hover:border-amber-500/40",
    shadow: "hover:shadow-amber-400/20",
    desc: "Creatividad visual",
  },
  {
    label: "Crear páginas web",
    emoji: "💻",
    color: "from-blue-500 to-indigo-500",
    bg: "hover:bg-indigo-50 dark:hover:bg-indigo-500/10",
    border: "hover:border-indigo-400/60 dark:hover:border-indigo-500/40",
    shadow: "hover:shadow-indigo-400/20",
    desc: "Diseño y desarrollo",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="relative bg-white dark:bg-slate-950 py-20 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-50 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="animate-slide-right flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-blue-600" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase">
            Pasatiempos
          </span>
        </div>
        <h2 className="animate-fade-up text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-3">
          Fuera del{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            código
          </span>
        </h2>
        <p className="animate-fade-up delay-100 text-gray-500 dark:text-slate-400 text-base mb-12 max-w-xl">
          Lo que me apasiona cuando no estoy programando.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {hobbies.map((h, i) => (
            <div
              key={h.label}
              style={{ animationDelay: `${0.07 * i}s` }}
              className={`animate-fade-up group flex flex-col items-center gap-3 bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 ${h.border} ${h.bg} rounded-2xl p-6 cursor-default transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-xl ${h.shadow}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${h.color} flex items-center justify-center text-3xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                {h.emoji}
              </div>

              {/* Label */}
              <span className="text-gray-800 dark:text-slate-200 text-sm font-bold text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {h.label}
              </span>

              {/* Description */}
              <span className="text-gray-400 dark:text-slate-500 text-xs text-center leading-tight">
                {h.desc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
