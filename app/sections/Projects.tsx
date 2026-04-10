"use client";
import { useLang } from "../context/LangContext";

const projects = {
  es: [
    {
      name: "Sistema Diseño Software",
      description: "Sistema de diseño de software con patrones y metodologías de ingeniería aplicadas al desarrollo de soluciones empresariales.",
      tech: ["Java", "UML", "Patrones de Diseño"],
      github: "https://github.com/migueltovarb/ISWDISENO202502-2Sebastiandavid98",
      demo: null,
    },
    {
      name: "Backend Energía Solar",
      description: "API REST para gestión de datos de paneles solares, monitoreo de energía y reportes de producción en tiempo real.",
      tech: ["Node.js", "Express", "MongoDB", "REST API"],
      github: "https://github.com/sebastiandavid98/Backend_Energia_Solar",
      demo: null,
    },
    {
      name: "Frontend Energía Solar",
      description: "Interfaz web para visualización de datos de energía solar, dashboards interactivos y gestión de instalaciones.",
      tech: ["React", "JavaScript", "CSS", "Chart.js"],
      github: "https://github.com/sebastiandavid98/frontend-energia-solar",
      demo: null,
    },
    {
      name: "Mercado Libre Clone",
      description: "Clon funcional de Mercado Libre con listado de productos, búsqueda, filtros y carrito de compras.",
      tech: ["React", "JavaScript", "Tailwind CSS", "API"],
      github: "https://github.com/sebastiandavid98/Mercado-libre-",
      demo: null,
    },
    {
      name: "Calidad de Software",
      description: "Proyecto enfocado en métricas, pruebas y estándares de calidad de software aplicando metodologías de QA.",
      tech: ["Testing", "QA", "Métricas", "Documentación"],
      github: "https://github.com/sebastiandavid98/Calidad-de-Sotware",
      demo: null,
    },
  ],
  en: [
    {
      name: "Software Design System",
      description: "Software design system with engineering patterns and methodologies applied to enterprise solution development.",
      tech: ["Java", "UML", "Design Patterns"],
      github: "https://github.com/migueltovarb/ISWDISENO202502-2Sebastiandavid98",
      demo: null,
    },
    {
      name: "Solar Energy Backend",
      description: "REST API for solar panel data management, energy monitoring and real-time production reports.",
      tech: ["Node.js", "Express", "MongoDB", "REST API"],
      github: "https://github.com/sebastiandavid98/Backend_Energia_Solar",
      demo: null,
    },
    {
      name: "Solar Energy Frontend",
      description: "Web interface for solar energy data visualization, interactive dashboards and installation management.",
      tech: ["React", "JavaScript", "CSS", "Chart.js"],
      github: "https://github.com/sebastiandavid98/frontend-energia-solar",
      demo: null,
    },
    {
      name: "Mercado Libre Clone",
      description: "Functional Mercado Libre clone with product listing, search, filters and shopping cart.",
      tech: ["React", "JavaScript", "Tailwind CSS", "API"],
      github: "https://github.com/sebastiandavid98/Mercado-libre-",
      demo: null,
    },
    {
      name: "Software Quality",
      description: "Project focused on metrics, testing and software quality standards applying QA methodologies.",
      tech: ["Testing", "QA", "Metrics", "Documentation"],
      github: "https://github.com/sebastiandavid98/Calidad-de-Sotware",
      demo: null,
    },
  ],
};

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Projects() {
  const { t, lang } = useLang();
  const list = projects[lang];

  return (
    <section id="projects" className="bg-white dark:bg-slate-950 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-blue-600" />
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-widest uppercase">{t.projects.label}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {t.projects.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t.projects.titleAccent}</span>
          </h2>
          <a href="https://github.com/sebastiandavid98" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors shrink-0">
            <GitHubIcon />{t.projects.viewAll}
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((project) => (
            <article key={project.name}
              className="group flex flex-col bg-gray-50 dark:bg-slate-800/40 border border-gray-200 dark:border-slate-700/50 rounded-2xl p-6 hover:border-blue-400 dark:hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
              <div className="w-8 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mb-5 group-hover:w-14 transition-all duration-300" />
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-white dark:bg-slate-700/60 text-gray-700 dark:text-slate-300 text-xs font-medium px-2.5 py-1 rounded-md border border-gray-200 dark:border-slate-600/40">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium bg-white dark:bg-slate-700/50 hover:bg-gray-100 dark:hover:bg-slate-700 px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-600/50 transition-all duration-200 flex-1 justify-center">
                  <GitHubIcon />{t.projects.github}
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white text-sm font-medium bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all duration-200 flex-1 justify-center">
                    {t.projects.demo}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
