"use client";

import React from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search courses, skills, companies..." }: SearchBarProps) {
  return (
    <div className="relative group">
      <Search className="w-5 h-5 text-gray-400 dark:text-zinc-500 group-focus-within:text-blue-500 dark:group-focus-within:text-orange-500 transition-colors absolute left-5 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-3 bg-white/70 dark:bg-white/5 backdrop-blur-xl text-xs sm:text-sm font-medium text-gray-800 dark:text-zinc-100 rounded-full border border-white/80 dark:border-white/10 shadow-xs focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-zinc-500"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer group/clear"
        >
          <X className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-400 group-hover/clear:text-gray-600 dark:group-hover/clear:text-zinc-200 transition-colors" />
        </button>
      )}
    </div>
  );
}
