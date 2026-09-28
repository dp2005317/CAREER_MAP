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
  TrendingUp,
  BookOpen,
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
      className="group relative neu-card hover:border-blue-500/40 dark:hover:border-orange-500/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer hover:-translate-y-1 w-full max-w-[420px] mx-auto sm:mx-0"
    >
      {/* Thumbnail Aspect Ratio 16:9 */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-white/5 max-h-[220px]">
        {course.thumbnail && (course.thumbnail.startsWith("http") || course.thumbnail.startsWith("/")) ? (
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-zinc-900 dark:to-[#151518]">
            <BookOpen className="w-12 h-12 text-slate-400 dark:text-zinc-600 opacity-80 group-hover:scale-110 transition-transform duration-500" />
          </div>
        )}

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Centered Play Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <motion.div
            animate={isHovered ? { scale: 1, opacity: 1 } : { scale: 0.75, opacity: 0 }}
            transition={{ type: "spring", stiffness: 450, damping: 28 }}
            className="w-12 h-12 rounded-full bg-blue-600 dark:bg-orange-600 text-white flex items-center justify-center shadow-2xl shadow-blue-600/50 dark:shadow-orange-600/50 border border-white/20"
          >
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </motion.div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          {matchScore && matchScore >= 70 ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white backdrop-blur-md shadow-sm border border-emerald-400/30">
              <Sparkles className="w-2.5 h-2.5" />
              {matchScore}% Match
            </span>
          ) : course.isTrending ? (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-400 text-stone-900 backdrop-blur-md shadow-sm">
              <TrendingUp className="w-3 h-3 text-stone-900" />
              <span>Most Popular</span>
            </span>
          ) : course.isNew ? (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-600/90 dark:bg-orange-600/90 text-white backdrop-blur-md shadow-sm border border-white/20">
              <Sparkles className="w-3 h-3 text-white" />
              <span>New</span>
            </span>
          ) : null}
        </div>

        {/* Bottom Pill: Modules count */}
        {course.modules && (
          <div className="absolute bottom-2.5 left-3 z-10">
            <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-[11px] font-medium text-white/90 px-2.5 py-0.5 rounded-full border border-white/10 shadow-sm">
              <ListVideo className="w-3 h-3 text-blue-400 dark:text-orange-400" />
              <span>{course.modules.length} {course.modules.length === 1 ? "module" : "modules"}</span>
            </div>
          </div>
        )}

        {/* Bottom Pill: Duration */}
        <div className="absolute bottom-2.5 right-3 z-10">
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md text-[11px] font-medium text-white/90 px-2.5 py-0.5 rounded-full border border-white/10 shadow-sm">
            <Clock className="w-3 h-3 text-blue-400 dark:text-orange-400" />
            <span>{course.duration}</span>
          </div>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 gap-2.5">
        {/* Provider & Difficulty Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="shrink-0">
              <CompanyLogoSvg company={course.company} size={20} />
            </div>
            <span className="text-xs font-bold text-gray-700 dark:text-gray-300 truncate">
              {course.company}
            </span>
          </div>
          <span className={`shrink-0 inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${dc.bg}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${dc.dot}`} />
            {course.difficulty || "Beginner"}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="font-extrabold text-sm sm:text-base text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors">
          {course.title}
        </h3>

        {/* Course Description */}
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed font-medium">
          {course.description}
        </p>

        {/* Key Metrics Strip */}
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 pt-1">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold text-gray-800 dark:text-gray-200">{course.rating || 4.8}</span>
          </div>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-gray-400" />
            <span>{course.learners || "1.2k"} learners</span>
          </div>
          {course.certificateAvailable && (
            <>
              <span className="text-gray-300 dark:text-gray-700">•</span>
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
                className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-slate-200/60 dark:border-white/10"
              >
                {skill}
              </span>
            ))}
            {course.skills.length > 3 && (
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md text-gray-400 dark:text-gray-500">
                +{course.skills.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Learning Progress (Segmented dashes if enrolled) */}
        {progress !== undefined && progress > 0 && (
          <div className="mt-1 pt-3 border-t border-slate-100 dark:border-white/10">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1.5">
              <span>Course Progress</span>
              <span className={progress === 100 ? "text-emerald-500 font-bold" : "text-blue-600 dark:text-orange-400 font-bold"}>
                {progress === 100 ? "Completed" : `${progress}%`}
              </span>
            </div>
            {/* 10 Segmented Dashes */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 10 }).map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2 flex-1 rounded-full transition-colors ${
                    idx < Math.round((progress / 100) * 10)
                      ? progress === 100
                        ? "bg-emerald-500"
                        : "bg-blue-600 dark:bg-orange-500"
                      : "bg-slate-200 dark:bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-slate-100 dark:border-white/10">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-500 rounded-xl transition-all shadow-sm shadow-blue-500/20 dark:shadow-orange-600/25 cursor-pointer"
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
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center transition-colors cursor-pointer shrink-0 ${
              isSaved
                ? "bg-rose-50 dark:bg-rose-500/10 border-rose-200 dark:border-rose-500/30 text-rose-500"
                : "border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-gray-400 dark:text-gray-500 hover:text-rose-500 dark:hover:text-rose-400"
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
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/5 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-orange-400 transition-colors cursor-pointer shrink-0"
            title="Share course"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
