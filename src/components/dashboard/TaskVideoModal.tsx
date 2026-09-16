"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Play, 
  Check, 
  Clock, 
  Sparkles, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2,
  Award,
  ChevronRight
} from "lucide-react";
import { WeeklyTaskItem } from "@/components/views/StudentDashboardView";
import { resolveTaskVideo } from "@/lib/taskVideoUtils";
import Link from "next/link";

interface TaskVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: WeeklyTaskItem | null;
  onToggleComplete: (taskId: string) => void;
}

export function TaskVideoModal({
  isOpen,
  onClose,
  task,
  onToggleComplete
}: TaskVideoModalProps) {
  if (!isOpen || !task) return null;

  const videoInfo = resolveTaskVideo(task.title, task.category);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl flex flex-col rounded-[28px] bg-[#FAF8F5] dark:bg-[#151518] text-gray-900 dark:text-white border border-slate-200/80 dark:border-white/10 shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between bg-white dark:bg-[#18181c] shrink-0">
            <div className="flex items-center gap-3 min-w-0 pr-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-orange-500/10 border border-blue-200/80 dark:border-orange-500/20 flex items-center justify-center text-blue-600 dark:text-orange-400 shrink-0">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100/70 dark:bg-orange-500/20 text-blue-700 dark:text-orange-400">
                    {task.isAI ? "AI Daily Task Lecture" : "Assigned Lecture"}
                  </span>
                  {task.completed && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 flex items-center gap-1">
                      <Check className="w-3 h-3 stroke-[3]" /> Completed
                    </span>
                  )}
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white truncate mt-0.5">
                  {task.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-7 space-y-5 overflow-y-auto max-h-[75vh] custom-scrollbar">
            
            {/* 16:9 Video Player Container */}
            <div className="relative w-full aspect-video rounded-[24px] overflow-hidden bg-black shadow-lg border border-slate-300/40 dark:border-white/10">
              <iframe
                src={`${videoInfo.videoUrl}?autoplay=1&modestbranding=1&rel=0`}
                title={videoInfo.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Meta & Action Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10">
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900 dark:text-white">
                  {videoInfo.videoTitle}
                </h4>
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-orange-400" />
                    <span>{videoInfo.duration}</span>
                  </span>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">+200 Bonus Points</span>
                </div>
              </div>

              {/* Mark Complete Action Button */}
              <button
                onClick={() => onToggleComplete(task.id)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm shrink-0 active:scale-95 ${
                  task.completed
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-500 text-white shadow-blue-500/25 dark:shadow-orange-600/25"
                }`}
              >
                {task.completed ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Completed!</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Mark Task Completed</span>
                  </>
                )}
              </button>
            </div>

            {/* Covered Topics in this Task Video */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-orange-500" />
                <span>Key Concepts Covered in This Lecture:</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {videoInfo.topics.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200/60 dark:border-white/5 text-xs text-gray-700 dark:text-gray-300 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-orange-500 shrink-0" />
                    <span className="truncate">{t}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer with link to full course */}
          <div className="p-4 sm:p-5 border-t border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#18181c] flex items-center justify-between shrink-0">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium hidden sm:inline">
              Watch the lecture to advance your syllabus and earn certificates.
            </span>
            <Link
              href={`/courses/${videoInfo.courseId}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-orange-400 hover:underline cursor-pointer ml-auto"
            >
              <span>Open Full Classroom Course</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
