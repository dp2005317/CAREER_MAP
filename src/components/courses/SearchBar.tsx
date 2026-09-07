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
      <Search className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors absolute left-5 top-1/2 -translate-y-1/2" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-13 pr-12 py-4 bg-white/80 backdrop-blur-xl text-sm font-semibold text-gray-800 rounded-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] focus:shadow-[0_8px_32px_rgba(59,130,246,0.15)] focus:border-blue-300/50 outline-none transition-all duration-400 placeholder:text-gray-400 placeholder:font-medium"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all cursor-pointer group/clear"
        >
          <X className="w-3.5 h-3.5 text-gray-400 group-hover/clear:text-gray-600 transition-colors" />
        </button>
      )}
    </div>
  );
}
