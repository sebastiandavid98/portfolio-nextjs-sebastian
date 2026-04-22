"use client";
import { useState } from "react";
import Image from "next/image";
import { useLang } from "../context/LangContext";
import SectionHeader from "../components/ui/SectionHeader";
import { CloseIcon, EyeIcon } from "../components/icons";

const certs = {
  es: [
    {
      title: "Segundo Seminario Nacional de Ingeniería de Software",
      issuer: "Universidad Cooperativa de Colombia",
      date: "Mayo 28, 2025",
      duration: "8 horas",
      location: "Pasto, Colombia",
      image: "/images/certificado2.jpg",
      color: "from-green-700 to-green-500",
      border: "hover:border-green-500",
      shadow: "hover:shadow-green-600/20",
    },
    {
      title: "Tercer Seminario Nacional de Ingeniería de Software",
      issuer: "Universidad Cooperativa de Colombia",
      date: "Octubre 17, 2025",
      duration: "8 horas",
      location: "Pasto, Colombia",
      image: "/images/certificado1.jpg",
      color: "from-violet-600 to-indigo-500",
      border: "hover:border-violet-400",
      shadow: "hover:shadow-violet-500/20",
    },
  ],
  en: [
    {
      title: "2nd National Software Engineering Seminar",
      issuer: "Universidad Cooperativa de Colombia",
      date: "May 28, 2025",
      duration: "8 hours",
      location: "Pasto, Colombia",
      image: "/images/certificado2.jpg",
      color: "from-green-700 to-green-500",
      border: "hover:border-green-500",
      shadow: "hover:shadow-green-600/20",
    },
    {
      title: "3rd National Software Engineering Seminar",
      issuer: "Universidad Cooperativa de Colombia",
      date: "October 17, 2025",
      duration: "8 hours",
      location: "Pasto, Colombia",
      image: "/images/certificado1.jpg",
      color: "from-violet-600 to-indigo-500",
      border: "hover:border-violet-400",
      shadow: "hover:shadow-violet-500/20",
    },
  ],
  fr: [
    {
      title: "2ème Séminaire National de Génie Logiciel",
      issuer: "Universidad Cooperativa de Colombia",
      date: "28 mai 2025",
      duration: "8 heures",
      location: "Pasto, Colombie",
      image: "/images/certificado2.jpg",
      color: "from-green-700 to-green-500",
      border: "hover:border-green-500",
      shadow: "hover:shadow-green-600/20",
    },
    {
      title: "3ème Séminaire National de Génie Logiciel",
      issuer: "Universidad Cooperativa de Colombia",
      date: "17 octobre 2025",
      duration: "8 heures",
      location: "Pasto, Colombie",
      image: "/images/certificado1.jpg",
      color: "from-violet-600 to-indigo-500",
      border: "hover:border-violet-400",
      shadow: "hover:shadow-violet-500/20",
    },
  ],
  ja: [
    {
      title: "第2回全国ソフトウェアエンジニアリングセミナー",
      issuer: "Universidad Cooperativa de Colombia",
      date: "2025年5月28日",
      duration: "8時間",
      location: "パスト、コロンビア",
      image: "/images/certificado2.jpg",
      color: "from-green-700 to-green-500",
      border: "hover:border-green-500",
      shadow: "hover:shadow-green-600/20",
    },
    {
      title: "第3回全国ソフトウェアエンジニアリングセミナー",
      issuer: "Universidad Cooperativa de Colombia",
      date: "2025年10月17日",
      duration: "8時間",
      location: "パスト、コロンビア",
      image: "/images/certificado1.jpg",
      color: "from-violet-600 to-indigo-500",
      border: "hover:border-violet-400",
      shadow: "hover:shadow-violet-500/20",
    },
  ],
};

export default function Certificates() {
  const { t, lang } = useLang();
  const list = certs[lang] ?? certs.es;
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="certificates" className="relative bg-gray-50 dark:bg-slate-900 py-10 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-50 dark:bg-green-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <SectionHeader
          label={t.certificates.label}
          title={t.certificates.title}
          titleAccent={t.certificates.titleAccent}
          className="mb-5"
        />

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {list.map((cert, i) => (
            <div
              key={cert.title}
              style={{ animationDelay: `${0.15 * i}s` }}
              onClick={() => setSelected(cert.image)}
              className={`animate-fade-up group cursor-pointer bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 ${cert.border} dark:${cert.border} rounded-2xl overflow-hidden transition-all duration-400 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl ${cert.shadow} dark:${cert.shadow}`}
            >
              {/* Certificate image preview */}
              <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-slate-900">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* View badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-2 bg-white/95 dark:bg-slate-900/95 text-gray-800 dark:text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    <EyeIcon className="w-4 h-4" />
                    Ver certificado
                  </span>
                </div>

                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-gray-900 dark:text-white font-bold text-sm leading-snug mb-2 group-hover:text-green-700 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className={`text-sm font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${cert.color}`}>
                  {cert.issuer}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 bg-gray-100 dark:bg-slate-700/60 text-gray-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md border border-gray-200 dark:border-slate-600/40">
                    📅 {cert.date}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 dark:bg-slate-700/60 text-gray-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md border border-gray-200 dark:border-slate-600/40">
                    ⏱ {cert.duration}
                  </span>
                  <span className="flex items-center gap-1 bg-gray-100 dark:bg-slate-700/60 text-gray-600 dark:text-slate-400 text-xs px-2.5 py-1 rounded-md border border-gray-200 dark:border-slate-600/40">
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
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="animate-scale-in relative max-w-2xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-slate-700">
              <span className="text-sm font-semibold text-gray-700 dark:text-slate-300">Certificado</span>
              <button
                onClick={() => setSelected(null)}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-500 dark:text-slate-400 transition-colors"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
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



