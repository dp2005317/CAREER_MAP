"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

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

  const applyTheme = useCallback((target: "dark" | "light") => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (target === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, []);

  const getResolvedTheme = useCallback((t: Theme): "dark" | "light" => {
    if (t === "system") {
      if (typeof window !== "undefined" && window.matchMedia) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return "light";
    }
    return t === "dark" ? "dark" : "light";
  }, []);

  useEffect(() => {
    let initialTheme = defaultTheme;
    try {
      const saved = localStorage.getItem(storageKey) as Theme | null;
      if (saved && (saved === "dark" || saved === "light" || saved === "system")) {
        initialTheme = saved;
      }
    } catch (e) {
      // ignore
    }

    setThemeState(initialTheme);
    const target = getResolvedTheme(initialTheme);
    setResolvedTheme(target);
    applyTheme(target);

    // Sync across browser tabs/windows
    const handleStorage = (e: StorageEvent) => {
      if (e.key === storageKey) {
        const val = e.newValue as Theme | null;
        const newTheme = val && (val === "dark" || val === "light" || val === "system") ? val : defaultTheme;
        setThemeState(newTheme);
        const resolved = getResolvedTheme(newTheme);
        setResolvedTheme(resolved);
        applyTheme(resolved);
      }
    };

    window.addEventListener("storage", handleStorage);

    // Sync system theme changes if theme is system
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMedia = () => {
      try {
        const currentSaved = localStorage.getItem(storageKey) as Theme | null;
        if (currentSaved === "system" || (!currentSaved && defaultTheme === "system")) {
          const sysResolved = mediaQuery.matches ? "dark" : "light";
          setResolvedTheme(sysResolved);
          applyTheme(sysResolved);
        }
      } catch (e) {}
    };

    mediaQuery.addEventListener("change", handleMedia);

    return () => {
      window.removeEventListener("storage", handleStorage);
      mediaQuery.removeEventListener("change", handleMedia);
    };
  }, [storageKey, defaultTheme, applyTheme, getResolvedTheme]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch (e) {
        // ignore
      }

      const target = getResolvedTheme(newTheme);
      setResolvedTheme(target);
      applyTheme(target);
    },
    [storageKey, getResolvedTheme, applyTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
