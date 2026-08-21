"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Bookmark, 
  Map as MapIcon, 
  Building2, 
  Briefcase, 
  ChevronRight, 
  Sparkles,
  Compass
} from "lucide-react";
import Image from "next/image";

interface AppSidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onSearchChange?: (query: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function AppSidebar({ 
  activeTab = "map", 
  onTabChange,
  onSearchChange,
  isOpen = false,
  onClose
}: AppSidebarProps) {
  const [searchVal, setSearchVal] = useState("");

  const handleTabClick = (id: string) => {
    if (onTabChange) onTabChange(id);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    if (onSearchChange) onSearchChange(e.target.value);
  };

  const navItems = [
    { id: "search", label: "Search", icon: Search },
    { id: "saved", label: "Saved Jobs", icon: Bookmark, hasChevron: true },
    { id: "map", label: "Map View", icon: MapIcon, hasChevron: true },
    { id: "companies", label: "Companies", icon: Building2, hasChevron: true },
    { id: "jobs", label: "All Jobs", icon: Briefcase },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50 w-64 h-screen bg-[#EEF2F6] border-r border-slate-200/80 flex flex-col justify-between p-4 shrink-0 select-none`}>
        <div className="flex flex-col gap-6">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3 px-2 pt-2 group">
          <div className="flex items-center justify-center group-hover:scale-105 transition-transform -ml-2">
            <Image src="/logo.png" alt="CareerMap Logo" width={200} height={200} className="object-contain w-auto h-16 scale-[1.3]" priority />
          </div>
          <div>
            <h1 className="font-extrabold text-gray-900 text-lg tracking-tight leading-none">
              CareerMap
            </h1>
            <span className="text-[10px] font-bold text-blue-600 tracking-wider uppercase">
              Spatial Discovery
            </span>
          </div>
        </Link>

        {/* Quick Search - Soft Inset */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchVal}
            onChange={handleSearchInput}
            placeholder="Search roles or skills..."
            className="w-full pl-9 pr-3.5 py-2.5 bg-slate-100/90 text-xs font-semibold text-gray-800 rounded-2xl shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] border border-white/60 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all"
          />
        </div>

        {/* Navigation Items - Neumorphic buttons */}
        <nav className="flex flex-col gap-2.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "neu-btn-primary"
                    : "neu-btn text-gray-700 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-600"}`} />
                  <span>{item.label}</span>
                </div>
                {item.hasChevron && (
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-white/80" : "text-gray-400"}`} />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-slate-200/60 flex flex-col gap-1.5 text-[11px] text-gray-400 font-medium px-2">
        <div className="flex items-center gap-1.5 text-gray-600 font-bold">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>AI Intelligence Active</span>
        </div>
        <p>© 2026 CareerMap AI</p>
      </div>
    </aside>
    </>
  );
}
