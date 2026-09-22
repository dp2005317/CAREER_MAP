"use client";

import React, { useEffect, useState } from "react";
import { X, Users, Sparkles, CheckCircle2, ExternalLink, Code2, Layers, MapPin, GraduationCap } from "lucide-react";
import { HONEST_VISIONS_TEAM, TeamMember } from "@/data/teamData";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M6.94 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4 8.5h2.9v10.5H4V8.5zm4.8 0h2.8v1.44h.04c.39-.74 1.34-1.52 2.77-1.52 2.96 0 3.51 1.95 3.51 4.48V19H15V13.84c0-1.23-.02-2.81-1.71-2.81-1.72 0-1.98 1.34-1.98 2.72V19H8.8V8.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function VerifiedBadge({ className = "w-5 h-5" }: { className?: string }) {
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

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const moduleIconMap: Record<string, React.ReactNode> = {
  "Team Lead & Spatial Engine Architect": <MapPin className="w-4 h-4 text-blue-600 dark:text-orange-400" />,
  "Spatial Job Discovery & Mapbox Engine": <MapPin className="w-4 h-4 text-blue-600 dark:text-orange-400" />,
  "AI Intelligence & Daily Tasks": <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
  "Core Design System & Responsive Shell": <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
  "Testing, Supervision & Presentation": <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
  "Team Operations & Registration": <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
  "Presentation & Product Showcase": <Sparkles className="w-4 h-4 text-rose-600 dark:text-rose-400" />
};

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dark Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-[96vw] 2xl:max-w-[1560px] max-h-[92vh] bg-white dark:bg-[#111115] border border-slate-200/90 dark:border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-slate-100 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600/10 dark:bg-orange-500/15 text-blue-600 dark:text-orange-400 flex items-center justify-center border border-blue-600/20 dark:border-orange-500/25 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Team Honest Visions
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-orange-500/15 text-blue-700 dark:text-orange-300 border border-blue-200/60 dark:border-orange-500/25">
                  CareerMap Contributors
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Feature breakdown and module ownership for the CareerMap AI platform.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="px-5 sm:px-8 py-2.5 sm:py-3 border-b border-slate-100 dark:border-white/5 overflow-x-auto custom-scrollbar flex items-center gap-2 shrink-0 bg-white dark:bg-[#111115]">
          {modules.map((mod) => (
            <button
              key={mod}
              onClick={() => setSelectedModule(mod)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedModule === mod
                  ? "bg-blue-600 dark:bg-orange-600 text-white shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 border border-slate-200/60 dark:border-white/5"
              }`}
            >
              {mod}
            </button>
          ))}
        </div>

        {/* Members Content List (All 5 Members in a Row) */}
        <div className="p-4 sm:p-6 lg:p-6 xl:p-8 overflow-y-auto overflow-x-auto custom-scrollbar">
          <div
            className={
              filteredMembers.length >= 5
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-3 xl:gap-4 items-stretch justify-center"
                : "flex flex-wrap justify-center gap-4 sm:gap-6"
            }
          >
            {filteredMembers.map((member) => {
              const icon = moduleIconMap[member.module] || <Layers className="w-4 h-4 text-blue-600 dark:text-orange-400" />;
              return (
                <div
                  key={member.id}
                  className={`rounded-[24px] sm:rounded-[28px] p-3.5 sm:p-4 bg-white dark:bg-[#141418] border border-slate-200/90 dark:border-white/10 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-black/40 hover:shadow-xl hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 group ${
                    filteredMembers.length >= 5
                      ? "w-full"
                      : "w-full sm:w-[calc(50%-16px)] lg:w-[320px] max-w-[360px]"
                  }`}
                >
                  <div>
                    {/* Portrait Photo Container */}
                    <div className="relative w-full aspect-[4/4.5] rounded-[20px] overflow-hidden bg-slate-100 dark:bg-zinc-800/80 mb-3 shadow-xs">
                      {member.avatar ? (
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
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

                      {/* Floating Badge in Top Corner */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-start pointer-events-none">
                        {member.id === "diganta" ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-black/70 backdrop-blur-md text-amber-700 dark:text-amber-300 border border-amber-300/40 text-[10px] font-bold shadow-xs">
                            ⭐ Team Leader
                          </span>
                        ) : member.id === "rupam" ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-black/70 backdrop-blur-md text-blue-700 dark:text-blue-300 border border-blue-300/40 text-[10px] font-bold shadow-xs">
                            🎨 Frontend Lead
                          </span>
                        ) : member.id === "sumon" ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-black/70 backdrop-blur-md text-emerald-700 dark:text-emerald-300 border border-emerald-300/40 text-[10px] font-bold shadow-xs">
                            🛡️ QA Supervisor
                          </span>
                        ) : member.id === "om" ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-black/70 backdrop-blur-md text-purple-700 dark:text-purple-300 border border-purple-300/40 text-[10px] font-bold shadow-xs">
                            📋 Team Manager
                          </span>
                        ) : member.id === "payel" ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-black/70 backdrop-blur-md text-rose-700 dark:text-rose-300 border border-rose-300/40 text-[10px] font-bold shadow-xs">
                            🎤 Presentation
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 dark:bg-black/70 backdrop-blur-md text-gray-700 dark:text-gray-200 border border-white/20 text-[10px] font-semibold shadow-xs">
                            {icon}
                            <span className="truncate max-w-[95px]">{member.module}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Member Details */}
                    <div className="px-0.5">
                      {/* Name and Green Verified Badge */}
                      <div className="flex items-center gap-1.5 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white leading-tight truncate" title={member.name}>
                          {member.name}
                        </h3>
                        <VerifiedBadge className="w-4 h-4 shrink-0" />
                      </div>

                      {/* Role Tagline */}
                      <p className="mt-1.5 text-xs text-gray-600 dark:text-gray-300 font-normal leading-snug line-clamp-2 min-h-[32px]" title={member.tagline || member.role}>
                        {member.tagline || member.role}
                      </p>

                      {/* Location / Education info */}
                      {(member.location || member.education) && (
                        <div className="mt-2 flex flex-col gap-1 text-[11px] text-gray-400 dark:text-gray-500">
                          {member.location && (
                            <span className="flex items-center gap-1 truncate" title={member.location}>
                              <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                              <span className="truncate">{member.location}</span>
                            </span>
                          )}
                          {member.education && (
                            <span className="flex items-center gap-1 truncate" title={member.education}>
                              <GraduationCap className="w-3 h-3 text-blue-500 shrink-0" />
                              <span className="truncate">{member.education}</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Bar: Stats on Left, Pill Buttons on Right */}
                  <div className="mt-3.5 pt-2.5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-1 px-0.5">
                    {/* Stats */}
                    <div className="flex items-center gap-2.5 text-[11px] font-semibold text-gray-700 dark:text-gray-300">
                      <span className="flex items-center gap-1" title="Network Connections">
                        <Users className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
                        <span>{member.stats?.connections || "100"}</span>
                      </span>
                      <span className="flex items-center gap-1" title="Projects & Repos">
                        <Layers className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500 shrink-0" />
                        <span>{member.stats?.projects || "20"}</span>
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/15 text-gray-700 dark:text-gray-200 border border-slate-200/80 dark:border-white/10 transition-all active:scale-95 shadow-2xs cursor-pointer shrink-0"
                          title="Open GitHub Profile"
                          aria-label="Open GitHub Profile"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.linkedin ? (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-semibold text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
                          title="Open LinkedIn Profile"
                          aria-label="Open LinkedIn Profile"
                        >
                          <LinkedinIcon className="w-3 h-3 rounded-xs shrink-0" />
                          <span>Follow +</span>
                        </a>
                      ) : (
                        <button
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-semibold text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-slate-200/90 dark:border-white/10 shadow-xs hover:shadow-sm transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
                        >
                          <span>Follow +</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-5 sm:px-8 py-3.5 border-t border-slate-100 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Honest Visions • All 5 Core Team Members</span>
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
