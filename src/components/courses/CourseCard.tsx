"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Award,
  Heart,
  Share2,
  Clock,
  Users,
  Star,
  ListVideo,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Course } from "@/data/types";
import { CompanyLogoSvg } from "@/components/courses/CompanyLogoSvg";

interface CourseCardProps {
  course: Course;
  index: number;
  onOpenClassroom?: (course: Course) => void;
  progress?: number;
  matchScore?: number;
  matchReason?: string;
}

const difficultyConfig = {
  Beginner: {
    bg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-500",
  },
  Intermediate: {
    bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    dot: "bg-amber-500",
  },
  Advanced: {
    bg: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    dot: "bg-rose-500",
  },
};

export function CourseCard({
  course,
  index,
  onOpenClassroom,
  progress,
  matchScore,
}: CourseCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const dc = difficultyConfig[course.difficulty || "Beginner"] || difficultyConfig.Beginner;

  const handleCardClick = () => {
    if (onOpenClassroom) {
      onOpenClassroom(course);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      className="group relative rounded-2xl bg-white dark:bg-[#0c0c0e] border border-gray-200/80 dark:border-white/10 hover:border-blue-400/60 dark:hover:border-orange-500/40 shadow-sm hover:shadow-xl dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_12px_36px_rgba(249,115,22,0.12)] transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer hover:-translate-y-1"
    >
      {/* Thumbnail Aspect Ratio 16:9 */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {course.thumbnail && (course.thumbnail.startsWith("http") || course.thumbnail.startsWith("/")) ? (
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-[#0c0c0e]">
            <span className="text-5xl select-none opacity-80 group-hover:scale-110 transition-transform duration-500">
              {course.thumbnail || "💻"}
            </span>
          </div>
        )}

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Centered Play Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <motion.div
            animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0.75, opacity: 0 }}
            transition={{ type: "spring", stiffness: 450, damping: 28 }}
            className="w-13 h-13 rounded-full bg-blue-600 dark:bg-orange-600 text-white flex items-center justify-center shadow-2xl shadow-blue-600/50 dark:shadow-orange-600/50 border border-white/20"
          >
            <Play className="w-6 h-6 fill-white ml-0.5" />
          </motion.div>
        </div>

        {/* Top Badges (Clean single priority pill) */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          {matchScore && matchScore >= 70 ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white backdrop-blur-md shadow-sm border border-emerald-400/30">
              <Sparkles className="w-2.5 h-2.5" />
              {matchScore}% Match
            </span>
          ) : course.isTrending ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white backdrop-blur-md shadow-sm border border-orange-400/30">
              🔥 Trending
            </span>
          ) : course.isNew ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-600/90 dark:bg-orange-600/90 text-white backdrop-blur-md shadow-sm border border-white/20">
              ✨ New
            </span>
          ) : null}
        </div>

        {/* Bottom Pill: Modules count */}
        {course.modules && (
          <div className="absolute bottom-2.5 left-3 z-10">
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-[11px] font-medium text-white/90 px-2.5 py-0.5 rounded-full border border-white/10 shadow-sm">
              <ListVideo className="w-3 h-3 text-orange-400" />
              <span>{course.modules.length} {course.modules.length === 1 ? "module" : "modules"}</span>
            </div>
          </div>
        )}

        {/* Bottom Pill: Duration */}
        <div className="absolute bottom-2.5 right-3 z-10">
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md text-[11px] font-medium text-white/90 px-2.5 py-0.5 rounded-full border border-white/10 shadow-sm">
            <Clock className="w-3 h-3 text-orange-400" />
            <span>{course.duration}</span>
          </div>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Provider & Difficulty Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="shrink-0">
              <CompanyLogoSvg company={course.company} size={20} />
            </div>
            <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 truncate">
              {course.company}
            </span>
          </div>
          <span className={`shrink-0 inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${dc.bg}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${dc.dot}`} />
            {course.difficulty || "Beginner"}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="font-bold text-[15px] text-zinc-900 dark:text-zinc-50 leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors">
          {course.title}
        </h3>

        {/* Course Description */}
        <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Key Metrics Strip */}
        <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold text-zinc-800 dark:text-zinc-200">{course.rating || 4.8}</span>
          </div>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-zinc-400" />
            <span>{course.learners || "1.2k"} learners</span>
          </div>
          {course.certificateAvailable && (
            <>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Certificate</span>
              </div>
            </>
          )}
        </div>

        {/* Skills Chips */}
        {course.skills && course.skills.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {course.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-white/[0.05] text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/10"
              >
                {skill}
              </span>
            ))}
            {course.skills.length > 3 && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md text-zinc-400 dark:text-zinc-500">
                +{course.skills.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Learning Progress (if enrolled) */}
        {progress !== undefined && progress > 0 && (
          <div className="mt-1 pt-2 border-t border-zinc-100 dark:border-white/10">
            <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5">
              <span>Course Progress</span>
              <span className={progress === 100 ? "text-emerald-500 font-bold" : "text-blue-600 dark:text-orange-400 font-bold"}>
                {progress === 100 ? "Completed ✓" : `${progress}%`}
              </span>
            </div>
            <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div
                className={`h-full ${
                  progress === 100
                    ? "bg-emerald-500"
                    : "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-orange-600 dark:to-amber-500"
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-zinc-100 dark:border-white/10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-gradient-to-r dark:from-orange-600 dark:to-amber-600 dark:hover:from-orange-500 dark:hover:to-amber-500 rounded-xl transition-all shadow-sm shadow-blue-500/20 dark:shadow-orange-600/25 cursor-pointer"
          >
            <span>
              {progress && progress > 0
                ? progress === 100
                  ? "Review Course"
                  : "Continue Learning"
                : "Start Course"}
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsSaved(!isSaved);
            }}
            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
              isSaved
                ? "bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/30 text-rose-500"
                : "border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/[0.05] text-zinc-400 dark:text-zinc-500 hover:text-rose-500 dark:hover:text-rose-400"
            }`}
            title={isSaved ? "Saved to favorites" : "Save course"}
          >
            <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
          </button>

          {/* Share Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const url = `${window.location.origin}/courses/${course.courseId}`;
              if (navigator.share) {
                navigator.share({ title: course.title, url });
              } else {
                navigator.clipboard.writeText(url);
              }
            }}
            className="w-9 h-9 rounded-xl border border-zinc-200 dark:border-white/10 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-white/[0.05] text-zinc-400 dark:text-zinc-500 hover:text-blue-500 dark:hover:text-orange-400 transition-colors cursor-pointer shrink-0"
            title="Share course"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
