"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 p-2 rounded-xl border border-gray-200/50 dark:border-white/10 bg-white/50 dark:bg-black/50" />
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("careermap-theme", nextTheme);
    } catch (e) {
      // ignore
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="neu-icon-btn p-2 rounded-xl text-gray-600 dark:text-orange-400 hover:text-blue-600 dark:hover:text-orange-300 transition-colors relative flex items-center justify-center w-9 h-9 cursor-pointer"
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <Sun className="h-4 w-4 absolute transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-amber-500" />
      <Moon className="h-4 w-4 absolute transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-orange-400" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
