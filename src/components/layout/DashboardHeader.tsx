"use client";

import React from "react";
import Link from "next/link";
import { Bell, User, Menu } from "lucide-react";

interface DashboardHeaderProps {
  title?: string;
  nearestDistanceKm?: number | null;
  user?: any;
  hasResume?: boolean;
  onMenuToggle?: () => void;
  onOpenProfileDrawer?: () => void;
  onOpenResumeUpload?: () => void;
}

export function DashboardHeader({
  title = "Filter & Map!",
  user,
  hasResume = false,
  onMenuToggle,
  onOpenProfileDrawer,
  onOpenResumeUpload
}: DashboardHeaderProps) {
  return (
    <header className="h-14 sm:h-16 px-4 sm:px-6 bg-[#EEF2F6]/95 backdrop-blur-md border-b border-slate-200/80 flex items-center justify-between shrink-0 z-10">
      {/* Title */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button 
          onClick={onMenuToggle}
          className="md:hidden neu-icon-btn w-8 h-8 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <Menu className="w-4 h-4" />
        </button>
        <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3.5">
        {user && !hasResume && onOpenResumeUpload && (
          <button
            onClick={onOpenResumeUpload}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <span>+ Upload Resume (PDF)</span>
          </button>
        )}

        <button 
          title="Notifications"
          className="neu-icon-btn w-9 h-9 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
        >
          <Bell className="w-4 h-4" />
        </button>

        {user ? (
          <button
            onClick={onOpenProfileDrawer}
            className="flex items-center gap-2.5 pl-2 hover:opacity-90 transition-opacity cursor-pointer group"
          >
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-8 h-8 rounded-full neu-card-sm border border-white"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-blue-500/30">
                {user.displayName ? user.displayName.slice(0, 2).toUpperCase() : (user.email ? user.email.slice(0, 2).toUpperCase() : "U")}
              </div>
            )}
            <span className="text-xs font-bold text-gray-800 hidden sm:inline group-hover:text-blue-600 transition-colors">
              {user.displayName || "Explorer"}
            </span>
          </button>
        ) : (
          <Link
            href="/login"
            className="neu-btn-primary px-4 py-2 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <User className="w-3.5 h-3.5" />
            <span>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
}
