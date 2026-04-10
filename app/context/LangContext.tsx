"use client";
import { createContext, useContext, useState } from "react";

type Lang = "es" | "en";

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
      label: "Experiencia",
      title: "Mi",
      titleAccent: "trayectoria",
      academic: "Académica",
      work: "Laboral",
    },
    projects: {
      label: "Proyectos",
      title: "Lo que he",
      titleAccent: "construido",
      viewAll: "Ver todos en GitHub",
      github: "GitHub",
      demo: "Demo",
    },
    certificates: {
      label: "Certificados",
      title: "Mis",
      titleAccent: "certificaciones",
      issued: "Emitido por",
    },
    contact: {
      label: "Contacto",
      title: "Hablemos de tu",
      titleAccent: "proyecto",
      description: "Estoy disponible para proyectos freelance, colaboraciones o simplemente para conectar. Escríbeme y te respondo lo antes posible.",
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      successTitle: "Mensaje enviado",
      successDesc: "Gracias por escribirme, te responderé pronto.",
      another: "Enviar otro mensaje",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      built: "Diseñado y desarrollado con Next.js & Tailwind CSS",
    },
    chatbot: {
      title: "Chat con Sebastián",
      placeholder: "Escribe tu pregunta...",
      greeting: "¡Hola! Soy el asistente de Sebastián. Puedo responder preguntas sobre él. ¿En qué te puedo ayudar?",
    },
  },
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", certificates: "Certificates", contact: "Contact" },
    hero: {
      badge: "Available for projects",
      role: "Software Engineering Student",
      semester: "5th semester · Universidad Cooperativa de Colombia",
      description: "Passionate about building digital products with clean code, best practices and user-centered design.",
      downloadCV: "Download CV",
      viewProjects: "View projects",
      openToWork: "Open to work",
    },
    about: {
      label: "About me",
      title: "I build ideas with",
      titleAccent: "code",
      p1: "I'm Sebastián David Marcillo, a 5th semester Software Engineering student at Universidad Cooperativa de Colombia, passionate about creating digital solutions that combine functionality and great design.",
      p2: "I focus on full-stack web development, with a special interest in modern interfaces and clean architectures. I enjoy learning new technologies and applying them in real projects.",
      p3: "When I'm not coding, I explore UI/UX design and keep improving my skills in algorithms and data structures.",
      skills: "Skills",
      semester: "Semester",
      projects: "Projects",
      years: "Years coding",
    },
    experience: {
      label: "Experience",
      title: "My",
      titleAccent: "journey",
      academic: "Academic",
      work: "Work",
    },
    projects: {
      label: "Projects",
      title: "What I've",
      titleAccent: "built",
      viewAll: "View all on GitHub",
      github: "GitHub",
      demo: "Demo",
    },
    certificates: {
      label: "Certificates",
      title: "My",
      titleAccent: "certifications",
      issued: "Issued by",
    },
    contact: {
      label: "Contact",
      title: "Let's talk about your",
      titleAccent: "project",
      description: "I'm available for freelance projects, collaborations or just to connect. Write to me and I'll get back to you as soon as possible.",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      messagePlaceholder: "Tell me about your project...",
      send: "Send message",
      sending: "Sending...",
      successTitle: "Message sent",
      successDesc: "Thanks for reaching out, I'll reply soon.",
      another: "Send another message",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Designed and built with Next.js & Tailwind CSS",
    },
    chatbot: {
      title: "Chat with Sebastián",
      placeholder: "Type your question...",
      greeting: "Hi! I'm Sebastián's assistant. I can answer questions about him. How can I help you?",
    },
  },
};

type Translations = typeof translations.es;
const LangContext = createContext<{ lang: Lang; t: Translations; toggleLang: () => void }>({
  lang: "es",
  t: translations.es,
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
