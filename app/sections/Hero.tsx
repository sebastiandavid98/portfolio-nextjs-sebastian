"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LangContext";
import { DownloadIcon, CodeIcon } from "../components/icons";
import { SITE } from "../lib/config";

// ── Floating particles ───────────────────────────────────────
type Particle = { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string };

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#4A7C59", "#5D9E72", "#C4A84A", "#8B6914", "#3D7A52", "#D4924A"];
    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });
      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(74,124,89,${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

// ── Glitch text ──────────────────────────────────────────────
function GlitchName() {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 300);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="animate-fade-up delay-200 text-6xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter mb-4 select-none">
      <span className="block text-[#1C1208] dark:text-[#F5EDD8]">Sebastián</span>
      <span
        className={`block relative ${glitching ? "glitch-active" : ""}`}
        data-text="Marcillo"
        style={{ fontStyle: "italic" }}
      >
        <span className="text-shimmer-gold">Marcillo</span>
      </span>
    </h1>
  );
}

// ── Rotating ring ────────────────────────────────────────────
function RotatingRing() {
  return (
    <div className="absolute -inset-6 rounded-full pointer-events-none">
      <svg className="w-full h-full animate-spin-slow" viewBox="0 0 300 300" fill="none">
        <circle cx="150" cy="150" r="140" stroke="url(#ringGrad)" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.5" />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A7C59" />
            <stop offset="50%" stopColor="#C4A84A" />
            <stop offset="100%" stopColor="#4A7C59" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-8 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

      {/* Grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(#4A7C59 1px,transparent 1px),linear-gradient(to right,#4A7C59 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 -z-10">
        <ParticleCanvas />
      </div>

      {/* Blobs */}
      <div className="animate-pulse-glow absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#4A7C59]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="animate-pulse-glow delay-300 absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[#C4A84A]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-14">

        {/* ── Text ── */}
        <div className="flex-1 text-center md:text-left">

          {/* Glitch name */}
          <GlitchName />

          <p className="animate-fade-up delay-300 text-lg sm:text-xl text-[#3D2B1A] dark:text-[#D4C4A0] font-semibold mb-1">
            {t.hero.role}
          </p>
          <p className="animate-fade-up delay-300 text-[#7A6248] dark:text-[#8A7A60] text-sm mb-5">
            {t.hero.semester}
          </p>
          <p className="animate-fade-up delay-400 text-[#7A6248] dark:text-[#8A7A60] text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            {t.hero.description}
          </p>

          {/* Buttons */}
          <div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href={SITE.cv} download
              className="group relative inline-flex items-center justify-center gap-2 bg-[#4A7C59] dark:bg-[#5D9E72] text-white font-semibold px-7 py-3.5 rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-[#4A7C59]/30 hover:shadow-[#4A7C59]/50 hover:-translate-y-1 active:scale-95">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <DownloadIcon className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              {t.hero.downloadCV}
            </a>
            <a href="#projects"
              className="group inline-flex items-center justify-center gap-2 bg-white/60 dark:bg-[#1A1208]/60 backdrop-blur-sm text-[#1C1208] dark:text-[#F5EDD8] font-semibold px-7 py-3.5 rounded-xl border border-[#C8BCA8] dark:border-[#3A2A14] hover:border-[#4A7C59] dark:hover:border-[#5D9E72] hover:text-[#4A7C59] dark:hover:text-[#5D9E72] transition-all duration-300 hover:-translate-y-1 active:scale-95">
              <CodeIcon className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" />
              {t.hero.viewProjects}
            </a>
          </div>

          {/* Tech stack pills */}
          <div className="animate-fade-up delay-600 flex flex-wrap gap-2 justify-center md:justify-start mt-6">
            {["Next.js", "TypeScript", "Node.js", "Figma"].map((tech) => (
              <span key={tech}
                className="text-xs font-medium px-3 py-1 rounded-full border border-[#C8BCA8] dark:border-[#3A2A14] text-[#7A6248] dark:text-[#8A7A60] bg-white/50 dark:bg-[#1A1208]/50 backdrop-blur-sm hover:border-[#4A7C59] dark:hover:border-[#5D9E72] hover:text-[#4A7C59] dark:hover:text-[#5D9E72] transition-all duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Profile image ── */}
        <div className="animate-scale-in delay-200 animate-float flex-shrink-0 flex justify-center">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72">

            {/* Rotating dashed ring */}
            <RotatingRing />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4A7C59] to-[#C4A84A] blur-3xl opacity-20 dark:opacity-25 scale-110" />

            {/* Border */}
            <div className="relative w-full h-full p-[3px] rounded-full bg-gradient-to-tr from-[#4A7C59] via-[#C4A84A] to-[#5D9E72] shadow-2xl shadow-[#4A7C59]/25">
              <div className="rounded-full overflow-hidden w-full h-full bg-[#4A7C59] relative">
                <Image
                  src="/images/profile.jpg"
                  alt="Sebastián Marcillo"
                  fill
                  className="object-cover object-center z-10 relative"
                  priority
                />
              </div>
            </div>

            {/* Corner badges */}
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-[#1A1208] border border-[#DDD5C5] dark:border-[#2A1E0E] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg text-[#4A7C59] dark:text-[#5D9E72]">
              ✦ Full Stack
            </div>
            <div className="absolute -top-2 -left-2 bg-white dark:bg-[#1A1208] border border-[#DDD5C5] dark:border-[#2A1E0E] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg text-[#8B6914] dark:text-[#C4A84A]">
              5° Sem
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
