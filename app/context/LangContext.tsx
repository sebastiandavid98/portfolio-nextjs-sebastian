"use client";
import { createContext, useContext, useState } from "react";

export type Lang = "es" | "en" | "fr" | "ja";

const translations = {
  es: {
    nav: { about: "Sobre mí", experience: "Experiencia", projects: "Proyectos", certificates: "Certificados", contact: "Contacto" },
    hero: {
      badge: "Disponible para proyectos",
      role: "Estudiante de Ingeniería de Software",
      semester: "5° semestre · Universidad Cooperativa de Colombia",
      description: "Apasionado por construir productos digitales con código limpio, buenas prácticas y diseño centrado en el usuario.",
      downloadCV: "Descargar CV",
      viewProjects: "Ver proyectos",
      openToWork: "Open to work",
    },
    about: {
      label: "Sobre mí",
      title: "Construyo ideas con",
      titleAccent: "código",
      p1: "Soy Sebastián David Marcillo, estudiante de Ingeniería de Software en 5° semestre en la Universidad Cooperativa de Colombia, apasionado por crear soluciones digitales que combinen funcionalidad y buen diseño.",
      p2: "Me enfoco en el desarrollo web full-stack, con especial interés en interfaces modernas y arquitecturas limpias. Disfruto aprender nuevas tecnologías y aplicarlas en proyectos reales.",
      p3: "Cuando no estoy programando, exploro diseño UI/UX y sigo mejorando mis habilidades en algoritmos y estructuras de datos.",
      skills: "Habilidades",
      semester: "Semestre",
      projects: "Proyectos",
      years: "Años codificando",
    },
    experience: {
      label: "Experiencia", title: "Mi", titleAccent: "trayectoria", academic: "Académica", work: "Laboral",
    },
    projects: {
      label: "Proyectos", title: "Lo que he", titleAccent: "construido",
      viewAll: "Ver todos en GitHub", github: "GitHub", demo: "Demo",
    },
    certificates: {
      label: "Certificados", title: "Mis", titleAccent: "certificaciones", issued: "Emitido por",
    },
    contact: {
      label: "Contacto", title: "Hablemos de tu", titleAccent: "proyecto",
      description: "Estoy disponible para proyectos freelance, colaboraciones o simplemente para conectar. Escríbeme y te respondo lo antes posible.",
      name: "Nombre", email: "Email", message: "Mensaje",
      namePlaceholder: "Tu nombre", messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar mensaje", sending: "Enviando...",
      successTitle: "Mensaje enviado", successDesc: "Gracias por escribirme, te responderé pronto.", another: "Enviar otro mensaje",
    },
    footer: { rights: "Todos los derechos reservados.", built: "Diseñado y desarrollado con Next.js & Tailwind CSS" },
    chatbot: { title: "Chat con Sebastián", placeholder: "Escribe tu pregunta...", greeting: "¡Hola! Soy el asistente de Sebastián. ¿En qué te puedo ayudar?" },
  },
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", certificates: "Certificates", contact: "Contact" },
    hero: {
      badge: "Available for projects",
      role: "Software Engineering Student",
      semester: "5th semester · Universidad Cooperativa de Colombia",
      description: "Passionate about building digital products with clean code, best practices and user-centered design.",
      downloadCV: "Download CV", viewProjects: "View projects", openToWork: "Open to work",
    },
    about: {
      label: "About me", title: "I build ideas with", titleAccent: "code",
      p1: "I'm Sebastián David Marcillo, a 5th semester Software Engineering student at Universidad Cooperativa de Colombia, passionate about creating digital solutions that combine functionality and great design.",
      p2: "I focus on full-stack web development, with a special interest in modern interfaces and clean architectures. I enjoy learning new technologies and applying them in real projects.",
      p3: "When I'm not coding, I explore UI/UX design and keep improving my skills in algorithms and data structures.",
      skills: "Skills", semester: "Semester", projects: "Projects", years: "Years coding",
    },
    experience: { label: "Experience", title: "My", titleAccent: "journey", academic: "Academic", work: "Work" },
    projects: {
      label: "Projects", title: "What I've", titleAccent: "built",
      viewAll: "View all on GitHub", github: "GitHub", demo: "Demo",
    },
    certificates: { label: "Certificates", title: "My", titleAccent: "certifications", issued: "Issued by" },
    contact: {
      label: "Contact", title: "Let's talk about your", titleAccent: "project",
      description: "I'm available for freelance projects, collaborations or just to connect. Write to me and I'll get back to you as soon as possible.",
      name: "Name", email: "Email", message: "Message",
      namePlaceholder: "Your name", messagePlaceholder: "Tell me about your project...",
      send: "Send message", sending: "Sending...",
      successTitle: "Message sent", successDesc: "Thanks for reaching out, I'll reply soon.", another: "Send another message",
    },
    footer: { rights: "All rights reserved.", built: "Designed and built with Next.js & Tailwind CSS" },
    chatbot: { title: "Chat with Sebastián", placeholder: "Type your question...", greeting: "Hi! I'm Sebastián's assistant. How can I help you?" },
  },
  fr: {
    nav: { about: "À propos", experience: "Expérience", projects: "Projets", certificates: "Certificats", contact: "Contact" },
    hero: {
      badge: "Disponible pour des projets",
      role: "Étudiant en Génie Logiciel",
      semester: "5ème semestre · Universidad Cooperativa de Colombia",
      description: "Passionné par la création de produits numériques avec du code propre, de bonnes pratiques et un design centré sur l'utilisateur.",
      downloadCV: "Télécharger CV", viewProjects: "Voir les projets", openToWork: "Open to work",
    },
    about: {
      label: "À propos", title: "Je construis des idées avec", titleAccent: "du code",
      p1: "Je suis Sebastián David Marcillo, étudiant en Génie Logiciel en 5ème semestre à l'Universidad Cooperativa de Colombia, passionné par la création de solutions numériques alliant fonctionnalité et bon design.",
      p2: "Je me concentre sur le développement web full-stack, avec un intérêt particulier pour les interfaces modernes et les architectures propres.",
      p3: "Quand je ne code pas, j'explore le design UI/UX et j'améliore mes compétences en algorithmes et structures de données.",
      skills: "Compétences", semester: "Semestre", projects: "Projets", years: "Ans de code",
    },
    experience: { label: "Expérience", title: "Mon", titleAccent: "parcours", academic: "Académique", work: "Professionnel" },
    projects: {
      label: "Projets", title: "Ce que j'ai", titleAccent: "construit",
      viewAll: "Voir tout sur GitHub", github: "GitHub", demo: "Démo",
    },
    certificates: { label: "Certificats", title: "Mes", titleAccent: "certifications", issued: "Délivré par" },
    contact: {
      label: "Contact", title: "Parlons de votre", titleAccent: "projet",
      description: "Je suis disponible pour des projets freelance, des collaborations ou simplement pour me connecter. Écrivez-moi et je vous répondrai dès que possible.",
      name: "Nom", email: "Email", message: "Message",
      namePlaceholder: "Votre nom", messagePlaceholder: "Parlez-moi de votre projet...",
      send: "Envoyer le message", sending: "Envoi en cours...",
      successTitle: "Message envoyé", successDesc: "Merci de m'avoir contacté, je vous répondrai bientôt.", another: "Envoyer un autre message",
    },
    footer: { rights: "Tous droits réservés.", built: "Conçu et développé avec Next.js & Tailwind CSS" },
    chatbot: { title: "Chat avec Sebastián", placeholder: "Écrivez votre question...", greeting: "Bonjour ! Je suis l'assistant de Sebastián. Comment puis-je vous aider ?" },
  },
  ja: {
    nav: { about: "自己紹介", experience: "経験", projects: "プロジェクト", certificates: "資格", contact: "お問い合わせ" },
    hero: {
      badge: "プロジェクト募集中",
      role: "ソフトウェアエンジニアリング学生",
      semester: "5学期 · Universidad Cooperativa de Colombia",
      description: "クリーンなコード、ベストプラクティス、ユーザー中心のデザインでデジタル製品を構築することに情熱を持っています。",
      downloadCV: "CVをダウンロード", viewProjects: "プロジェクトを見る", openToWork: "求職中",
    },
    about: {
      label: "自己紹介", title: "コードで", titleAccent: "アイデアを構築",
      p1: "私はセバスティアン・ダビッド・マルシージョです。Universidad Cooperativa de Colombiaでソフトウェアエンジニアリングを5学期学んでいます。機能性と優れたデザインを組み合わせたデジタルソリューションの作成に情熱を持っています。",
      p2: "モダンなインターフェースとクリーンなアーキテクチャに特別な関心を持ち、フルスタックWeb開発に注力しています。",
      p3: "コーディング以外の時間は、UI/UXデザインを探求し、アルゴリズムとデータ構造のスキルを磨いています。",
      skills: "スキル", semester: "学期", projects: "プロジェクト", years: "コーディング歴",
    },
    experience: { label: "経験", title: "私の", titleAccent: "歩み", academic: "学歴", work: "職歴" },
    projects: {
      label: "プロジェクト", title: "私が", titleAccent: "構築したもの",
      viewAll: "GitHubで全て見る", github: "GitHub", demo: "デモ",
    },
    certificates: { label: "資格", title: "私の", titleAccent: "認定資格", issued: "発行元" },
    contact: {
      label: "お問い合わせ", title: "あなたの", titleAccent: "プロジェクトについて話しましょう",
      description: "フリーランスプロジェクト、コラボレーション、または単なる繋がりのために利用可能です。メッセージをお送りください。",
      name: "お名前", email: "メール", message: "メッセージ",
      namePlaceholder: "お名前を入力", messagePlaceholder: "プロジェクトについて教えてください...",
      send: "メッセージを送る", sending: "送信中...",
      successTitle: "送信完了", successDesc: "ご連絡ありがとうございます。すぐに返信します。", another: "別のメッセージを送る",
    },
    footer: { rights: "全著作権所有。", built: "Next.js & Tailwind CSSで設計・開発" },
    chatbot: { title: "セバスティアンとチャット", placeholder: "質問を入力してください...", greeting: "こんにちは！セバスティアンのアシスタントです。何かお手伝いできますか？" },
  },
};

type Translations = typeof translations.es;
const LangContext = createContext<{ lang: Lang; t: Translations; setLang: (l: Lang) => void }>({
  lang: "es",
  t: translations.es,
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
