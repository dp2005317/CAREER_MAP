"use client";

import React from "react";
import { LayoutDashboard, Map as MapIcon, Briefcase, GraduationCap, User } from "lucide-react";

interface MobileDockProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenProfile: () => void;
}

export function MobileDock({ activeTab, onTabChange, onOpenProfile }: MobileDockProps) {
  const navItems = [
    { id: "overview", label: "Home", icon: LayoutDashboard },
    { id: "map", label: "Map", icon: MapIcon },
    { id: "jobs", label: "Jobs", icon: Briefcase },
    { id: "courses", label: "Courses", icon: GraduationCap },
  ];

  return (
    <div className="md:hidden fixed bottom-5 inset-x-5 z-50 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-white/5 pointer-events-none" />
      <div className="flex items-center justify-between px-5 py-2.5 relative">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="flex flex-col items-center justify-center w-14 h-12 gap-1 relative z-10"
            >
              <Icon 
                className={`w-5 h-5 transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600 dark:text-orange-400 scale-110 drop-shadow-md" 
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`} 
              />
              <span 
                className={`text-[10px] font-bold transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600 dark:text-orange-400 opacity-100 drop-shadow-md" 
                    : "text-gray-500 dark:text-gray-400 opacity-80"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <div className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-blue-600 dark:bg-orange-400" />
              )}
            </button>
          );
        })}
        <button
          onClick={onOpenProfile}
          className="flex flex-col items-center justify-center w-14 h-12 gap-1 relative z-10"
        >
          <User className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300" />
          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 opacity-80 transition-all duration-300">
            Profile
          </span>
        </button>
      </div>
    </div>
  );
}
