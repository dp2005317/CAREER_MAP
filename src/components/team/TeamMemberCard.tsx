"use client";

import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { TeamMember } from "@/data/teamData";

export function VerifiedBadge({ className = "w-4.5 h-4.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.6 2.4a2.4 2.4 0 0 1 4.8 0 2.4 2.4 0 0 0 2.2 1.5 2.4 2.4 0 0 1 3.4 3.4 2.4 2.4 0 0 0 1.5 2.2 2.4 2.4 0 0 1 0 4.8 2.4 2.4 0 0 0-1.5 2.2 2.4 2.4 0 0 1-3.4 3.4 2.4 2.4 0 0 0-2.2 1.5 2.4 2.4 0 0 1-4.8 0 2.4 2.4 0 0 0-2.2-1.5 2.4 2.4 0 0 1-3.4-3.4 2.4 2.4 0 0 0-1.5-2.2 2.4 2.4 0 0 1 0-4.8 2.4 2.4 0 0 0 1.5-2.2 2.4 2.4 0 0 1 3.4-3.4 2.4 2.4 0 0 0 2.2-1.5z"
        fill="#10B981"
      />
      <path
        d="M8.5 12l2.5 2.5 5-5"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Minimal monochrome line chart/portfolio icon matching reference card
function ProjectStatIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7 16l4-5 3 3 4-5" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M5.07 18.5h2.79v-8.37H5.07v8.37Z" />
    </svg>
  );
}

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamMemberCard({ member, className = "" }: TeamMemberCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative flex flex-col justify-between w-full rounded-[28px] sm:rounded-[32px] p-3 sm:p-3.5 bg-white/80 dark:bg-[#16161b]/80 backdrop-blur-[32px] backdrop-saturate-[140%] border border-white/90 dark:border-white/12 shadow-[0_16px_40px_-15px_rgba(0,0,0,0.07),0_1px_3px_rgba(0,0,0,0.03),inset_0_1px_1.5px_rgba(255,255,255,0.95)] dark:shadow-[0_16px_40px_-15px_rgba(0,0,0,0.7),inset_0_1px_1.5px_rgba(255,255,255,0.1)] hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,1)] dark:hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.75),inset_0_1px_2px_rgba(255,255,255,0.15)] transition-shadow duration-300 ${className}`}
    >
      <div>
        {/* Dominant Portrait Photo Container */}
        <div className="relative w-full aspect-[4/4.8] rounded-[20px] sm:rounded-[22px] overflow-hidden bg-slate-100/90 dark:bg-zinc-800/60 ring-1 ring-black/[0.04] dark:ring-white/[0.08] shadow-2xs">
          {member.avatar ? (
            <img
              src={member.avatar}
              alt={member.name}
              className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] ${
                member.id === "rupam" ? "object-center" : "object-top"
              }`}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-zinc-800 dark:to-zinc-900 text-gray-500">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-orange-600 dark:to-amber-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                {member.initials}
              </div>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="px-1.5 pt-3 pb-0.5">
          {/* Member Name + Scalloped Green Verification Badge */}
          <div className="flex items-center gap-1.5 min-w-0">
            <h3
              className="text-[17px] sm:text-[19px] font-bold tracking-tight text-gray-950 dark:text-white leading-tight truncate"
              title={member.name}
            >
              {member.name}
            </h3>
            <VerifiedBadge className="w-4.5 h-4.5 shrink-0" />
          </div>

          {/* Role / Tagline Description */}
          <p
            className="mt-1 text-[12px] sm:text-[12.5px] text-gray-600 dark:text-gray-300 font-normal leading-snug line-clamp-2 min-h-[32px]"
            title={member.tagline || member.role}
          >
            {member.tagline || member.role}
          </p>
        </div>
      </div>

      {/* Social / Stats Row */}
      <div className="mt-3 pt-2.5 flex items-center justify-between px-1 border-t border-slate-100/70 dark:border-white/5">
        {/* Minimal Monochrome Stats */}
        <div className="flex items-center gap-3 text-[11.5px] sm:text-[12px] font-semibold text-gray-700 dark:text-gray-200">
          <div className="flex items-center gap-1" title="Connections">
            <User className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 stroke-[1.8] shrink-0" />
            <span>{member.stats?.connections || "100"}</span>
          </div>
          <div className="flex items-center gap-1" title="Projects">
            <ProjectStatIcon className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
            <span>{member.stats?.projects || "20"}</span>
          </div>
        </div>

        {/* Right Actions: GitHub + LinkedIn Follow + Button */}
        <div className="flex items-center gap-1.5 shrink-0">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-full bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-gray-700 dark:text-gray-200 border border-slate-200/60 dark:border-white/10 shadow-2xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title={`View ${member.name} on GitHub`}
              aria-label={`View ${member.name} on GitHub`}
            >
              <GithubIcon className="w-3 h-3" />
            </a>
          )}

          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] sm:text-[12px] font-semibold text-gray-900 dark:text-white bg-white/95 dark:bg-white/15 hover:bg-white dark:hover:bg-white/25 backdrop-blur-md border border-slate-200/80 dark:border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer whitespace-nowrap shrink-0"
              title={`Connect with ${member.name} on LinkedIn`}
              aria-label={`Follow ${member.name} on LinkedIn`}
            >
              <LinkedinIcon className="w-3 h-3 text-[#0A66C2] dark:text-[#388bfd]" />
              <span>Follow +</span>
            </a>
          ) : (
            <button
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[11px] sm:text-[12px] font-semibold text-gray-900 dark:text-white bg-white/95 dark:bg-white/15 border border-slate-200/80 dark:border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:scale-[1.03] active:scale-[0.97] transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Follow +</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
