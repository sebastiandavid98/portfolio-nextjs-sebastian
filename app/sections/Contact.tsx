"use client";
import { useState } from "react";
import { useLang } from "../context/LangContext";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon, SendIcon, SpinnerIcon, CheckIcon, AlertIcon } from "../components/icons";
import { SITE } from "../lib/config";
import SectionHeader from "../components/ui/SectionHeader";

const socials = [
  { label: "GitHub",    href: SITE.github,   icon: <GitHubIcon className="w-4 h-4" /> },
  { label: "LinkedIn",  href: SITE.linkedin, icon: <LinkedInIcon className="w-4 h-4" /> },
  { label: "WhatsApp",  href: SITE.whatsapp, icon: <WhatsAppIcon className="w-4 h-4" /> },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const [serverErrors, setServerErrors] = useState<string[]>([]);
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (serverErrors.length) setServerErrors([]);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setServerErrors([]);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();

      if (data.ok) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        setServerErrors(data.errors ?? ["Error al enviar el mensaje."]);
        setStatus("error");
      }
    } catch {
      setServerErrors(["No se pudo conectar con el servidor."]);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative bg-white dark:bg-slate-950 py-20 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="animate-slide-right flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-blue-600" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase">{t.contact.label}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div className="animate-fade-up">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
              {t.contact.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t.contact.titleAccent}</span>
            </h2>
            <p className="text-gray-600 dark:text-slate-400 text-base leading-relaxed mb-7">{t.contact.description}</p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s, i) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ animationDelay: `${0.1 * i}s` }}
                  className="animate-fade-up flex items-center gap-2 text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-gray-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-500/10 border border-gray-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-500/40 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md hover:shadow-blue-500/10">
                  {s.icon}{s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="animate-fade-up delay-200 bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-slate-700/50 rounded-2xl p-7 shadow-sm">

            {/* Success state */}
            {status === "success" ? (
              <div className="animate-scale-in flex flex-col items-center justify-center py-10 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/30 flex items-center justify-center">
                  <CheckIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-gray-900 dark:text-white font-bold text-xl">{t.contact.successTitle}</p>
                <p className="text-gray-500 dark:text-slate-400 text-sm">{t.contact.successDesc}</p>
                <button onClick={() => setStatus("idle")}
                  className="mt-1 text-blue-600 dark:text-blue-400 hover:text-blue-500 text-sm font-medium transition-colors underline underline-offset-2">
                  {t.contact.another}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                {/* Server errors */}
                {status === "error" && serverErrors.length > 0 && (
                  <div className="animate-fade-up bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-xl px-4 py-3">
                    {serverErrors.map((err, i) => (
                      <p key={i} className="text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                        <AlertIcon className="w-4 h-4 shrink-0" />
                        {err}
                      </p>
                    ))}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-slate-300 text-sm font-medium mb-1.5">{t.contact.name}</label>
                  <input
                    id="name" name="name" type="text" required
                    value={fields.name} onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full bg-white dark:bg-slate-900/60 border border-gray-300 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-slate-300 text-sm font-medium mb-1.5">{t.contact.email}</label>
                  <input
                    id="email" name="email" type="email" required
                    value={fields.email} onChange={handleChange}
                    placeholder="tu@email.com"
                    suppressHydrationWarning
                    className="w-full bg-white dark:bg-slate-900/60 border border-gray-300 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-slate-300 text-sm font-medium mb-1.5">
                    {t.contact.message}
                    <span className="ml-2 text-gray-400 dark:text-slate-500 font-normal text-xs">({fields.message.length}/2000)</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={4}
                    value={fields.message} onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    maxLength={2000}
                    className="w-full bg-white dark:bg-slate-900/60 border border-gray-300 dark:border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  {status === "sending" ? (
                    <><SpinnerIcon />  {t.contact.sending}</>
                  ) : (
                    <><SendIcon /> {t.contact.send}</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
