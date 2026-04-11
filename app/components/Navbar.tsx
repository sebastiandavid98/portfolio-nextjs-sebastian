"use client";
import { useTheme } from "../context/ThemeContext";
import { useLang, type Lang } from "../context/LangContext";
import { useState } from "react";

const langs: { code: Lang; label: string; flag: string }[] = [
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { t, lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.certificates, href: "#certificates" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const current = langs.find((l) => l.code === lang)!;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold text-lg text-gray-900 dark:text-white tracking-tight">
          S.<span className="text-blue-600">dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Lang selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-400 hover:border-blue-500 hover:text-blue-600 transition-all"
            >
              <span>{current.flag}</span>
              <span>{current.code.toUpperCase()}</span>
              <svg className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-10 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl shadow-lg overflow-hidden w-36 z-50">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-sm transition-colors ${
                      lang === l.code
                        ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme toggle — pill style */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="relative flex items-center w-14 h-7 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 transition-all duration-300 hover:border-blue-400 px-1"
          >
            {/* Track icons */}
            <span className="absolute left-1.5 text-xs">☀️</span>
            <span className="absolute right-1.5 text-xs">🌙</span>
            {/* Thumb */}
            <span className={`relative z-10 w-5 h-5 rounded-full bg-white dark:bg-slate-600 shadow-md transition-all duration-300 ${theme === "dark" ? "translate-x-7" : "translate-x-0"}`} />
          </button>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-slate-700 text-gray-600 dark:text-slate-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors py-1">
              {l.label}
            </a>
          ))}
          {/* Lang options in mobile */}
          <div className="flex gap-2 pt-2 border-t border-gray-100 dark:border-slate-800">
            {langs.map((l) => (
              <button key={l.code} onClick={() => { setLang(l.code); setMenuOpen(false); }}
                className={`flex items-center gap-1 text-xs px-2 py-1 rounded-lg border transition-all ${
                  lang === l.code ? "border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-500/10" : "border-gray-200 dark:border-slate-700 text-gray-500 dark:text-slate-400"
                }`}>
                {l.flag} {l.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

