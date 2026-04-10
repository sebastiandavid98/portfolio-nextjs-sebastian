"use client";
import { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LangContext";

type Message = { from: "bot" | "user"; text: string };

const responses = {
  es: {
    quien: "Soy Sebastián David Marcillo, estudiante de Ingeniería de Software en 5° semestre en la Universidad Cooperativa de Colombia. Me apasiona el desarrollo web full-stack.",
    proyectos: "Mis proyectos incluyen: Sistema de Diseño Software, Backend y Frontend de Energía Solar, un clon de Mercado Libre y un proyecto de Calidad de Software. Puedes verlos en la sección Proyectos o en mi GitHub: github.com/sebastiandavid98",
    contacto: "Puedes contactarme por WhatsApp al +57 324 615 9170, por LinkedIn en linkedin.com/in/sebastian-david-4a1459390 o usando el formulario de contacto en esta página.",
    habilidades: "Manejo JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS y Git. Me enfoco en desarrollo web full-stack.",
    default: "No entendí bien tu pregunta. Puedes preguntarme sobre: quién soy, mis proyectos, mis habilidades o cómo contactarme.",
  },
  en: {
    quien: "I'm Sebastián David Marcillo, a 5th semester Software Engineering student at Universidad Cooperativa de Colombia. I'm passionate about full-stack web development.",
    proyectos: "My projects include: Software Design System, Solar Energy Backend and Frontend, a Mercado Libre clone and a Software Quality project. Check them in the Projects section or on my GitHub: github.com/sebastiandavid98",
    contacto: "You can contact me on WhatsApp at +57 324 615 9170, on LinkedIn at linkedin.com/in/sebastian-david-4a1459390 or using the contact form on this page.",
    habilidades: "I work with JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS and Git. I focus on full-stack web development.",
    default: "I didn't quite understand. You can ask me about: who I am, my projects, my skills or how to contact me.",
  },
};

function getResponse(input: string, lang: "es" | "en"): string {
  const lower = input.toLowerCase();
  const r = responses[lang];
  if (/qui[eé]n|who|nombre|name|eres|are you/.test(lower)) return r.quien;
  if (/proyecto|project|github|trabajo|work|built/.test(lower)) return r.proyectos;
  if (/contacto|contact|whatsapp|linkedin|email|tel[eé]fono|phone/.test(lower)) return r.contacto;
  if (/habilidad|skill|tecnolog|stack|sab[eé]s|know/.test(lower)) return r.habilidades;
  return r.default;
}

export default function Chatbot() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: t.chatbot.greeting }]);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send() {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { from: "user", text: trimmed };
    const botMsg: Message = { from: "bot", text: getResponse(trimmed, lang) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Abrir chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">S</div>
            <div>
              <p className="text-white font-semibold text-sm">{t.chatbot.title}</p>
              <p className="text-blue-200 text-xs">Online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.from === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 rounded-bl-sm"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-slate-700 p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder={t.chatbot.placeholder}
              className="flex-1 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 rounded-xl px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors"
            />
            <button onClick={send}
              className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-xl transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
