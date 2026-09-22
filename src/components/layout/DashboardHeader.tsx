"use client";

import React from "react";
import Link from "next/link";
import { Bell, User, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { TeamButton } from "@/components/team/TeamButton";

interface DashboardHeaderProps {
  title?: string;
  nearestDistanceKm?: number | null;
  user?: any;
  hasResume?: boolean;
  onMenuToggle?: () => void;
  onOpenResumeUpload?: () => void;
  isSidebarHidden?: boolean;
  onToggleSidebar?: () => void;
}

export function DashboardHeader({
  title = "Spatial Intelligence",
  user,
  hasResume = false,
  onMenuToggle,
  onOpenResumeUpload,
  isSidebarHidden = false,
  onToggleSidebar
}: DashboardHeaderProps) {
  return (
    <header className="h-14 sm:h-16 px-4 sm:px-6 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between shrink-0 z-20 sticky top-0">
      {/* Title & Sidebar Toggle */}
      <div className="flex items-center gap-2.5 sm:gap-3.5">
        {onToggleSidebar && (
          <div className="hidden lg:flex items-center">
            <button
              onClick={onToggleSidebar}
              title={isSidebarHidden ? "Show sidebar" : "Hide sidebar"}
              aria-label={isSidebarHidden ? "Show sidebar" : "Hide sidebar"}
              className="p-2 rounded-xl text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-orange-400 hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all cursor-pointer"
            >
              {isSidebarHidden ? (
                <PanelLeftOpen className="w-4 h-4 text-blue-600 dark:text-orange-400" />
              ) : (
                <PanelLeftClose className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
        <div className="flex items-center gap-2">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white tracking-tight truncate max-w-[190px] sm:max-w-none">
            {title}
          </h2>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {user && !hasResume && onOpenResumeUpload && (
          <button
            onClick={onOpenResumeUpload}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-500 text-white rounded-full text-xs font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <span>+ Upload Resume (PDF)</span>
          </button>
        )}

        <TeamButton />
        <ThemeToggle />

        <button 
          title="Notifications"
          className="relative p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all cursor-pointer"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-600 dark:bg-orange-500" />
        </button>

        {user ? (
          <Link
            href="/profile"
            className="flex items-center gap-2.5 pl-1.5 pr-2.5 py-1 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-all cursor-pointer group"
          >
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200 dark:ring-white/10"
              />
            ) : (
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-orange-600 dark:to-amber-600 text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
                {user.displayName ? user.displayName.slice(0, 2).toUpperCase() : (user.email ? user.email.slice(0, 2).toUpperCase() : "U")}
              </div>
            )}
            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200 hidden sm:inline group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors">
              {user.displayName || "Explorer"}
            </span>
          </Link>
        ) : (
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-500 text-white text-xs font-semibold rounded-full shadow-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <User className="w-3.5 h-3.5" />
            <span>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
}
