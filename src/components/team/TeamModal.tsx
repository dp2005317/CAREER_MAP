"use client";

import React, { useEffect, useState } from "react";
import { X, Users } from "lucide-react";
import { HONEST_VISIONS_TEAM } from "@/data/teamData";
import { TeamMemberCard } from "./TeamMemberCard";

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TeamModal({ isOpen, onClose }: TeamModalProps) {
  const [selectedModule, setSelectedModule] = useState<string>("All");

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modules = ["All", ...Array.from(new Set(HONEST_VISIONS_TEAM.map((m) => m.module)))];

  const filteredMembers = selectedModule === "All"
    ? HONEST_VISIONS_TEAM
    : HONEST_VISIONS_TEAM.filter((m) => m.module === selectedModule);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
      {/* Dark Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-[96vw] 2xl:max-w-[1520px] max-h-[94vh] bg-white/95 dark:bg-[#111115]/95 backdrop-blur-2xl border border-white/80 dark:border-white/10 rounded-[28px] sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-4 sm:px-8 py-3.5 sm:py-4 border-b border-slate-100 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600/10 dark:bg-orange-500/15 text-blue-600 dark:text-orange-400 flex items-center justify-center border border-blue-600/20 dark:border-orange-500/25 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight truncate">
                  Team Honest Visions
                </h2>
                <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-orange-500/15 text-blue-700 dark:text-orange-300 border border-blue-200/60 dark:border-orange-500/25">
                  Core Team
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">
                Spatial career intelligence & platform builders
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="px-4 sm:px-8 py-2 border-b border-slate-100 dark:border-white/5 overflow-x-auto scrollbar-hide flex items-center gap-1.5 shrink-0 bg-white/70 dark:bg-[#111115]/70">
          {modules.map((mod) => (
            <button
              key={mod}
              onClick={() => setSelectedModule(mod)}
              className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedModule === mod
                  ? "bg-blue-600 dark:bg-orange-600 text-white shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 border border-slate-200/60 dark:border-white/5"
              }`}
            >
              {mod}
            </button>
          ))}
        </div>

        {/* Members Cards: Horizontal Swipeable on Mobile, 5-col Grid on Desktop */}
        <div className="p-3.5 sm:p-6 overflow-y-auto overflow-x-auto custom-scrollbar flex-1">
          <div className="flex lg:grid lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-2 lg:pb-0 items-stretch">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="w-[250px] sm:w-[275px] lg:w-auto shrink-0 snap-center lg:shrink flex"
              >
                <TeamMemberCard member={member} className="h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 sm:px-8 py-3 border-t border-slate-100 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-medium">
              <span className="lg:hidden">Swipe cards horizontally • </span>Honest Visions
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200/80 dark:bg-white/10 hover:bg-slate-300/80 dark:hover:bg-white/15 text-gray-800 dark:text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
