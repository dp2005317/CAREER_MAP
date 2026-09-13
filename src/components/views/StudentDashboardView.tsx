import React from "react";
import { User, Mail, Target, Award, Bookmark, TrendingUp, GraduationCap, MapPin, Building2, CheckCircle2, FileText, Briefcase } from "lucide-react";
import { User as FirebaseUser } from "firebase/auth";
import { UserProfile, UserCertificate } from "@/database/authContext";
import { Job } from "@/backend/mockData";
import { playlists } from "@/data/data";

interface StudentDashboardViewProps {
  user: FirebaseUser | null;
  profile: UserProfile | null;
  savedJobs: Job[];
  certificates: UserCertificate[];
  courseProgress: Record<string, { completedModules: string[], progressPercent: number }>;
  onGoToSavedJobs: () => void;
  onGoToCourses: () => void;
  onOpenProfile: () => void;
  onOpenJob: (job: Job) => void;
  onOpenCertificate: (cert: UserCertificate) => void;
}

export function StudentDashboardView({
  user,
  profile,
  savedJobs,
  certificates,
  courseProgress,
  onGoToSavedJobs,
  onGoToCourses,
  onOpenProfile,
  onOpenJob,
  onOpenCertificate
}: StudentDashboardViewProps) {
  const displayName = profile?.displayName || user?.displayName || "Student";
  const email = user?.email || "";
  const targetRole = profile?.targetRole || "Software Engineer";
  const skills = profile?.skills || [];
  
  // Calculate completed courses based on courseProgress showing 100%
  const inProgressCoursesCount = Object.keys(courseProgress).filter(
    (id) => courseProgress[id].progressPercent < 100
  ).length;

  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar bg-transparent">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Welcome Hero & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Profile Card */}
          <div className="lg:col-span-2 neu-card p-6 flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-orange-500/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-orange-500 via-amber-500 to-blue-600 p-1 shrink-0 z-10 shadow-lg">
              <div className="w-full h-full bg-white dark:bg-black rounded-full flex items-center justify-center border-4 border-white dark:border-zinc-800">
                <User className="w-10 h-10 text-orange-500 dark:text-orange-400" />
              </div>
            </div>
            
            <div className="z-10 flex-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Welcome back, {displayName.split(" ")[0]}!
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
                <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-gray-400 dark:text-gray-500" />{email}</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5"><Target className="w-4 h-4 text-blue-500 dark:text-orange-400" />{targetRole}</span>
                {profile?.resumeName && (
                  <>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><FileText className="w-4 h-4" />Resume Active</span>
                  </>
                )}
              </div>
              
              <div className="mt-4 flex flex-wrap gap-1.5">
                {skills.length > 0 ? (
                  skills.slice(0, 5).map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-blue-50 dark:bg-white/5 text-blue-700 dark:text-blue-300 rounded-lg text-[10px] sm:text-xs font-bold border border-blue-100 dark:border-white/10">
                      {skill}
                    </span>
                  ))
                ) : (
                  <button onClick={onOpenProfile} className="text-xs font-bold text-blue-600 dark:text-orange-400 underline">Add skills to your profile</button>
                )}
                {skills.length > 5 && (
                  <span className="px-2.5 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-lg text-[10px] sm:text-xs font-bold border border-gray-200 dark:border-white/10">
                    +{skills.length - 5} more
                  </span>
                )}
              </div>
            </div>
            
            <div className="z-10 mt-2 md:mt-0">
              <button 
                onClick={onOpenProfile}
                className="neu-btn-primary px-4 py-2 text-xs font-bold whitespace-nowrap"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="neu-card p-4 flex flex-col justify-center items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 shadow-sm border border-blue-100 dark:border-blue-900/40">
                <Bookmark className="w-5 h-5 fill-blue-100 dark:fill-blue-950" />
              </div>
              <p className="text-3xl font-black text-gray-900 dark:text-white">{savedJobs.length}</p>
              <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Jobs Applied</p>
            </div>
            
            <div className="neu-card p-4 flex flex-col justify-center items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 dark:text-amber-400 flex items-center justify-center mb-2 shadow-sm border border-amber-100 dark:border-amber-900/40">
                <Award className="w-5 h-5 fill-amber-100 dark:fill-amber-950" />
              </div>
              <p className="text-3xl font-black text-gray-900 dark:text-white">{certificates.length}</p>
              <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Certificates</p>
            </div>
          </div>

        </div>

        {/* Content Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Saved Jobs List */}
          <div className="neu-card flex flex-col overflow-hidden h-[400px]">
            <div className="p-5 border-b border-gray-100 dark:border-white/10 flex items-center justify-between bg-gray-50/50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-orange-400" />
                <h2 className="font-extrabold text-gray-900 dark:text-white text-lg">My Applications</h2>
              </div>
              <button onClick={onGoToSavedJobs} className="text-xs font-bold text-blue-600 dark:text-orange-400 hover:underline">
                View All →
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar flex flex-col gap-3">
              {savedJobs.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-3">
                    <Bookmark className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-200">No applications yet</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Start browsing jobs and save them to track your applications.</p>
                </div>
              ) : (
                savedJobs.slice(0, 5).map(job => (
                  <div key={job.id} onClick={() => onOpenJob(job)} className="p-4 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-blue-200 dark:hover:border-orange-500/30 hover:bg-blue-50/30 dark:hover:bg-white/[0.03] transition-all cursor-pointer group">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-blue-700 dark:group-hover:text-orange-400 transition-colors">{job.title}</h3>
                        <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-0.5">{job.company}</p>
                      </div>
                      <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-100 dark:border-emerald-800/30">
                        {job.salary.split(" ")[0]}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-3 text-[10px] font-bold text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Building2 className="w-3 h-3" />{job.type}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Courses & Certificates */}
          <div className="neu-card flex flex-col overflow-hidden h-[400px]">
            <div className="p-5 border-b border-gray-100 dark:border-white/10 flex items-center justify-between bg-gray-50/50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-orange-400" />
                <h2 className="font-extrabold text-gray-900 dark:text-white text-lg">My Learning</h2>
              </div>
              <button onClick={onGoToCourses} className="text-xs font-bold text-blue-600 dark:text-orange-400 hover:underline">
                Explore Courses →
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar flex flex-col gap-3">
              {certificates.length === 0 && inProgressCoursesCount === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-3">
                    <Award className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                  </div>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-200">No active courses</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Enroll in free courses to earn verifiable certificates.</p>
                  <button onClick={onGoToCourses} className="mt-4 px-4 py-2 bg-blue-50 dark:bg-white/5 text-blue-600 dark:text-orange-400 font-bold text-xs rounded-xl border border-blue-100 dark:border-white/10 hover:brightness-110 transition-all cursor-pointer">
                    Find a Course
                  </button>
                </div>
              ) : (
                <>
                  {certificates.map(cert => (
                    <div key={cert.id} onClick={() => onOpenCertificate(cert)} className="p-4 rounded-2xl border border-gray-100 dark:border-white/10 bg-gradient-to-r from-amber-50/50 to-yellow-50/50 dark:from-amber-950/20 dark:to-orange-950/20 hover:from-amber-100/50 dark:hover:from-amber-950/30 transition-all cursor-pointer">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0 border border-amber-200 dark:border-amber-800/40 shadow-sm">
                          <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight">{cert.courseTitle}</h3>
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          </div>
                          <p className="text-[10px] font-bold text-amber-700 dark:text-amber-400 mt-1 uppercase tracking-wider">{cert.company} Certificate</p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium mt-1">Issued: {new Date(cert.issuedAt).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {Object.entries(courseProgress).map(([courseId, progress]) => {
                    const pct = progress.progressPercent;
                    if (pct >= 100) return null; // Already a certificate
                    const courseInfo = playlists.find(p => p.id === courseId);
                    if (!courseInfo) return null;
                    
                    return (
                      <div key={courseId} onClick={onGoToCourses} className="p-4 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-blue-200 dark:hover:border-orange-500/30 transition-all cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/40">
                            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 w-full">
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight">{courseInfo.title}</h3>
                            <div className="flex items-center justify-between mt-2 mb-1">
                              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{pct}% Complete</span>
                              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{progress.completedModules.length} Lessons</span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-orange-500 rounded-full" style={{ width: `${pct}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
