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
        className="w-full pl-13 pr-12 py-4 bg-white/80 dark:bg-[#0c0c0e]/90 backdrop-blur-xl text-sm font-semibold text-gray-800 dark:text-zinc-100 rounded-2xl border border-white/60 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] focus:shadow-[0_8px_32px_rgba(59,130,246,0.15)] dark:focus:shadow-[0_8px_32px_rgba(234,88,12,0.15)] focus:border-blue-300/50 dark:focus:border-orange-500/50 outline-none transition-all duration-400 placeholder:text-gray-400 dark:placeholder:text-zinc-500 placeholder:font-medium"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-xl bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 flex items-center justify-center transition-all cursor-pointer group/clear"
        >
          <X className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-400 group-hover/clear:text-gray-600 dark:group-hover/clear:text-zinc-200 transition-colors" />
        </button>
      )}
    </div>
  );
}
