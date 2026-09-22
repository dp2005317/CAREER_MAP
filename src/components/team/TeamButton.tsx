"use client";

import React, { useState } from "react";
import { Users } from "lucide-react";
import { TeamModal } from "./TeamModal";

interface TeamButtonProps {
  className?: string;
  variant?: "pill" | "icon";
}

export function TeamButton({ className = "", variant = "pill" }: TeamButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-orange-400 bg-slate-100/90 dark:bg-white/10 hover:bg-slate-200/80 dark:hover:bg-white/15 border border-slate-200/70 dark:border-white/10 shadow-2xs hover:shadow-xs transition-all cursor-pointer ${className}`}
        title="View Team Honest Visions & Contributions"
        aria-label="View Team Honest Visions & Contributions"
      >
        <Users className="w-3.5 h-3.5 text-blue-600 dark:text-orange-400" />
        <span>Team</span>
      </button>

      <TeamModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
