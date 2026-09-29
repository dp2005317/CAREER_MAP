"use client";

import React, { useState } from "react";
import { TeamModal } from "./TeamModal";
import { HONEST_VISIONS_TEAM } from "@/data/teamData";

export function GlobalTeamWatermark() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Team Watermark - Hidden on phones/mobile as requested */}
      <div className="hidden md:block fixed bottom-3.5 right-4 z-40 pointer-events-auto select-none print:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-slate-200/90 dark:border-white/10 shadow-sm hover:shadow-md text-[11px] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-105 cursor-pointer group"
          title="Click to view Honest Visions team & contributions"
          aria-label="View Honest Visions team and contributions"
        >
          {/* All 5 team members in a row avatar stack */}
          <div className="flex -space-x-1.5 items-center">
            {HONEST_VISIONS_TEAM.map((m) =>
              m.avatar ? (
                <img
                  key={m.id}
                  src={m.avatar}
                  alt={m.name}
                  className="w-[18px] h-[18px] rounded-full object-cover ring-1.5 ring-white dark:ring-zinc-900 shadow-2xs"
                  title={m.name}
                />
              ) : (
                <span
                  key={m.id}
                  className="w-[18px] h-[18px] rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-orange-600 dark:to-amber-600 text-[8px] font-bold text-white flex items-center justify-center ring-1.5 ring-white dark:ring-zinc-900 shadow-2xs"
                  title={m.name}
                >
                  {m.initials}
                </span>
              )
            )}
          </div>
          <span>
            Made by <strong className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors">Honest Visions</strong>
          </span>
        </button>
      </div>

      <TeamModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
