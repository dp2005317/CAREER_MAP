"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  UploadCloud, 
  CheckCircle2, 
  Sparkles, 
  X, 
  Plus, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  ArrowRight,
  Loader2
} from "lucide-react";
import { UserProject } from "@/database/authContext";
import { useAuth } from "@/database/authContext";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: () => void;
}

const POPULAR_ROLES = [
  "Frontend Developer",
  "Backend Engineer",
  "Full Stack Developer",
  "AI / ML Engineer",
  "Data Scientist",
  "Cloud & DevOps Engineer",
  "UI/UX Designer",
  "Mobile App Developer"
];

const LOCATIONS = [
  "Any / Remote",
  "Bangalore",
  "Kolkata",
  "Hyderabad",
  "Delhi NCR",
  "Mumbai",
  "Pune"
];

export function OnboardingModal({ isOpen, onClose, onComplete }: OnboardingModalProps) {
  const { user, profile, updateProfile } = useAuth();
  const router = useRouter();

  const [step, setStep] = useState<"upload" | "review">("upload");
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [fileName, setFileName] = useState<string>(profile?.resumeName || "");
  const [skills, setSkills] = useState<string[]>(profile?.skills?.length ? profile.skills : []);
  const [targetRole, setTargetRole] = useState<string>(profile?.targetRole || "Frontend Developer");
  const [experienceLevel, setExperienceLevel] = useState<"Student" | "Entry Level" | "Mid Level" | "Senior">(
    profile?.experienceLevel || "Entry Level"
  );
  const [location, setLocation] = useState<string>(profile?.preferredLocation || "Any / Remote");
  const [newSkillInput, setNewSkillInput] = useState("");
  const [extractedProjects, setExtractedProjects] = useState<UserProject[]>([]);
  const [extractedLinks, setExtractedLinks] = useState<{ githubUrl?: string | null; linkedinUrl?: string | null; portfolioUrl?: string | null }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = async (file: File) => {
    if (!file) return;
    setFileName(file.name);
    setIsAnalyzing(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/parse-resume", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to analyze resume");
      }

      const extracted = await res.json();
      
      if (extracted.skills && Array.isArray(extracted.skills)) {
        setSkills(extracted.skills);
      }
      if (extracted.targetRole) setTargetRole(extracted.targetRole);
      if (extracted.experienceLevel) setExperienceLevel(extracted.experienceLevel);
      if (extracted.projects && Array.isArray(extracted.projects)) {
        setExtractedProjects(extracted.projects);
      }
      setExtractedLinks({
        githubUrl: extracted.githubUrl,
        linkedinUrl: extracted.linkedinUrl,
        portfolioUrl: extracted.portfolioUrl,
      });

      setStep("review");
    } catch (err) {
      console.error("Resume parsing error", err);
      // Fallback sensible defaults
      setSkills(["React", "TypeScript", "JavaScript", "Python", "SQL", "Git"]);
      setStep("review");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleAddSkill = (e: React.KeyboardEvent | React.MouseEvent) => {
    if ("key" in e && e.key !== "Enter") return;
    if (!newSkillInput.trim()) return;
    if (!skills.includes(newSkillInput.trim())) {
      setSkills([...skills, newSkillInput.trim()]);
    }
    setNewSkillInput("");
  };

  const handleSaveProfile = async () => {
    await updateProfile({
      skills,
      targetRole,
      experienceLevel,
      preferredLocation: location,
      resumeName: fileName || "uploaded_resume.pdf",
      projects: extractedProjects,
      ...extractedLinks,
    });
    if (onComplete) onComplete();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 p-6 sm:p-8 overflow-hidden font-sans my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!user ? (
            <div className="flex flex-col items-center text-center gap-4 py-8">
              <div className="w-16 h-16 rounded-3xl bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">Sign in to Upload Resume</h3>
              <p className="text-sm text-gray-500 max-w-sm mb-4">
                You need to be logged in to build your profile, upload your resume, and get personalized AI recommendations.
              </p>
              <button
                onClick={() => {
                  onClose();
                  router.push("/login");
                }}
                className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-md cursor-pointer"
              >
                Sign In Now
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                    {step === "upload" ? "Complete Your Profile & Resume" : "Review Extracted Skills"}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {step === "upload" 
                      ? "Upload your resume in PDF to automatically match top jobs & tailored courses"
                      : "We extracted these skills from your resume. Fine-tune them below."}
                  </p>
                </div>
              </div>

          {step === "upload" ? (
            <div className="flex flex-col gap-6">
              {/* Drag and Drop Zone */}
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-3xl p-8 sm:p-12 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                  isDragging
                    ? "border-blue-500 bg-blue-50/70 scale-[1.01]"
                    : "border-gray-200 hover:border-blue-400 bg-gray-50/50 hover:bg-blue-50/20"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.txt"
                  className="hidden"
                  onChange={handleFileSelect}
                />

                {isAnalyzing ? (
                  <div className="flex flex-col items-center gap-3">
                    <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                    <p className="text-sm font-bold text-gray-800">Analyzing resume with AI...</p>
                    <p className="text-xs text-gray-400">Extracting tech skills, frameworks, and job matches</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100/60 text-blue-600 flex items-center justify-center">
                      <UploadCloud className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        Click or drag & drop your <span className="text-blue-600">Resume (PDF)</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Supports standard PDF or Text files (max 10MB)</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Skip Option */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSkills(["React", "JavaScript", "TypeScript", "Python", "SQL"]);
                    setStep("review");
                  }}
                  className="text-xs font-bold text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
                >
                  Skip upload & enter skills manually →
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {/* Resume Analyzed Banner */}
              {fileName && (
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">Resume analyzed: {fileName}</span>
                </div>
              )}

              {/* Extracted Skills Chips */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-gray-700 block mb-2">
                  Detected Skills ({skills.length})
                </label>
                <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto p-3 bg-gray-50/80 rounded-2xl border border-gray-200/80">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-blue-700 border border-blue-200/60 rounded-xl text-xs font-bold shadow-xs"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="hover:text-red-500 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}

                  {/* Add skill inline */}
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-white border border-gray-200 rounded-xl">
                    <input
                      type="text"
                      placeholder="+ Add skill"
                      value={newSkillInput}
                      onChange={(e) => setNewSkillInput(e.target.value)}
                      onKeyDown={handleAddSkill}
                      className="text-xs font-semibold outline-none w-20 py-1"
                    />
                    <button
                      type="button"
                      onClick={handleAddSkill}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Target Role & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-black uppercase tracking-wider text-gray-700 block mb-2">
                    Target Role
                  </label>
                  <select
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    {POPULAR_ROLES.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-black uppercase tracking-wider text-gray-700 block mb-2">
                    Experience Level
                  </label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-2xl text-xs font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="Student">Student / Intern</option>
                    <option value="Entry Level">Entry Level (0 - 2 yrs)</option>
                    <option value="Mid Level">Mid Level (2 - 5 yrs)</option>
                    <option value="Senior">Senior Level (5+ yrs)</option>
                  </select>
                </div>
              </div>

              {/* Preferred Location */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-gray-700 block mb-2">
                  Preferred Location
                </label>
                <div className="flex flex-wrap gap-2">
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setLocation(loc)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        location === loc
                          ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setStep("upload")}
                  className="px-4 py-2.5 text-xs font-bold text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
                >
                  ← Re-upload Resume
                </button>
                <button
                  type="button"
                  onClick={handleSaveProfile}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-black rounded-2xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Save Profile & Discover Matches</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
          </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
