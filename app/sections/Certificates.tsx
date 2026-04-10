"use client";
import { useState } from "react";
import Image from "next/image";
import { useLang } from "../context/LangContext";

const certs = {
  es: [
    {
      title: "Segundo Seminario Nacional de Ingeniería de Software",
      issuer: "Universidad Cooperativa de Colombia",
      date: "Mayo 28, 2025",
      duration: "8 horas",
      location: "Pasto, Colombia",
      emoji: "🎓",
      image: "/imagenes/certificado2.jpg",
    },
    {
      title: "Tercer Seminario Nacional de Ingeniería de Software",
      issuer: "Universidad Cooperativa de Colombia",
      date: "Octubre 17, 2025",
      duration: "8 horas",
      location: "Pasto, Colombia",
      emoji: "🏆",
      image: "/imagenes/certificado1.jpg",
    },
  ],
  en: [
    {
      title: "2nd National Software Engineering Seminar",
      issuer: "Universidad Cooperativa de Colombia",
      date: "May 28, 2025",
      duration: "8 hours",
      location: "Pasto, Colombia",
      emoji: "🎓",
      image: "/imagenes/certificado2.jpg",
    },
    {
      title: "3rd National Software Engineering Seminar",
      issuer: "Universidad Cooperativa de Colombia",
      date: "October 17, 2025",
      duration: "8 hours",
      location: "Pasto, Colombia",
      emoji: "🏆",
      image: "/imagenes/certificado1.jpg",
    },
  ],
};

export default function Certificates() {
  const { t, lang } = useLang();
  const list = certs[lang];
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="certificates" className="bg-gray-50 dark:bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-blue-600" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase">
            {t.certificates.label}
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-14">
          {t.certificates.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            {t.certificates.titleAccent}
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          {list.map((cert) => (
            <div
              key={cert.title}
              className="group bg-white dark:bg-slate-800/40 border border-gray-200 dark:border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-400 dark:hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelected(cert.image)}
            >
              {/* Certificate preview image */}
              <div className="relative h-44 bg-gray-100 dark:bg-slate-700/30 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay hint */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-slate-900/90 text-blue-600 dark:text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    Ver certificado
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="text-2xl mb-2">{cert.emoji}</div>
                <h3 className="text-gray-900 dark:text-white font-bold text-sm leading-snug mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-xs font-medium mb-3">
                  {t.certificates.issued}: {cert.issuer}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-gray-100 dark:bg-slate-700/60 text-gray-600 dark:text-slate-400 text-xs px-2 py-0.5 rounded-md border border-gray-200 dark:border-slate-600/40">
                    📅 {cert.date}
                  </span>
                  <span className="bg-gray-100 dark:bg-slate-700/60 text-gray-600 dark:text-slate-400 text-xs px-2 py-0.5 rounded-md border border-gray-200 dark:border-slate-600/40">
                    ⏱ {cert.duration}
                  </span>
                  <span className="bg-gray-100 dark:bg-slate-700/60 text-gray-600 dark:text-slate-400 text-xs px-2 py-0.5 rounded-md border border-gray-200 dark:border-slate-600/40">
                    📍 {cert.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 p-1.5 rounded-full border border-gray-200 dark:border-slate-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full" style={{ aspectRatio: "0.77" }}>
              <Image
                src={selected}
                alt="Certificado"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
