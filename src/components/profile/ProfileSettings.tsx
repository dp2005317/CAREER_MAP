"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  User, Briefcase, Award, MapPin, 
  Settings, Save, CheckCircle2, X, Plus, FileText, UploadCloud, LogOut
} from "lucide-react";
import { useAuth, UserProfile } from "@/database/authContext";

const tabs = [
  { id: "general", label: "General Info", icon: User },
  { id: "career", label: "Career Profile", icon: Briefcase },
  { id: "resume", label: "Resume & Skills", icon: Award },
];

export function ProfileSettings({ onOpenResumeUpload }: { onOpenResumeUpload?: () => void }) {
  const router = useRouter();
  const { user, profile, updateProfile, logout } = useAuth();
  
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      router.push("/login");
    } catch (e) {
      console.error("Logout error", e);
      setIsLoggingOut(false);
    }
  };

  // Form State
  const [formData, setFormData] = useState<Partial<UserProfile>>({
    displayName: "",
    targetRole: "",
    experienceLevel: "Entry Level",
    preferredLocation: "",
    skills: [],
    resumeSummary: ""
  });

  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    if (profile) {
      setFormData({
        displayName: profile.displayName || user?.displayName || "",
        targetRole: profile.targetRole || "",
        experienceLevel: profile.experienceLevel || "Entry Level",
        preferredLocation: profile.preferredLocation || "",
        skills: profile.skills || [],
        resumeSummary: profile.resumeSummary || ""
      });
    }
  }, [profile, user]);

  const handleSave = async () => {
    setIsSaving(true);
    await updateProfile(formData);
    setIsSaving(false);
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newSkill.trim()) {
      e.preventDefault();
      if (!formData.skills?.includes(newSkill.trim())) {
        setFormData({ ...formData, skills: [...(formData.skills || []), newSkill.trim()] });
      }
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({ 
      ...formData, 
      skills: (formData.skills || []).filter(s => s !== skillToRemove) 
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
      
      {/* Navigation: Responsive pills on mobile, clean side panel on desktop */}
      <div className="w-full md:w-64 shrink-0 flex flex-col gap-2">
        <div className="p-2 sm:p-3 md:p-5 liquid-glass rounded-2xl md:rounded-3xl flex flex-row md:flex-col gap-2 overflow-x-auto custom-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all text-xs sm:text-sm font-bold cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive 
                    ? "bg-blue-50 dark:bg-orange-500/10 text-blue-700 dark:text-orange-400 shadow-xs border border-blue-100 dark:border-orange-500/20" 
                    : "bg-transparent text-gray-600 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-white/[0.04] hover:text-gray-900 dark:hover:text-white border border-transparent"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-blue-600 dark:text-orange-400" : "text-gray-400 dark:text-zinc-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}

          <div className="hidden md:block my-1 border-t border-gray-200/60 dark:border-white/10" />

          {/* Logout Option in Navigation */}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all text-xs sm:text-sm font-bold cursor-pointer whitespace-nowrap text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 border border-transparent hover:border-red-200 dark:hover:border-red-900/30 shrink-0 ml-auto md:ml-0"
            title="Log out of CareerMap"
          >
            <LogOut className="w-4 h-4 text-red-600 dark:text-red-400" />
            <span>{isLoggingOut ? "Logging out..." : "Log Out"}</span>
          </button>
        </div>
      </div>

      {/* Main Form Area */}
      <div className="flex-1 min-w-0">
        <div className="liquid-glass rounded-3xl overflow-hidden flex flex-col">
          
          <div className="p-6 sm:p-8 border-b border-gray-100 dark:border-white/10 flex items-center justify-between">
            <h2 className="text-xl font-black text-gray-900 dark:text-white">
              {tabs.find(t => t.id === activeTab)?.label}
            </h2>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                showSuccess 
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20" 
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-orange-600 dark:to-orange-500 dark:hover:from-orange-500 dark:hover:to-orange-600 text-white shadow-md shadow-blue-500/20 dark:shadow-orange-600/25"
              }`}
            >
              {isSaving ? (
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : showSuccess ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              <span>{showSuccess ? "Saved!" : "Save Changes"}</span>
            </button>
          </div>

          <div className="p-6 sm:p-8 flex flex-col gap-8">
            {activeTab === "general" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400">Display Name</label>
                  <input
                    type="text"
                    value={formData.displayName}
                    onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] focus:bg-white dark:focus:bg-black/60 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-orange-500/20 focus:border-blue-500 dark:focus:border-orange-500 outline-none transition-all font-semibold text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                    placeholder="E.g. Jane Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400">Email Address (Read Only)</label>
                  <input
                    type="email"
                    value={profile?.email || user?.email || ""}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/[0.02] text-gray-500 dark:text-zinc-500 outline-none font-semibold cursor-not-allowed"
                  />
                  <p className="text-[11px] text-gray-400 dark:text-zinc-500 font-medium">Your email is managed by your authentication provider (Google/GitHub).</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400">Preferred Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-zinc-500" />
                    <input
                      type="text"
                      value={formData.preferredLocation || ""}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] focus:bg-white dark:focus:bg-black/60 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-orange-500/20 focus:border-blue-500 dark:focus:border-orange-500 outline-none transition-all font-semibold text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                      placeholder="E.g. San Francisco, CA or Remote"
                    />
                  </div>
                </div>

              </motion.div>
            )}

            {activeTab === "career" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400">Target Role</label>
                    <input
                      type="text"
                      value={formData.targetRole || ""}
                      onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] focus:bg-white dark:focus:bg-black/60 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-orange-500/20 focus:border-blue-500 dark:focus:border-orange-500 outline-none transition-all font-semibold text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                      placeholder="E.g. Frontend Developer"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400">Experience Level</label>
                    <select
                      value={formData.experienceLevel || "Entry Level"}
                      onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value as UserProfile["experienceLevel"] })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#121215] focus:bg-white dark:focus:bg-[#18181b] focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-orange-500/20 focus:border-blue-500 dark:focus:border-orange-500 outline-none transition-all font-semibold text-gray-900 dark:text-white appearance-none"
                    >
                      <option value="Student" className="dark:bg-zinc-900 dark:text-white">Student / Still Learning</option>
                      <option value="Entry Level" className="dark:bg-zinc-900 dark:text-white">Entry Level (0-2 years)</option>
                      <option value="Mid Level" className="dark:bg-zinc-900 dark:text-white">Mid Level (2-5 years)</option>
                      <option value="Senior" className="dark:bg-zinc-900 dark:text-white">Senior (5+ years)</option>
                    </select>
                  </div>
                </div>

              </motion.div>
            )}

            {activeTab === "resume" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
                
                {/* Resume Upload Section */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400">Uploaded Resume</label>
                  </div>
                  
                  <div className="p-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4">
                    {profile?.resumeName ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center border border-emerald-200 dark:border-emerald-800/40 shrink-0">
                          <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900 dark:text-white truncate max-w-[200px] sm:max-w-xs">{profile.resumeName}</span>
                          <span className="text-xs font-medium text-gray-500 dark:text-zinc-400">Parsed and analyzed</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/10 flex items-center justify-center border border-gray-200 dark:border-white/10 shrink-0">
                          <FileText className="w-5 h-5 text-gray-400 dark:text-zinc-500" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900 dark:text-white">No resume uploaded</span>
                          <span className="text-xs font-medium text-gray-500 dark:text-zinc-400">Upload to extract skills & projects</span>
                        </div>
                      </div>
                    )}
                    
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        if (onOpenResumeUpload) onOpenResumeUpload();
                      }}
                      className="w-full sm:w-auto px-4 py-2 bg-blue-50 hover:bg-blue-100 dark:bg-orange-500/10 dark:hover:bg-orange-500/20 text-blue-700 dark:text-orange-400 rounded-xl text-sm font-bold border border-blue-200/60 dark:border-orange-500/20 transition-colors flex items-center justify-center gap-2"
                    >
                      <UploadCloud className="w-4 h-4" />
                      <span>{profile?.resumeName ? "Update PDF" : "Upload PDF"}</span>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400">Skills (Press Enter to add)</label>
                  <div className="p-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] flex flex-col gap-4 focus-within:border-blue-500 dark:focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:focus-within:ring-orange-500/20 transition-all">
                    
                    <div className="flex flex-wrap gap-2">
                      {formData.skills?.map((skill) => (
                        <div key={skill} className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/10 rounded-lg text-sm font-bold text-gray-700 dark:text-zinc-200 shadow-sm">
                          <span>{skill}</span>
                          <button
                            onClick={() => handleRemoveSkill(skill)}
                            className="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors cursor-pointer"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <Plus className="w-4 h-4 text-gray-400 dark:text-zinc-500" />
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyDown={handleAddSkill}
                        placeholder="Add a skill..."
                        className="flex-1 bg-transparent border-none outline-none text-sm font-semibold text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400">Resume Summary / Bio</label>
                  <textarea
                    value={formData.resumeSummary || ""}
                    onChange={(e) => setFormData({ ...formData, resumeSummary: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] focus:bg-white dark:focus:bg-black/60 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-orange-500/20 focus:border-blue-500 dark:focus:border-orange-500 outline-none transition-all font-semibold text-gray-900 dark:text-white leading-relaxed custom-scrollbar placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                    placeholder="A brief overview of your background, extracted from your resume or GitHub profile."
                  />
                </div>

              </motion.div>
            )}

          </div>

          {/* Account Actions / Log Out Footer */}
          <div className="p-6 sm:p-8 bg-slate-50/70 dark:bg-white/[0.02] border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-extrabold text-gray-900 dark:text-white">Account Session</h4>
              <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">
                Signed in as <span className="font-semibold text-gray-800 dark:text-zinc-200">{user?.email || profile?.displayName || "User"}</span>
              </p>
            </div>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="px-5 py-2.5 bg-red-50 hover:bg-red-100 dark:bg-red-950/30 dark:hover:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-200/80 dark:border-red-900/40 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95 w-full sm:w-auto"
            >
              <LogOut className="w-4 h-4" />
              <span>{isLoggingOut ? "Logging out..." : "Log Out of Account"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
