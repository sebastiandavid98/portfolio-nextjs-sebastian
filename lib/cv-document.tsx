import React from "react";
import {
  Document, Page, Text, View, StyleSheet,
} from "@react-pdf/renderer";

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 8.5,
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
    paddingBottom: 0,
  },

  // ── Header ──────────────────────────────────────────────────
  header: {
    background: "#15803d",
    backgroundColor: "#15803d",
    padding: "16 24 14 24",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },
  headerLeft: { flex: 1 },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: "#ffffff",
    marginBottom: 2,
    letterSpacing: -0.3,
  },
  titleBadge: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: "#bbf7d0",
    letterSpacing: 1.2,
    marginBottom: 6,
    textTransform: "uppercase",
  },
  summary: {
    fontSize: 8,
    color: "rgba(255,255,255,0.82)",
    lineHeight: 1.55,
    maxWidth: 310,
  },
  contactCol: {
    alignItems: "flex-end",
    gap: 2,
    paddingTop: 2,
  },
  contactItem: {
    fontSize: 7.5,
    color: "rgba(255,255,255,0.82)",
    marginBottom: 2.5,
  },

  // ── Divider ─────────────────────────────────────────────────
  divider: {
    height: 3,
    backgroundColor: "#6b4f3b",
  },

  // ── Body ────────────────────────────────────────────────────
  body: { flexDirection: "row", flex: 1 },

  left: {
    width: "35%",
    backgroundColor: "#f0fdf4",
    padding: "14 12 14 14",
    borderRight: "1 solid #bbf7d0",
  },
  right: {
    flex: 1,
    padding: "14 18 14 16",
  },

  // ── Section title ────────────────────────────────────────────
  sectionTitle: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Bold",
    color: "#15803d",
    textTransform: "uppercase",
    letterSpacing: 1.3,
    borderBottom: "1.5 solid #16a34a",
    paddingBottom: 3,
    marginBottom: 7,
  },
  section: { marginBottom: 12 },

  // ── Skill bar ────────────────────────────────────────────────
  skillRow: { marginBottom: 5 },
  skillLabel: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
  skillName: { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: "#1a3d22" },
  skillPct: { fontSize: 7, color: "#4a7c59" },
  barBg: { height: 3.5, backgroundColor: "#dcfce7", borderRadius: 99 },
  barFill: { height: 3.5, backgroundColor: "#16a34a", borderRadius: 99 },

  // ── Tag ──────────────────────────────────────────────────────
  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 3 },
  tag: {
    fontSize: 7,
    color: "#15803d",
    backgroundColor: "#dcfce7",
    padding: "1.5 5",
    borderRadius: 99,
    border: "1 solid #bbf7d0",
  },

  // ── Project card ─────────────────────────────────────────────
  projectCard: {
    backgroundColor: "#f0fdf4",
    border: "1 solid #bbf7d0",
    borderRadius: 5,
    padding: "7 9",
    marginBottom: 6,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 2,
  },
  projectName: { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: "#15803d" },
  projectTech: {
    fontSize: 6.5,
    color: "#6b4f3b",
    backgroundColor: "#fef3c7",
    padding: "1.5 5",
    borderRadius: 99,
  },
  projectDesc: { fontSize: 7.5, color: "#374151", lineHeight: 1.45 },

  // ── Timeline ─────────────────────────────────────────────────
  timelineWrap: { paddingLeft: 14 },
  timelineItem: { marginBottom: 9, position: "relative" },
  timelineDot: {
    position: "absolute",
    left: -16,
    top: 3,
    width: 7,
    height: 7,
    borderRadius: 99,
    backgroundColor: "#16a34a",
    border: "1.5 solid #ffffff",
  },
  timelineLine: {
    position: "absolute",
    left: -13,
    top: 0,
    bottom: 0,
    width: 1.5,
    backgroundColor: "#bbf7d0",
  },
  timelineHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  timelineTitle: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: "#1a3d22",
    marginBottom: 1,
  },
  timelinePlace: { fontSize: 7.5, color: "#15803d", marginBottom: 1.5 },
  timelineDesc: { fontSize: 7.5, color: "#4b5563", lineHeight: 1.4 },
  yearBadge: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: "#6b4f3b",
    backgroundColor: "#fef3c7",
    padding: "1.5 5",
    borderRadius: 99,
    marginLeft: 6,
  },

  // ── Footer ───────────────────────────────────────────────────
  footer: {
    backgroundColor: "#15803d",
    padding: "6 24",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerText: { fontSize: 7, color: "rgba(255,255,255,0.65)" },
});

// ── Data ─────────────────────────────────────────────────────
const skills = [
  { name: "JavaScript / TypeScript", level: 82 },
  { name: "React / Next.js",         level: 85 },
  { name: "Node.js / Express",       level: 75 },
  { name: "Python / Django",         level: 70 },
  { name: "Java",                    level: 70 },
  { name: "MySQL / MongoDB",         level: 72 },
  { name: "Git / GitHub",            level: 88 },
  { name: "Tailwind CSS",            level: 90 },
  { name: "Figma",                   level: 65 },
];

const tools = ["VS Code", "Postman", "Figma", "XAMPP", "Vercel", "Supabase", "Linux", "Resend"];

const projects = [
  { name: "Backend Energía Solar",   tech: "Node.js · Express · MongoDB", desc: "API REST para gestión de paneles solares y reportes en tiempo real." },
  { name: "Frontend Energía Solar",  tech: "React · Chart.js · CSS",      desc: "Dashboard interactivo para visualización de datos de energía solar." },
  { name: "Mercado Libre Clone",     tech: "React · Tailwind · API",       desc: "Clon funcional con búsqueda, filtros y carrito de compras." },
  { name: "Sistema Diseño Software", tech: "Java · UML · Patrones",        desc: "Aplicación de patrones de diseño en soluciones empresariales." },
];

const timeline = [
  { year: "2022",      title: "Bachillerato",           place: "Institución Educativa",         desc: "Educación media técnica con énfasis en tecnología." },
  { year: "2023",      title: "Inicio Ing. de Software",place: "U. Cooperativa de Colombia",    desc: "Python, Django, bases de datos, fundamentos de programación." },
  { year: "2024",      title: "Desarrollo Intermedio",  place: "U. Cooperativa de Colombia",    desc: "Java, TypeScript, CSS, UML, Git y GitHub." },
  { year: "2025",      title: "Experiencia Avanzada",   place: "U. Cooperativa de Colombia",    desc: "2° y 3° Seminario Nacional de Ing. de Software." },
  { year: "2025–2026", title: "Full Stack",             place: "Proyectos personales",          desc: "Next.js, Figma, pruebas unitarias, despliegue en Vercel." },
];

// ── Document ─────────────────────────────────────────────────
export function CVDocument() {
  return (
    <Document
      title="CV — Sebastián David Marcillo"
      author="Sebastián David Marcillo"
      subject="Hoja de vida"
    >
      <Page size="A4" style={s.page}>

        {/* Header */}
        <View style={s.header}>
          <View style={s.headerRow}>
            <View style={s.headerLeft}>
              <Text style={s.name}>Sebastián David Marcillo</Text>
              <Text style={s.titleBadge}>Estudiante de Ingeniería de Software</Text>
              <Text style={s.summary}>
                Desarrollador web full-stack apasionado por construir productos digitales con código limpio,
                buenas prácticas y diseño centrado en el usuario. 5° semestre en la Universidad Cooperativa de Colombia.
              </Text>
            </View>
            <View style={s.contactCol}>
              <Text style={s.contactItem}>barbasel98@gmail.com</Text>
              <Text style={s.contactItem}>+57 324 615 9170</Text>
              <Text style={s.contactItem}>linkedin.com/in/sebastian-david-4a1459390</Text>
              <Text style={s.contactItem}>github.com/sebastiandavid98</Text>
              <Text style={s.contactItem}>Pasto, Colombia</Text>
            </View>
          </View>
        </View>

        {/* Café accent divider */}
        <View style={s.divider} />

        {/* Body */}
        <View style={s.body}>

          {/* Left column */}
          <View style={s.left}>

            <View style={s.section}>
              <Text style={s.sectionTitle}>Habilidades</Text>
              {skills.map((sk) => (
                <View key={sk.name} style={s.skillRow}>
                  <View style={s.skillLabel}>
                    <Text style={s.skillName}>{sk.name}</Text>
                    <Text style={s.skillPct}>{sk.level}%</Text>
                  </View>
                  <View style={s.barBg}>
                    <View style={[s.barFill, { width: `${sk.level}%` as unknown as number }]} />
                  </View>
                </View>
              ))}
            </View>

            <View style={s.section}>
              <Text style={s.sectionTitle}>Herramientas</Text>
              <View style={s.tagRow}>
                {tools.map((t) => <Text key={t} style={s.tag}>{t}</Text>)}
              </View>
            </View>

            <View style={s.section}>
              <Text style={s.sectionTitle}>Idiomas</Text>
              {[{ l: "Español", n: "Nativo" }, { l: "Inglés", n: "Básico-Intermedio" }].map((x) => (
                <View key={x.l} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 4 }}>
                  <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: "#1a3d22" }}>{x.l}</Text>
                  <Text style={{ fontSize: 7.5, color: "#4a7c59" }}>{x.n}</Text>
                </View>
              ))}
            </View>

            <View style={s.section}>
              <Text style={s.sectionTitle}>Certificados</Text>
              {[
                { t: "2° Seminario Nacional de Ing. de Software", d: "Mayo 2025 · 8h" },
                { t: "3° Seminario Nacional de Ing. de Software", d: "Oct. 2025 · 8h" },
              ].map((c) => (
                <View key={c.t} style={{ marginBottom: 7, paddingLeft: 5, borderLeft: "2 solid #16a34a" }}>
                  <Text style={{ fontSize: 7.5, fontFamily: "Helvetica-Bold", color: "#1a3d22", marginBottom: 1 }}>{c.t}</Text>
                  <Text style={{ fontSize: 7, color: "#6b4f3b" }}>U. Cooperativa de Colombia</Text>
                  <Text style={{ fontSize: 7, color: "#4a7c59" }}>{c.d}</Text>
                </View>
              ))}
            </View>

          </View>

          {/* Right column */}
          <View style={s.right}>

            <View style={s.section}>
              <Text style={s.sectionTitle}>Proyectos Destacados</Text>
              {projects.map((p) => (
                <View key={p.name} style={s.projectCard}>
                  <View style={s.projectHeader}>
                    <Text style={s.projectName}>{p.name}</Text>
                    <Text style={s.projectTech}>{p.tech}</Text>
                  </View>
                  <Text style={s.projectDesc}>{p.desc}</Text>
                </View>
              ))}
            </View>

            <View style={s.section}>
              <Text style={s.sectionTitle}>Trayectoria Académica</Text>
              <View style={s.timelineWrap}>
                <View style={s.timelineLine} />
                {timeline.map((item, i) => (
                  <View key={i} style={s.timelineItem}>
                    <View style={s.timelineDot} />
                    <View style={s.timelineHeader}>
                      <View style={{ flex: 1 }}>
                        <Text style={s.timelineTitle}>{item.title}</Text>
                        <Text style={s.timelinePlace}>{item.place}</Text>
                        <Text style={s.timelineDesc}>{item.desc}</Text>
                      </View>
                      <Text style={s.yearBadge}>{item.year}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>

          </View>
        </View>

        {/* Footer */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>Sebastián David Marcillo · CV 2025</Text>
          <Text style={s.footerText}>github.com/sebastiandavid98</Text>
        </View>

      </Page>
    </Document>
  );
}
