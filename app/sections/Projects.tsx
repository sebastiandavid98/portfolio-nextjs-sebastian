"use client";
import Image from "next/image";
import { useLang } from "../context/LangContext";
import { GitHubIcon, ExternalLinkIcon } from "../components/icons";
import SectionHeader from "../components/ui/SectionHeader";
import TechPill from "../components/ui/TechPill";
import { SITE } from "../lib/config";

const projects = {
  es: [
    { name: "Sistema Diseño Software", description: "Sistema de diseño de software con patrones y metodologías de ingeniería aplicadas al desarrollo de soluciones empresariales.", tech: ["Java", "UML", "Patrones de Diseño"], github: "https://github.com/migueltovarb/ISWDISENO202502-2Sebastiandavid98", demo: null, image: "/images/projects/diseno-software.svg" },
    { name: "Backend Energía Solar", description: "API REST para gestión de datos de paneles solares, monitoreo de energía y reportes de producción en tiempo real.", tech: ["Node.js", "Express", "MongoDB", "REST API"], github: "https://github.com/sebastiandavid98/Backend_Energia_Solar", demo: null, image: "/images/projects/backend-solar.svg" },
    { name: "Frontend Energía Solar", description: "Interfaz web para visualización de datos de energía solar, dashboards interactivos y gestión de instalaciones.", tech: ["React", "JavaScript", "CSS", "Chart.js"], github: "https://github.com/sebastiandavid98/frontend-energia-solar", demo: null, image: "/images/projects/frontend-solar.svg" },
    { name: "Mercado Libre Clone", description: "Clon funcional de Mercado Libre con listado de productos, búsqueda, filtros y carrito de compras.", tech: ["React", "JavaScript", "Tailwind CSS", "API"], github: "https://github.com/sebastiandavid98/Mercado-libre-", demo: null, image: "/images/projects/mercado-libre.svg" },
    { name: "Calidad de Software", description: "Proyecto enfocado en métricas, pruebas y estándares de calidad de software aplicando metodologías de QA.", tech: ["Testing", "QA", "Métricas", "Documentación"], github: "https://github.com/sebastiandavid98/Calidad-de-Sotware", demo: null, image: "/images/projects/calidad-software.svg" },
  ],
  en: [
    { name: "Software Design System", description: "Software design system with engineering patterns and methodologies applied to enterprise solution development.", tech: ["Java", "UML", "Design Patterns"], github: "https://github.com/migueltovarb/ISWDISENO202502-2Sebastiandavid98", demo: null, image: "/images/projects/diseno-software.svg" },
    { name: "Solar Energy Backend", description: "REST API for solar panel data management, energy monitoring and real-time production reports.", tech: ["Node.js", "Express", "MongoDB", "REST API"], github: "https://github.com/sebastiandavid98/Backend_Energia_Solar", demo: null, image: "/images/projects/backend-solar.svg" },
    { name: "Solar Energy Frontend", description: "Web interface for solar energy data visualization, interactive dashboards and installation management.", tech: ["React", "JavaScript", "CSS", "Chart.js"], github: "https://github.com/sebastiandavid98/frontend-energia-solar", demo: null, image: "/images/projects/frontend-solar.svg" },
    { name: "Mercado Libre Clone", description: "Functional Mercado Libre clone with product listing, search, filters and shopping cart.", tech: ["React", "JavaScript", "Tailwind CSS", "API"], github: "https://github.com/sebastiandavid98/Mercado-libre-", demo: null, image: "/images/projects/mercado-libre.svg" },
    { name: "Software Quality", description: "Project focused on metrics, testing and software quality standards applying QA methodologies.", tech: ["Testing", "QA", "Metrics", "Documentation"], github: "https://github.com/sebastiandavid98/Calidad-de-Sotware", demo: null, image: "/images/projects/calidad-software.svg" },
  ],
  fr: [
    { name: "Système de Conception Logicielle", description: "Système de conception logicielle avec des patrons et méthodologies d'ingénierie appliqués au développement de solutions d'entreprise.", tech: ["Java", "UML", "Patrons de Conception"], github: "https://github.com/migueltovarb/ISWDISENO202502-2Sebastiandavid98", demo: null, image: "/images/projects/diseno-software.svg" },
    { name: "Backend Énergie Solaire", description: "API REST pour la gestion des données de panneaux solaires, surveillance de l'énergie et rapports de production en temps réel.", tech: ["Node.js", "Express", "MongoDB", "REST API"], github: "https://github.com/sebastiandavid98/Backend_Energia_Solar", demo: null, image: "/images/projects/backend-solar.svg" },
    { name: "Frontend Énergie Solaire", description: "Interface web pour la visualisation des données d'énergie solaire, tableaux de bord interactifs et gestion des installations.", tech: ["React", "JavaScript", "CSS", "Chart.js"], github: "https://github.com/sebastiandavid98/frontend-energia-solar", demo: null, image: "/images/projects/frontend-solar.svg" },
    { name: "Clone Mercado Libre", description: "Clone fonctionnel de Mercado Libre avec liste de produits, recherche, filtres et panier d'achat.", tech: ["React", "JavaScript", "Tailwind CSS", "API"], github: "https://github.com/sebastiandavid98/Mercado-libre-", demo: null, image: "/images/projects/mercado-libre.svg" },
    { name: "Qualité Logicielle", description: "Projet axé sur les métriques, les tests et les normes de qualité logicielle en appliquant des méthodologies QA.", tech: ["Testing", "QA", "Métriques", "Documentation"], github: "https://github.com/sebastiandavid98/Calidad-de-Sotware", demo: null, image: "/images/projects/calidad-software.svg" },
  ],
  ja: [
    { name: "ソフトウェア設計システム", description: "エンタープライズソリューション開発に適用されたエンジニアリングパターンと方法論を持つソフトウェア設計システム。", tech: ["Java", "UML", "デザインパターン"], github: "https://github.com/migueltovarb/ISWDISENO202502-2Sebastiandavid98", demo: null, image: "/images/projects/diseno-software.svg" },
    { name: "太陽エネルギーバックエンド", description: "ソーラーパネルデータ管理、エネルギー監視、リアルタイム生産レポートのREST API。", tech: ["Node.js", "Express", "MongoDB", "REST API"], github: "https://github.com/sebastiandavid98/Backend_Energia_Solar", demo: null, image: "/images/projects/backend-solar.svg" },
    { name: "太陽エネルギーフロントエンド", description: "太陽エネルギーデータの可視化、インタラクティブダッシュボード、設備管理のWebインターフェース。", tech: ["React", "JavaScript", "CSS", "Chart.js"], github: "https://github.com/sebastiandavid98/frontend-energia-solar", demo: null, image: "/images/projects/frontend-solar.svg" },
    { name: "Mercado Libreクローン", description: "商品リスト、検索、フィルター、ショッピングカートを備えたMercado Libreの機能的クローン。", tech: ["React", "JavaScript", "Tailwind CSS", "API"], github: "https://github.com/sebastiandavid98/Mercado-libre-", demo: null, image: "/images/projects/mercado-libre.svg" },
    { name: "ソフトウェア品質", description: "QA方法論を適用したメトリクス、テスト、ソフトウェア品質基準に焦点を当てたプロジェクト。", tech: ["Testing", "QA", "メトリクス", "ドキュメント"], github: "https://github.com/sebastiandavid98/Calidad-de-Sotware", demo: null, image: "/images/projects/calidad-software.svg" },
  ],
};


export default function Projects() {
  const { t, lang } = useLang();
  const list = projects[lang] ?? projects.es;

  return (
    <section id="projects" className="relative bg-white dark:bg-slate-950 py-10 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-50 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <SectionHeader
          label={t.projects.label}
          title={t.projects.title}
          titleAccent={t.projects.titleAccent}
          className="mb-3"
        />

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div /> {/* spacer — title rendered above */}
          <a href={SITE.github} target="_blank" rel="noopener noreferrer"
            className="animate-fade-in delay-200 flex items-center gap-2 text-gray-500 dark:text-slate-400 hover:text-green-700 dark:hover:text-green-400 text-sm font-medium transition-all duration-300 shrink-0 group">
            <GitHubIcon />
            <span className="group-hover:underline underline-offset-2">{t.projects.viewAll}</span>
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((project, i) => (
            <article
              key={project.name}
              style={{ animationDelay: `${0.1 * i}s` }}
              className="animate-fade-up group flex flex-col bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-2xl overflow-hidden hover:border-green-500 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-green-600/10 hover:-translate-y-2 transition-all duration-400"
            >
              {/* Image with zoom + overlay */}
              <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-white/90 hover:bg-white text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200">
                      <GitHubIcon /> GitHub
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-green-700/90 hover:bg-green-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors duration-200">
                        <ExternalLinkIcon className="w-3.5 h-3.5" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                {/* Accent bar */}
                <div className="w-8 h-1 rounded-full bg-gradient-to-r from-green-700 to-green-500 mb-3 group-hover:w-16 transition-all duration-500" />

                <h3 className="text-gray-900 dark:text-white font-bold text-base mb-2 group-hover:text-green-700 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech) => (
                    <TechPill key={tech} label={tech} />
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-700 dark:text-slate-300 hover:text-white text-sm font-medium bg-gray-100 dark:bg-slate-700/50 hover:bg-gray-900 dark:hover:bg-slate-600 px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-600/50 hover:border-gray-900 transition-all duration-300 flex-1 justify-center">
                    <GitHubIcon />{t.projects.github}
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white text-sm font-medium bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg transition-all duration-300 flex-1 justify-center shadow-md shadow-green-600/20">
                      <ExternalLinkIcon />{t.projects.demo}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



