// ── Centralized site configuration ──────────────────────────
export const SITE = {
  name: "Sebastián Marcillo",
  role: "Ingeniería de Software",
  semester: "5° semestre",
  university: "Universidad Cooperativa de Colombia",
  github: "https://github.com/sebastiandavid98",
  linkedin: "https://www.linkedin.com/in/sebastian-david-4a1459390",
  whatsapp: "https://wa.me/573246159170",
  whatsappNumber: "+57 324 615 9170",
  twitter: "https://twitter.com/usuario",
  cv: "/cv.pdf",
} as const;

export const NAV_LINKS = [
  { labelKey: "about",        href: "#about" },
  { labelKey: "experience",   href: "#experience" },
  { labelKey: "projects",     href: "#projects" },
  { labelKey: "certificates", href: "#certificates" },
  { labelKey: "contact",      href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub",      href: SITE.github,    colorClass: "hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-white dark:hover:text-gray-900" },
  { label: "LinkedIn",    href: SITE.linkedin,  colorClass: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white" },
  { label: "WhatsApp",    href: SITE.whatsapp,  colorClass: "hover:bg-[#25D366] hover:border-[#25D366] hover:text-white" },
  { label: "Twitter / X", href: SITE.twitter,   colorClass: "hover:bg-black hover:border-black hover:text-white dark:hover:bg-white dark:hover:text-black" },
] as const;
