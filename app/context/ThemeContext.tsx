"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const preferred = saved ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    applyTheme(preferred);
    setTheme(preferred);
    setMounted(true);
  }, []);

  function applyTheme(next: Theme) {
    const root = document.documentElement;
    // Briefly disable transitions to avoid flash on initial load
    root.classList.add("no-theme-transition");
    root.classList.toggle("dark", next === "dark");
    // Re-enable after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.remove("no-theme-transition");
      });
    });
  }

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  // Prevent hydration mismatch — render children only after mount
  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
