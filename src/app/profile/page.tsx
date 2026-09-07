"use client";

import React, { useState } from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { UserProfileDrawer } from "@/components/profile/UserProfileDrawer";
import { ProfileSettings } from "@/components/profile/ProfileSettings";
import { useAuth } from "@/database/authContext";

export default function ProfilePage() {
  const { user, profile } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#EEF2F6] text-gray-800 antialiased font-sans">
      <AppSidebar
        activeTab="dashboard"
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        <DashboardHeader
          title="Profile Settings"
          user={user || profile}
          hasResume={!!profile?.resumeName}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onOpenProfileDrawer={() => setIsProfileDrawerOpen(true)}
        />
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col custom-scrollbar">
          <div className="max-w-6xl mx-auto w-full mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Account Settings</h1>
            <p className="text-sm text-gray-500 font-medium">Manage your professional identity, career goals, and resume details.</p>
          </div>
          
          <ProfileSettings />
          
        </main>
      </div>

      <UserProfileDrawer
        isOpen={isProfileDrawerOpen}
        onClose={() => setIsProfileDrawerOpen(false)}
        onOpenResumeUpload={() => {}}
      />
    </div>
  );
}
