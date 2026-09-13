"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  User, 
  FileText, 
  Sparkles, 
  Award, 
  LogOut, 
  Briefcase, 
  MapPin, 
  UploadCloud,
  ChevronRight,
  ExternalLink,
  Settings,
  Globe,
  FolderDot
} from "lucide-react";
import { useAuth, UserCertificate } from "@/database/authContext";

interface UserProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeUpload: () => void;
  onViewCertificate?: (cert: UserCertificate) => void;
}

export function UserProfileDrawer({
  isOpen,
  onClose,
  onOpenResumeUpload,
  onViewCertificate
}: UserProfileDrawerProps) {
  const { user, profile, certificates, logout } = useAuth();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-xs font-sans">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          className="relative w-full max-w-md bg-[#EEF2F6] dark:bg-black h-full shadow-2xl border-l border-slate-200 dark:border-white/10 flex flex-col z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 bg-white dark:bg-[#0c0c0e] border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {profile?.photoURL || user?.photoURL ? (
                <img
                  src={profile?.photoURL || user?.photoURL!}
                  alt="Avatar"
                  className="w-12 h-12 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm"
                />
              ) : (
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center font-black text-lg shadow-md shadow-orange-500/30">
                  {profile?.displayName ? profile.displayName.slice(0, 2).toUpperCase() : "CM"}
                </div>
              )}
              <div>
                <h3 className="font-extrabold text-gray-900 dark:text-white text-base">
                  {profile?.displayName || user?.displayName || "Explorer"}
                </h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium truncate max-w-[200px]">
                  {profile?.email || user?.email || "Guest Account"}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Edit Profile Banner */}
          <div className="px-6 pt-4 pb-2">
            <a
              href="/profile"
              onClick={onClose}
              className="w-full flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-orange-600 dark:to-orange-500 dark:hover:from-orange-500 dark:hover:to-orange-600 text-white shadow-md shadow-blue-500/20 dark:shadow-orange-600/25 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span className="text-sm font-bold">Edit Full Profile</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">
            
            {/* Target Role & Level */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-slate-200/80 dark:border-white/10 shadow-xs flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  <Briefcase className="w-3.5 h-3.5 text-blue-500 dark:text-orange-400" />
                  <span>Target Role</span>
                </div>
                <p className="text-sm font-extrabold text-gray-900 dark:text-white">
                  {profile?.targetRole || "Not specified yet"}
                </p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-orange-500/10 text-blue-700 dark:text-orange-400 border border-blue-200/60 dark:border-orange-500/20">
                {profile?.experienceLevel || "Entry Level"}
              </span>
            </div>

            {/* Resume Details */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5 text-blue-500 dark:text-orange-400" />
                  <span>Uploaded Resume</span>
                </div>
                <button
                  onClick={() => { onClose(); onOpenResumeUpload(); }}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-orange-400 dark:hover:text-orange-300 cursor-pointer"
                >
                  Update PDF
                </button>
              </div>
              {profile?.resumeName ? (
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                  <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="truncate">{profile.resumeName}</span>
                </div>
              ) : (
                <button
                  onClick={() => { onClose(); onOpenResumeUpload(); }}
                  className="w-full py-3 border border-dashed border-blue-300 dark:border-orange-500/40 rounded-xl bg-blue-50/50 hover:bg-blue-50 dark:bg-orange-500/5 dark:hover:bg-orange-500/10 text-blue-600 dark:text-orange-400 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <UploadCloud className="w-4 h-4" />
                  <span>Upload Resume (PDF)</span>
                </button>
              )}
            </div>

            {/* Extracted Skills Cloud */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col gap-2">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-orange-400" />
                  <span>Extracted Skills ({profile?.skills?.length || 0})</span>
                </div>
                <button
                  onClick={() => { onClose(); onOpenResumeUpload(); }}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-orange-400 dark:hover:text-orange-300 cursor-pointer"
                >
                  Edit
                </button>
              </div>

              {profile?.skills && profile.skills.length > 0 ? (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/[0.06] text-gray-700 dark:text-zinc-200 border border-transparent dark:border-white/10 text-xs font-bold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-400 dark:text-zinc-500 py-2">
                  No skills extracted yet. Upload your resume to extract skills automatically.
                </p>
              )}
            </div>

            {/* AI Extracted Projects */}
            {profile?.projects && profile.projects.length > 0 && (
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col gap-3">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  <FolderDot className="w-3.5 h-3.5 text-blue-500 dark:text-orange-400" />
                  <span>Projects from Resume</span>
                </div>
                <div className="flex flex-col gap-3">
                  {profile.projects.map((project, i) => (
                    <div key={i} className="p-3 bg-gray-50/70 dark:bg-white/[0.03] border border-gray-100 dark:border-white/10 rounded-xl">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-extrabold text-gray-900 dark:text-white">{project.name}</h4>
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-orange-400 hover:text-blue-800">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-zinc-400 mb-2 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded-md bg-white dark:bg-white/[0.06] text-gray-600 dark:text-zinc-300 border border-gray-200/60 dark:border-white/10 text-[10px] font-bold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* External Links */}
            {(profile?.githubUrl || profile?.linkedinUrl || profile?.portfolioUrl) && (
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col gap-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  <Globe className="w-3.5 h-3.5 text-blue-500 dark:text-orange-400" />
                  <span>External Links</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {profile.githubUrl && (
                    <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-gray-800 dark:text-zinc-200 border border-transparent dark:border-white/10 rounded-xl text-xs font-bold transition-colors">
                      <Globe className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                  {profile.linkedinUrl && (
                    <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 dark:bg-orange-500/10 dark:hover:bg-orange-500/20 text-blue-700 dark:text-orange-400 border border-transparent dark:border-orange-500/20 rounded-xl text-xs font-bold transition-colors">
                      <Globe className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  )}
                  {profile.portfolioUrl && (
                    <a href={profile.portfolioUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border border-transparent dark:border-emerald-800/40 rounded-xl text-xs font-bold transition-colors">
                      <Globe className="w-3.5 h-3.5" />
                      Portfolio
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Earned Certificates */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0c0c0e] border border-slate-200/80 dark:border-white/10 shadow-xs flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                <Award className="w-3.5 h-3.5 text-amber-500 dark:text-orange-400" />
                <span>Earned Certificates ({certificates.length})</span>
              </div>

              {certificates.length > 0 ? (
                <div className="flex flex-col gap-2 pt-1">
                  {certificates.map((cert) => (
                    <button
                      key={cert.id}
                      onClick={() => { if (onViewCertificate) onViewCertificate(cert); }}
                      className="w-full p-2.5 rounded-xl bg-amber-50/60 dark:bg-white/[0.03] border border-amber-200/80 dark:border-white/10 hover:bg-amber-100/60 dark:hover:bg-white/[0.06] flex items-center justify-between text-left transition-colors cursor-pointer"
                    >
                      <div className="truncate pr-2">
                        <p className="text-xs font-bold text-gray-900 dark:text-white truncate">{cert.courseTitle}</p>
                        <p className="text-[10px] text-amber-700 dark:text-orange-400 font-semibold">{cert.company} • {cert.issuedAt}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-amber-600 dark:text-orange-400 shrink-0" />
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-400 dark:text-zinc-500 py-2">
                  No certificates yet. Complete 100% of any course playlist to earn your certificate!
                </p>
              )}
            </div>
          </div>

          {/* Footer with Logout */}
          <div className="p-4 bg-white dark:bg-[#0c0c0e] border-t border-slate-200/80 dark:border-white/10">
            <button
              onClick={async () => {
                await logout();
                onClose();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
