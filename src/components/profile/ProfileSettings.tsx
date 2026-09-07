"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  User, Briefcase, Award, MapPin, 
  Settings, Save, CheckCircle2, X, Plus
} from "lucide-react";
import { useAuth, UserProfile } from "@/database/authContext";

const tabs = [
  { id: "general", label: "General Info", icon: User },
  { id: "career", label: "Career Profile", icon: Briefcase },
  { id: "resume", label: "Resume & Skills", icon: Award },
];

export function ProfileSettings() {
  const { user, profile, updateProfile } = useAuth();
  
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
      
      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 shrink-0 flex flex-col gap-2">
        <div className="p-5 bg-white rounded-3xl border border-gray-200/80 shadow-sm flex flex-col gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-sm font-bold cursor-pointer ${
                  isActive 
                    ? "bg-blue-50 text-blue-700 shadow-xs border border-blue-100" 
                    : "bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Form Area */}
      <div className="flex-1 min-w-0">
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden flex flex-col">
          
          <div className="p-6 sm:p-8 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-black text-gray-900">
              {tabs.find(t => t.id === activeTab)?.label}
            </h2>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                showSuccess 
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20" 
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/20"
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
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Display Name</label>
                  <input
                    type="text"
                    value={formData.displayName}
                    onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-semibold text-gray-900"
                    placeholder="E.g. Jane Doe"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address (Read Only)</label>
                  <input
                    type="email"
                    value={profile?.email || user?.email || ""}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-500 outline-none font-semibold cursor-not-allowed"
                  />
                  <p className="text-[11px] text-gray-400 font-medium">Your email is managed by your authentication provider (Google/GitHub).</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Preferred Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={formData.preferredLocation || ""}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-semibold text-gray-900"
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
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Target Role</label>
                    <input
                      type="text"
                      value={formData.targetRole || ""}
                      onChange={(e) => setFormData({ ...formData, targetRole: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-semibold text-gray-900"
                      placeholder="E.g. Frontend Developer"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Experience Level</label>
                    <select
                      value={formData.experienceLevel || "Entry Level"}
                      onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value as UserProfile["experienceLevel"] })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-semibold text-gray-900 appearance-none"
                    >
                      <option value="Student">Student / Still Learning</option>
                      <option value="Entry Level">Entry Level (0-2 years)</option>
                      <option value="Mid Level">Mid Level (2-5 years)</option>
                      <option value="Senior">Senior (5+ years)</option>
                    </select>
                  </div>
                </div>

              </motion.div>
            )}

            {activeTab === "resume" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Skills (Press Enter to add)</label>
                  <div className="p-4 rounded-2xl border border-gray-200 bg-gray-50 flex flex-col gap-4 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                    
                    <div className="flex flex-wrap gap-2">
                      {formData.skills?.map((skill) => (
                        <div key={skill} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 shadow-sm">
                          <span>{skill}</span>
                          <button
                            onClick={() => handleRemoveSkill(skill)}
                            className="p-0.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <Plus className="w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyDown={handleAddSkill}
                        placeholder="Add a skill..."
                        className="flex-1 bg-transparent border-none outline-none text-sm font-semibold text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Resume Summary / Bio</label>
                  <textarea
                    value={formData.resumeSummary || ""}
                    onChange={(e) => setFormData({ ...formData, resumeSummary: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-semibold text-gray-900 leading-relaxed custom-scrollbar"
                    placeholder="A brief overview of your background, extracted from your resume or GitHub profile."
                  />
                </div>

              </motion.div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
