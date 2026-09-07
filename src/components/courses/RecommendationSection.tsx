"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Briefcase, ArrowRight } from "lucide-react";
import { playlists } from "@/data/data";
import { CompanyLogoSvg } from "@/components/courses/CompanyLogoSvg";

const careerRecommendations: Record<string, { title: string; playlistIds: string[] }> = {
  "data-science": {
    title: "Data Science",
    playlistIds: ["google-data-analytics", "ibm-data-science", "ms-power-bi", "stanford-algorithms"],
  },
  ai: {
    title: "Artificial Intelligence",
    playlistIds: ["ms-ai-engineer", "nvidia-deep-learning", "ibm-ai-engineering", "openai-prompt-eng"],
  },
  "web-dev": {
    title: "Web Development",
    playlistIds: ["fcc-web-design", "meta-react", "harvard-cs50", "google-ux-design"],
  },
  cloud: {
    title: "Cloud Computing",
    playlistIds: ["aws-cloud-practitioner", "google-cloud", "docker-kubernetes", "ms-azure-fundamentals"],
  },
  cybersecurity: {
    title: "Cyber Security",
    playlistIds: ["cisco-networking", "ibm-cybersecurity", "redhat-linux", "aws-cloud-practitioner"],
  },
  programming: {
    title: "Programming",
    playlistIds: ["harvard-cs50", "google-python", "oracle-java", "stanford-algorithms"],
  },
};

interface RecommendationSectionProps {
  selectedCareer?: string;
}

export function RecommendationSection({ selectedCareer }: RecommendationSectionProps) {
  const careerKey = selectedCareer || "data-science";
  const rec = careerRecommendations[careerKey] || careerRecommendations["data-science"];
  const recommendedCourses = rec.playlistIds
    .map((id) => playlists.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div className="relative group">
      {/* Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20 rounded-[1.5rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

      <div className="relative rounded-[1.4rem] overflow-hidden bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-extrabold text-base text-gray-900">AI Recommendations</h3>
            <p className="text-[11px] text-gray-500 font-semibold mt-0.5">Personalized for {rec.title} career path</p>
          </div>
        </div>

        {/* Recommendations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recommendedCourses.map((course, index) => {
            if (!course) return null;
            return (
              <motion.a
                key={course.id}
                href={course.playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/60 hover:bg-white/90 transition-all group/item no-underline border border-gray-100/50 hover:border-blue-200/50"
              >
                <CompanyLogoSvg company={course.company} size={40} />
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-gray-800 truncate group-hover/item:text-blue-600 transition-colors">
                    {course.title}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] text-gray-500 font-semibold">{course.company}</span>
                    <span className="text-[9px] text-gray-300">•</span>
                    <span className="text-[9px] text-gray-500 font-semibold">{course.duration}</span>
                  </div>
                  {course.jobRoles.length > 0 && (
                    <div className="flex items-center gap-1 mt-1.5">
                      <Briefcase className="w-2.5 h-2.5 text-blue-400" />
                      <span className="text-[9px] text-blue-500 font-bold">{course.jobRoles[0]}</span>
                    </div>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover/item:text-blue-500 group-hover/item:translate-x-1 shrink-0 transition-all" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
