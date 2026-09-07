"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Play,
  Award,
  Heart,
  Share2,
  Clock,
  Users,
  Star,
  Globe,
  BarChart3,
  ExternalLink,
  Briefcase,
  ListVideo,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Playlist } from "@/data/types";
import { CompanyLogoSvg } from "@/components/courses/CompanyLogoSvg";

interface CourseCardProps {
  course: Playlist;
  index: number;
  onOpenClassroom?: (course: Playlist) => void;
  progress?: number;
  matchScore?: number;
  matchReason?: string;
}

const difficultyConfig = {
  Beginner: {
    bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200/80",
    dot: "bg-emerald-500", glow: "shadow-emerald-500/20",
  },
  Intermediate: {
    bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200/80",
    dot: "bg-amber-500", glow: "shadow-amber-500/20",
  },
  Advanced: {
    bg: "bg-red-50", text: "text-red-700", border: "border-red-200/80",
    dot: "bg-red-500", glow: "shadow-red-500/20",
  },
};

export function CourseCard({ 
  course, 
  index, 
  onOpenClassroom, 
  progress, 
  matchScore, 
  matchReason 
}: CourseCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 400, damping: 35 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 400, damping: 35 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const dc = difficultyConfig[course.difficulty];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <div className="relative rounded-2xl bg-white border border-gray-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full overflow-hidden">
        
        {/* Thumbnail */}
        <div className="relative h-[10.5rem] overflow-hidden bg-slate-50 border-b border-gray-100">
          {/* Neumorphic light background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
            <div className="absolute inset-0 opacity-[0.5]" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #cbd5e1 1px, transparent 1px), radial-gradient(circle at 75% 75%, #cbd5e1 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }} />
          </div>

          {/* Large emoji or Image as visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            {course.thumbnail.startsWith("http") || course.thumbnail.startsWith("/") ? (
              <img src={course.thumbnail} alt={course.title} className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-700 ease-out" />
            ) : (
              <span className="text-6xl sm:text-7xl opacity-80 group-hover:scale-110 transition-all duration-700 ease-out select-none drop-shadow-sm">
                {course.thumbnail}
              </span>
            )}
          </div>

          {/* Classroom play button (No external YT redirect!) */}
          <button
            type="button"
            onClick={() => onOpenClassroom && onOpenClassroom(course)}
            className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
          >
            <motion.div
              animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_0_12px_rgba(37,99,235,0.2)] group-hover:shadow-[0_0_0_16px_rgba(37,99,235,0.3)] transition-shadow"
            >
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </motion.div>
          </button>

          {/* Top badges */}
          <div className="absolute top-3 left-3 flex gap-1.5 z-10 flex-wrap">
            {matchScore && matchScore >= 70 && (
              <span className="inline-flex items-center gap-1 text-[8px] font-black px-2.5 py-1 rounded-md bg-gradient-to-r from-emerald-500 to-teal-600 text-white tracking-wide shadow-lg shadow-emerald-500/30">
                <Sparkles className="w-2.5 h-2.5" />
                {matchScore}% MATCH
              </span>
            )}
            {course.isNew && (
              <span className="inline-flex items-center gap-1 text-[8px] font-black px-2.5 py-1 rounded-md bg-blue-500 text-white tracking-wide shadow-lg shadow-blue-500/30">
                <Sparkles className="w-2.5 h-2.5" />
                NEW
              </span>
            )}
            {course.isTrending && (
              <span className="inline-flex items-center gap-1 text-[8px] font-black px-2.5 py-1 rounded-md bg-gradient-to-r from-amber-400 to-orange-500 text-white tracking-wide shadow-lg shadow-orange-500/30">
                🔥 TRENDING
              </span>
            )}
          </div>

          {/* Video count */}
          {course.videos && (
            <div className="absolute top-3 right-3 z-10">
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md text-[8px] font-bold px-2.5 py-1 rounded-md text-gray-700 border border-gray-200 shadow-sm tracking-wide">
                <ListVideo className="w-3 h-3 text-blue-500" />
                <span>{course.videos} videos</span>
              </div>
            </div>
          )}

          {/* Company badge - bottom left */}
          <div className="absolute bottom-3 left-3 z-10">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-lg px-2.5 py-1.5 border border-gray-200 shadow-sm">
              <CompanyLogoSvg company={course.company} size={18} />
              <span className="text-[10px] font-black text-gray-800 tracking-wide">{course.company}</span>
            </div>
          </div>

          {/* Duration badge - bottom right */}
          <div className="absolute bottom-3 right-3 z-10">
            <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md text-[8px] font-bold px-2 py-1 rounded-md text-gray-700 border border-gray-200 shadow-sm">
              <Clock className="w-2.5 h-2.5 text-blue-500" />
              {course.duration}
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-2 flex-1">
          {/* Title */}
          <h3 className="font-extrabold text-[13px] text-gray-900 leading-[1.35] line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-[11px] text-gray-500/90 leading-relaxed line-clamp-2 font-medium">
            {course.description}
          </p>

          {/* Instructor */}
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-[6px] font-black text-gray-500">{course.instructor[0]}</span>
            </div>
            <p className="text-[10px] text-gray-400 font-semibold">{course.instructor}</p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-0 text-[10px] font-semibold">
            <div className="flex items-center gap-1 px-2 py-0.5">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-gray-800">{course.rating}</span>
            </div>
            <div className="w-px h-3 bg-gray-200" />
            <div className="flex items-center gap-1 px-2 py-0.5">
              <Users className="w-3 h-3 text-blue-400" />
              <span className="text-gray-600">{course.learners}</span>
            </div>
            <div className="w-px h-3 bg-gray-200" />
            <div className="flex items-center gap-1 px-2 py-0.5">
              <Globe className="w-3 h-3 text-emerald-400" />
              <span className="text-gray-600">{course.language}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className={`inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-md border ${dc.bg} ${dc.text} ${dc.border}`}>
              <div className={`w-1.5 h-1.5 rounded-full ${dc.dot}`} />
              {course.difficulty}
            </span>
            {course.isFree && (
              <span className="text-[8px] font-black px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200/80 tracking-wider">
                FREE
              </span>
            )}
            {course.certificateAvailable && (
              <span className="inline-flex items-center gap-0.5 text-[9px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-200/80">
                <Award className="w-2.5 h-2.5" />
                Certificate
              </span>
            )}
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-1">
            {course.skills.slice(0, 4).map((skill) => (
              <span key={skill} className="text-[8px] font-bold px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 tracking-wide">
                {skill}
              </span>
            ))}
            {course.skills.length > 4 && (
              <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-md bg-gray-50 text-gray-400">
                +{course.skills.length - 4}
              </span>
            )}
          </div>

          {/* Job roles */}
          {course.jobRoles.length > 0 && (
            <div className="mt-1 p-2.5 rounded-xl bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-blue-50/60 border border-blue-100/50">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Briefcase className="w-2.5 h-2.5 text-blue-400" />
                <p className="text-[8px] font-black text-blue-400 uppercase tracking-[0.15em]">Leads to jobs</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {course.jobRoles.map((role) => (
                  <a
                    key={role}
                    href={`/dashboard?tab=jobs&company=${encodeURIComponent(course.company)}`}
                    className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-md bg-white text-blue-600 hover:bg-blue-50 transition-colors no-underline shadow-sm border border-blue-100/50"
                  >
                    {role}
                    <ChevronRight className="w-2.5 h-2.5 opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Learning progress bar if started */}
          {progress !== undefined && progress > 0 && (
            <div className="w-full mt-2 pt-2 border-t border-gray-100">
              <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 mb-1">
                <span>Course Progress</span>
                <span className={progress === 100 ? "text-amber-600 font-black" : "text-blue-600"}>
                  {progress === 100 ? "🎉 Completed" : `${progress}%`}
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${progress === 100 ? "bg-amber-500" : "bg-gradient-to-r from-blue-500 to-indigo-600"}`} 
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100/80">
            <button
              type="button"
              onClick={() => onOpenClassroom && onOpenClassroom(course)}
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-[10px] font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
            >
              <Play className="w-3 h-3 fill-white" />
              <span>{progress && progress > 0 ? (progress === 100 ? "Review Course" : "Continue Course") : "Start Learning"}</span>
            </button>
            <a
              href={course.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-[10px] font-black text-gray-600 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all no-underline border border-gray-200/80"
            >
              <ExternalLink className="w-3 h-3" />
              Official Site
            </a>
          </div>

          {/* Save / Share */}
          <div className="flex items-center justify-between pt-1.5">
            <button
              onClick={(e) => { e.stopPropagation(); setIsSaved(!isSaved); }}
              className={`flex items-center gap-1.5 text-[10px] font-bold cursor-pointer transition-all duration-200 ${
                isSaved ? "text-red-500" : "text-gray-400 hover:text-red-400"
              }`}
            >
              <Heart className={`w-3.5 h-3.5 transition-all duration-200 ${isSaved ? "fill-red-500 scale-110" : ""}`} />
              <span>{isSaved ? "Saved" : "Save"}</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (navigator.share) navigator.share({ title: course.title, url: course.playlistUrl });
                else navigator.clipboard.writeText(course.playlistUrl);
              }}
              className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 hover:text-blue-500 cursor-pointer transition-all duration-200"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
