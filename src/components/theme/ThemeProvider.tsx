"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "dark" | "light";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  resolvedTheme: "light",
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "careermap-theme",
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(storageKey) as Theme;
      if (saved && (saved === "dark" || saved === "light" || saved === "system")) {
        setThemeState(saved);
      }
    } catch (e) {
      // ignore
    }
  }, [storageKey]);

  useEffect(() => {
    if (!mounted) return;

    let target: "dark" | "light" = "light";
    if (theme === "system") {
      const systemDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
      target = systemDark ? "dark" : "light";
    } else {
      target = theme === "dark" ? "dark" : "light";
    }

    setResolvedTheme(target);

    const root = document.documentElement;
    if (target === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }

    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      // ignore
    }
  }, [theme, mounted, storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme: setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
