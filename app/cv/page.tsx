import CV from "../components/CV";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — Sebastián David Marcillo",
  description: "Hoja de vida de Sebastián David Marcillo, Estudiante de Ingeniería de Software.",
};

export default function CVPage() {
  return <CV />;
}
