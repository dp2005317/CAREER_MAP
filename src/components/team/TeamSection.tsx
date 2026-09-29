"use client";

import React from "react";
import { Users } from "lucide-react";
import { HONEST_VISIONS_TEAM } from "@/data/teamData";
import { TeamMemberCard } from "./TeamMemberCard";

export function TeamSection() {
  return (
    <section id="team" className="scroll-mt-24 flex flex-col gap-6 sm:gap-8 pt-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-orange-500/10 border border-blue-500/20 dark:border-orange-500/20 text-blue-600 dark:text-orange-400 text-xs font-bold tracking-wide uppercase mb-2.5">
            <Users className="w-3.5 h-3.5" />
            <span>Honest Visions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Meet the Builders
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1.5 max-w-xl">
            The core engineering team behind CareerMap AI building next-generation spatial job discovery and verified skill intelligence.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white/70 dark:bg-white/5 backdrop-blur-md border border-slate-200/80 dark:border-white/10 px-4 py-2 rounded-full shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>5 Core Members</span>
        </div>
      </div>

      {/* 5 Team Member Cards: Horizontal Snap Carousel on Mobile, 5-column Grid on Desktop */}
      <div className="flex lg:grid lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-3 lg:pb-0 items-stretch custom-scrollbar">
        {HONEST_VISIONS_TEAM.map((member) => (
          <div
            key={member.id}
            className="w-[250px] sm:w-[275px] lg:w-auto shrink-0 snap-center lg:shrink flex"
          >
            <TeamMemberCard member={member} className="h-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
