import React from "react";
import {
  Document, Page, Text, View, StyleSheet, Font,
} from "@react-pdf/renderer";

// ── Styles ───────────────────────────────────────────────────
const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
    paddingBottom: 0,
  },

  // Header
  header: {
    backgroundColor: "#15803d",
    padding: "20 28 16 28",
  },
  headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  name: { fontSize: 22, fontFamily: "Helvetica-Bold", color: "#ffffff", marginBottom: 3 },
  title: { fontSize: 9, color: "#bbf7d0", letterSpacing: 1, marginBottom: 8, fontFamily: "Helvetica-Bold" },
  summary: { fontSize: 8.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.5, maxWidth: 320 },
  contactCol: { alignItems: "flex-end" },
  contactItem: { fontSize: 8, color: "rgba(255,255,255,0.85)", marginBottom: 3 },

  // Body
  body: { flexDirection: "row", flex: 1 },

  // Left column
  left: { width: "36%", backgroundColor: "#f0fdf4", padding: "16 14", borderRight: "1 solid #bbf7d0" },
  right: { flex: 1, padding: "16 20" },

  // Section title
  sectionTitle: {
    fontSize: 8, fontFamily: "Helvetica-Bold", color: "#15803d",
    textTransform: "uppercase", letterSpacing: 1.2,
    borderBottom: "1.5 solid #16a34a", paddingBottom: 4, marginBottom: 8, marginTop: 0,
  },
  section: { marginBottom: 14 },

  // Skill bar
  skillRow: { marginBottom: 6 },
  skillLabel: { flexDirection: "row", justifyContent: "space-between", marginBottom: 2 },
  skillName: { fontSize: 8, fontFamily: "Helvetica-Bold", color: "#1a3d22" },
  skillPct: { fontSize: 7.5, color: "#4a7c59" },
  barBg: { height: 4, backgroundColor: "#dcfce7", borderRadius: 99 },
  barFill: { height: 4, backgroundColor: "#16a34a", borderRadius: 99 },

  // Tag pill
  tagRow: { flexDirection: "row", flexWrap: "wrap", gap: 4 },
  tag: { fontSize: 7.5, color: "#15803d", backgroundColor: "#dcfce7", padding: "2 6", borderRadius: 99, border: "1 solid #bbf7d0" },

  // Project card
  projectCard: { backgroundColor: "#f0fdf4", border: "1 solid #bbf7d0", borderRadius: 6, padding: "8 10", marginBottom: 7 },
  projectHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 3 },
  projectName: { fontSize: 9, fontFamily: "Helvetica-Bold", color: "#15803d" },
  projectTech: { fontSize: 7, color: "#6b4f3b", backgroundColor: "#fef3c7", padding: "1 5", borderRadius: 99 },
  projectDesc: { fontSize: 8, color: "#374151", lineHeight: 1.4 },

  // Timeline
  timelineWrap: { paddingLeft: 14, position: "relative" },
  timelineItem: { marginBottom: 10, position: "relative" },
  timelineDot: {
    position: "absolute", left: -17, top: 3,
    width: 8, height: 8, borderRadius: 99,
    backgroundColor: "#16a34a", border: "2 solid #ffffff",
  },
  timelineLine: {
    position: "absolute", left: -14, top: 0, bottom: 0,
    width: 1.5, backgroundColor: "#bbf7d0",
  },
  timelineHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  timelineTitle: { fontSize: 9, fontFamily: "Helvetica-Bold", color: "#1a3d22", marginBottom: 1 },
  timelinePlace: { fontSize: 8, color: "#15803d", marginBottom: 2 },
  timelineDesc: { fontSize: 8, color: "#4b5563", lineHeight: 1.4 },
  yearBadge: { fontSize: 7.5, fontFamily: "Helvetica-Bold", color: "#6b4f3b", backgroundColor: "#fef3c7", padding: "1 6", borderRadius: 99 },

  // Footer
  footer: {
    backgroundColor: "#15803d", padding: "7 28",
    flexDirection: "row", justifyContent: "space-between",
  },
  footerText: { fontSize: 7.5, color: "rgba(255,255,255,0.7)" },
});

// ── Data ─────────────────────────────────────────────────────
const skills = [
  { name: "JavaScript / TypeScript", level: 82 },
  { name: "React / Next.js", level: 85 },
  { name: "Node.js / Express", level: 75 },
  { name: "Python / Django", level: 70 },
  { name: "Java", level: 70 },
  { name: "MySQL / MongoDB", level: 72 },
  { name: "Git / GitHub", level: 88 },
  { name: "Tailwind CSS / CSS", level: 90 },
  { name: "Figma", level: 65 },
];

const tools = ["VS Code", "Postman", "Figma", "XAMPP", "Vercel", "Supabase", "Linux"];

const projects = [
  { name: "Backend Energía Solar", tech: "Node.js · Express · MongoDB", desc: "API REST para gestión de paneles solares y reportes en tiempo real." },
  { name: "Frontend Energía Solar", tech: "React · Chart.js · CSS", desc: "Dashboard interactivo para visualización de datos de energía solar." },
  { name: "Mercado Libre Clone", tech: "React · Tailwind · API", desc: "Clon funcional con búsqueda, filtros y carrito de compras." },
  { name: "Sistema Diseño Software", tech: "Java · UML · Patrones", desc: "Aplicación de patrones de diseño en soluciones empresariales." },
];

const timeline = [
  { year: "2022", title: "Bachillerato", place: "Institución Educativa", desc: "Educación media técnica con énfasis en tecnología." },
  { year: "2023", title: "Inicio Ing. de Software", place: "U. Cooperativa de Colombia", desc: "Python, Django, bases de datos, fundamentos de programación." },
  { year: "2024", title: "Desarrollo Intermedio", place: "U. Cooperativa de Colombia", desc: "Java, TypeScript, CSS, UML, Git y GitHub." },
  { year: "2025", title: "Experiencia Avanzada", place: "U. Cooperativa de Colombia", desc: "2° y 3° Seminario Nacional de Ing. de Software." },
  { year: "2026", title: "Full Stack Actual", place: "U. Cooperativa de Colombia", desc: "Next.js, Figma, pruebas unitarias, despliegue en Vercel." },
];

// ── Document ─────────────────────────────────────────────────
export function CVDocument() {
  return (
    <Document title="CV — Sebastián David Marcillo" author="Sebastián David Marcillo">
      <Page size="A4" style={s.page}>

        {/* Header */}
        <View style={s.header}>
          <View style={s.headerRow}>
            <View>
              <Text style={s.name}>Sebastián David Marcillo</Text>
              <Text style={s.title}>ESTUDIANTE DE INGENIERÍA DE SOFTWARE</Text>
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

        {/* Body */}
        <View style={s.body}>

          {/* Left */}
          <View style={s.left}>

            {/* Skills */}
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

            {/* Tools */}
            <View style={s.section}>
              <Text style={s.sectionTitle}>Herramientas</Text>
              <View style={s.tagRow}>
                {tools.map((t) => <Text key={t} style={s.tag}>{t}</Text>)}
              </View>
            </View>

            {/* Languages */}
            <View style={s.section}>
              <Text style={s.sectionTitle}>Idiomas</Text>
              {[{ l: "Español", n: "Nativo" }, { l: "Inglés", n: "Básico-Intermedio" }].map((x) => (
                <View key={x.l} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5 }}>
                  <Text style={{ fontSize: 8.5, fontFamily: "Helvetica-Bold", color: "#1a3d22" }}>{x.l}</Text>
                  <Text style={{ fontSize: 8, color: "#4a7c59" }}>{x.n}</Text>
                </View>
              ))}
            </View>

            {/* Certs */}
            <View style={s.section}>
              <Text style={s.sectionTitle}>Certificados</Text>
              {[
                { t: "2° Seminario Nacional de Ing. de Software", d: "Mayo 2025 · 8h" },
                { t: "3° Seminario Nacional de Ing. de Software", d: "Oct. 2025 · 8h" },
              ].map((c) => (
                <View key={c.t} style={{ marginBottom: 8, paddingLeft: 6, borderLeft: "2 solid #16a34a" }}>
                  <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: "#1a3d22", marginBottom: 1 }}>{c.t}</Text>
                  <Text style={{ fontSize: 7.5, color: "#6b4f3b" }}>U. Cooperativa de Colombia</Text>
                  <Text style={{ fontSize: 7.5, color: "#4a7c59" }}>{c.d}</Text>
                </View>
              ))}
            </View>

          </View>

          {/* Right */}
          <View style={s.right}>

            {/* Projects */}
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

            {/* Timeline */}
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
