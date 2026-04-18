"use client";
import { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LangContext";

type Message = { from: "bot" | "user"; text: string; time: string };

// ── Knowledge base ──────────────────────────────────────────────
const kb = {
  es: {
    quien: {
      triggers: /qui[eé]n|eres|nombre|presentat|about|te llamas|llamas/,
      reply: `👋 Soy **Sebastián David Marcillo**, estudiante de Ingeniería de Software en 5° semestre en la Universidad Cooperativa de Colombia.\n\nMe apasiona el desarrollo web full-stack, el diseño de interfaces y construir soluciones digitales con código limpio.`,
    },
    proyectos: {
      triggers: /proyecto|project|github|portafolio|trabajo|hiciste|construiste|built/,
      reply: `🚀 Mis proyectos principales:\n\n• **Sistema Diseño Software** — Java, UML, Patrones\n• **Backend Energía Solar** — Node.js, Express, MongoDB\n• **Frontend Energía Solar** — React, Chart.js\n• **Mercado Libre Clone** — React, Tailwind, API\n• **Calidad de Software** — Testing, QA, Métricas\n\nPuedes verlos todos en la sección **Proyectos** ↑`,
    },
    habilidades: {
      triggers: /habilidad|skill|tecnolog|sab[eé]s|stack|lenguaje|framework|dominas/,
      reply: `💻 Mi stack tecnológico:\n\n**Frontend:** React, Next.js, TypeScript, Tailwind CSS\n**Backend:** Node.js, Express, REST APIs\n**Bases de datos:** MongoDB, SQL\n**Herramientas:** Git, GitHub, Figma, VS Code`,
    },
    contacto: {
      triggers: /contacto|contact|whatsapp|linkedin|email|correo|tel[eé]fono|hablar|escribir|mensaje/,
      reply: `📬 Puedes contactarme por:\n\n• **WhatsApp:** +57 324 615 9170\n• **LinkedIn:** linkedin.com/in/sebastian-david-4a1459390\n• **Formulario:** sección Contacto ↑\n\n¡Respondo rápido! 😊`,
    },
    experiencia: {
      triggers: /experiencia|experience|universidad|estudi|semestre|carrera|formaci/,
      reply: `🎓 Actualmente curso el **5° semestre** de Ingeniería de Software en la **Universidad Cooperativa de Colombia**, sede Pasto.\n\nTambién tengo experiencia como **desarrollador web freelance** desde 2023 y he participado en el 2° y 3° Seminario Nacional de Ingeniería de Software.`,
    },
    certificados: {
      triggers: /certificad|certif|seminario|logro|diploma/,
      reply: `🏆 Mis certificaciones:\n\n• **2° Seminario Nacional de Ing. de Software** — Mayo 2025 (8h)\n• **3° Seminario Nacional de Ing. de Software** — Octubre 2025 (8h)\n\nAmbos emitidos por la Universidad Cooperativa de Colombia.`,
    },
    saludo: {
      triggers: /^(hola|hi|hey|buenas|buenos|saludos|hello|qué tal|que tal|ola)[\s!?]*$/,
      reply: `¡Hola! 👋 Soy el asistente de Sebastián. Puedo contarte sobre:\n\n• 👤 Quién es Sebastián\n• 🚀 Sus proyectos\n• 💻 Sus habilidades\n• 📬 Cómo contactarlo\n• 🎓 Su experiencia\n\n¿Qué quieres saber?`,
    },
    default: `🤔 No entendí bien tu pregunta. Puedes preguntarme sobre:\n\n• **Quién soy** — "¿Quién eres?"\n• **Proyectos** — "¿Qué proyectos tienes?"\n• **Habilidades** — "¿Qué tecnologías usas?"\n• **Contacto** — "¿Cómo te contacto?"\n• **Experiencia** — "¿Dónde estudias?"`,
  },
  en: {
    quien: {
      triggers: /who|name|about|yourself|you are|tell me/,
      reply: `👋 I'm **Sebastián David Marcillo**, a 5th semester Software Engineering student at Universidad Cooperativa de Colombia.\n\nI'm passionate about full-stack web development, UI design and building digital solutions with clean code.`,
    },
    proyectos: {
      triggers: /project|github|portfolio|work|built|made|created/,
      reply: `🚀 My main projects:\n\n• **Software Design System** — Java, UML, Patterns\n• **Solar Energy Backend** — Node.js, Express, MongoDB\n• **Solar Energy Frontend** — React, Chart.js\n• **Mercado Libre Clone** — React, Tailwind, API\n• **Software Quality** — Testing, QA, Metrics\n\nSee them all in the **Projects** section ↑`,
    },
    habilidades: {
      triggers: /skill|tech|stack|language|framework|know|use|tools/,
      reply: `💻 My tech stack:\n\n**Frontend:** React, Next.js, TypeScript, Tailwind CSS\n**Backend:** Node.js, Express, REST APIs\n**Databases:** MongoDB, SQL\n**Tools:** Git, GitHub, Figma, VS Code`,
    },
    contacto: {
      triggers: /contact|whatsapp|linkedin|email|phone|reach|message|talk/,
      reply: `📬 You can reach me at:\n\n• **WhatsApp:** +57 324 615 9170\n• **LinkedIn:** linkedin.com/in/sebastian-david-4a1459390\n• **Form:** Contact section ↑\n\nI reply fast! 😊`,
    },
    experiencia: {
      triggers: /experience|university|study|semester|career|education/,
      reply: `🎓 I'm currently in my **5th semester** of Software Engineering at **Universidad Cooperativa de Colombia**, Pasto campus.\n\nI also have experience as a **freelance web developer** since 2023 and participated in the 2nd and 3rd National Software Engineering Seminars.`,
    },
    certificados: {
      triggers: /certif|seminar|achievement|diploma/,
      reply: `🏆 My certifications:\n\n• **2nd National Software Engineering Seminar** — May 2025 (8h)\n• **3rd National Software Engineering Seminar** — October 2025 (8h)\n\nBoth issued by Universidad Cooperativa de Colombia.`,
    },
    saludo: {
      triggers: /^(hi|hello|hey|good|greetings|howdy)[\s!?]*$/,
      reply: `Hello! 👋 I'm Sebastián's assistant. I can tell you about:\n\n• 👤 Who Sebastián is\n• 🚀 His projects\n• 💻 His skills\n• 📬 How to contact him\n• 🎓 His experience\n\nWhat would you like to know?`,
    },
    default: `🤔 I didn't quite understand. You can ask me about:\n\n• **Who I am** — "Who are you?"\n• **Projects** — "What projects do you have?"\n• **Skills** — "What technologies do you use?"\n• **Contact** — "How can I contact you?"\n• **Experience** — "Where do you study?"`,
  },
  fr: {
    quien: {
      triggers: /qui|vous|toi|nom|présent|about/,
      reply: `👋 Je suis **Sebastián David Marcillo**, étudiant en Génie Logiciel en 5ème semestre à l'Universidad Cooperativa de Colombia.\n\nJe suis passionné par le développement web full-stack et la création de solutions numériques avec du code propre.`,
    },
    proyectos: {
      triggers: /projet|github|portfolio|travail|créé|construit/,
      reply: `🚀 Mes projets principaux:\n\n• **Système de Conception Logicielle** — Java, UML\n• **Backend Énergie Solaire** — Node.js, MongoDB\n• **Frontend Énergie Solaire** — React, Chart.js\n• **Clone Mercado Libre** — React, Tailwind\n• **Qualité Logicielle** — Testing, QA\n\nVoir la section **Projets** ↑`,
    },
    habilidades: {
      triggers: /compétence|technolog|stack|langage|framework|outil/,
      reply: `💻 Mon stack:\n\n**Frontend:** React, Next.js, TypeScript, Tailwind\n**Backend:** Node.js, Express, REST APIs\n**BDD:** MongoDB, SQL\n**Outils:** Git, GitHub, Figma`,
    },
    contacto: {
      triggers: /contact|whatsapp|linkedin|email|téléphone|message/,
      reply: `📬 Vous pouvez me contacter:\n\n• **WhatsApp:** +57 324 615 9170\n• **LinkedIn:** linkedin.com/in/sebastian-david-4a1459390\n• **Formulaire:** section Contact ↑`,
    },
    experiencia: {
      triggers: /expérience|université|étude|semestre|formation/,
      reply: `🎓 Je suis en **5ème semestre** de Génie Logiciel à l'**Universidad Cooperativa de Colombia**.\n\nJ'ai aussi de l'expérience en tant que **développeur web freelance** depuis 2023.`,
    },
    certificados: {
      triggers: /certif|séminaire|diplôme/,
      reply: `🏆 Mes certifications:\n\n• **2ème Séminaire National** — Mai 2025 (8h)\n• **3ème Séminaire National** — Octobre 2025 (8h)`,
    },
    saludo: {
      triggers: /^(bonjour|salut|hello|bonsoir|coucou)[\s!?]*$/,
      reply: `Bonjour! 👋 Je suis l'assistant de Sebastián. Je peux vous parler de:\n\n• 👤 Qui est Sebastián\n• 🚀 Ses projets\n• 💻 Ses compétences\n• 📬 Comment le contacter`,
    },
    default: `🤔 Je n'ai pas compris. Vous pouvez me demander:\n\n• **Qui je suis** — "Qui es-tu?"\n• **Projets** — "Quels sont tes projets?"\n• **Compétences** — "Quelles technologies?"\n• **Contact** — "Comment te contacter?"`,
  },
  ja: {
    quien: {
      triggers: /誰|名前|自己紹介|あなた|について/,
      reply: `👋 私は**セバスティアン・ダビッド・マルシージョ**です。Universidad Cooperativa de Colombiaでソフトウェアエンジニアリングを5学期学んでいます。\n\nフルスタックWeb開発とクリーンなコードでデジタルソリューションを構築することに情熱を持っています。`,
    },
    proyectos: {
      triggers: /プロジェクト|作品|github|ポートフォリオ/,
      reply: `🚀 主なプロジェクト:\n\n• **ソフトウェア設計システム** — Java, UML\n• **太陽エネルギーバックエンド** — Node.js, MongoDB\n• **太陽エネルギーフロントエンド** — React\n• **Mercado Libreクローン** — React, Tailwind\n• **ソフトウェア品質** — Testing, QA\n\n**プロジェクト**セクションをご覧ください ↑`,
    },
    habilidades: {
      triggers: /スキル|技術|スタック|言語|フレームワーク/,
      reply: `💻 技術スタック:\n\n**フロントエンド:** React, Next.js, TypeScript, Tailwind\n**バックエンド:** Node.js, Express\n**DB:** MongoDB, SQL\n**ツール:** Git, GitHub, Figma`,
    },
    contacto: {
      triggers: /連絡|コンタクト|メール|電話|メッセージ/,
      reply: `📬 連絡方法:\n\n• **WhatsApp:** +57 324 615 9170\n• **LinkedIn:** linkedin.com/in/sebastian-david-4a1459390\n• **フォーム:** お問い合わせセクション ↑`,
    },
    experiencia: {
      triggers: /経験|大学|学期|勉強|学歴/,
      reply: `🎓 現在、**Universidad Cooperativa de Colombia**でソフトウェアエンジニアリングの**5学期**を学んでいます。\n\n2023年からフリーランスWebデベロッパーとしても活動しています。`,
    },
    certificados: {
      triggers: /資格|証明書|セミナー/,
      reply: `🏆 資格:\n\n• **第2回全国セミナー** — 2025年5月 (8時間)\n• **第3回全国セミナー** — 2025年10月 (8時間)`,
    },
    saludo: {
      triggers: /^(こんにちは|はじめまして|やあ|hello|hi)[\s!?]*$/,
      reply: `こんにちは！👋 セバスティアンのアシスタントです。以下についてお答えできます:\n\n• 👤 セバスティアンについて\n• 🚀 プロジェクト\n• 💻 スキル\n• 📬 連絡方法`,
    },
    default: `🤔 よく理解できませんでした。以下についてお聞きください:\n\n• **自己紹介** — "誰ですか？"\n• **プロジェクト** — "プロジェクトは？"\n• **スキル** — "技術は？"\n• **連絡** — "連絡方法は？"`,
  },
};

type Lang = "es" | "en" | "fr" | "ja";

function getReply(input: string, lang: Lang): string {
  const lower = input.toLowerCase().trim();
  const base = kb[lang] ?? kb.es;
  for (const key of ["saludo", "quien", "proyectos", "habilidades", "contacto", "experiencia", "certificados"] as const) {
    if (base[key].triggers.test(lower)) return base[key].reply;
  }
  return base.default;
}

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// Render markdown-lite: **bold** and newlines
function renderText(text: string) {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/\*\*(.+?)\*\*/g);
    return (
      <span key={i}>
        {parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)}
        {i < text.split("\n").length - 1 && <br />}
      </span>
    );
  });
}

const SUGGESTIONS = {
  es: ["¿Quién eres?", "¿Qué proyectos tienes?", "¿Qué tecnologías usas?", "¿Cómo te contacto?"],
  en: ["Who are you?", "What projects do you have?", "What technologies?", "How to contact you?"],
  fr: ["Qui es-tu?", "Quels projets?", "Quelles technologies?", "Comment te contacter?"],
  ja: ["誰ですか？", "プロジェクトは？", "技術は？", "連絡方法は？"],
};

export default function Chatbot() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Init greeting
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: "bot", text: t.chatbot.greeting, time: now() }]);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  function send(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg) return;
    const userMsg: Message = { from: "user", text: msg, time: now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = getReply(msg, lang as Lang);
      setMessages((prev) => [...prev, { from: "bot", text: reply, time: now() }]);
      setTyping(false);
    }, 700 + Math.random() * 400);
  }

  const suggestions = SUGGESTIONS[lang as Lang] ?? SUGGESTIONS.es;

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Abrir chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-700 hover:bg-green-600 text-white rounded-full shadow-xl shadow-green-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className={`transition-all duration-300 ${open ? "rotate-90 scale-90" : ""}`}>
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          )}
        </span>
        {/* Unread dot */}
        {!open && <span className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">

          {/* Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-500 px-4 py-3 flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white font-bold text-sm">S</div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-green-700" />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">{t.chatbot.title}</p>
              <p className="text-blue-100 text-xs">Online · Responde al instante</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors p-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-72 bg-gray-50 dark:bg-slate-900/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"} gap-2`}>
                {m.from === "bot" && (
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-700 to-green-500 flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">S</div>
                )}
                <div className="max-w-[78%]">
                  <div className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-green-700 text-white rounded-br-sm"
                      : "bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-200 rounded-bl-sm shadow-sm border border-gray-100 dark:border-slate-700"
                  }`}>
                    {renderText(m.text)}
                  </div>
                  <p className={`text-xs text-gray-400 dark:text-slate-600 mt-1 ${m.from === "user" ? "text-right" : "text-left"}`}>{m.time}</p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-700 to-green-500 flex items-center justify-center text-white text-xs font-bold shrink-0">S</div>
                <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1.5 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick suggestions */}
          {messages.length <= 1 && (
            <div className="px-3 py-2 flex gap-2 overflow-x-auto border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 scrollbar-hide">
              {suggestions.map((s) => (
                <button key={s} onClick={() => send(s)}
                  className="shrink-0 text-xs bg-green-50 dark:bg-green-600/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-600/30 px-3 py-1.5 rounded-full hover:bg-blue-100 dark:hover:bg-green-600/20 transition-colors whitespace-nowrap">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-slate-700 p-3 flex gap-2 bg-white dark:bg-slate-900">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder={t.chatbot.placeholder}
              className="flex-1 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 rounded-xl px-3 py-2 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600/20 transition-all"
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || typing}
              className="bg-green-700 hover:bg-green-600 disabled:opacity-40 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
            >
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

