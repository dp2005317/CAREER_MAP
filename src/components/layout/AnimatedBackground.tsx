import React from 'react';

export const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-10]">
    {/* Light mode blobs */}
    <div className="dark:hidden absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-300/40 mix-blend-multiply filter blur-[100px] animate-blob" />
    <div className="dark:hidden absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-purple-300/40 mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000" />
    <div className="dark:hidden absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-teal-200/40 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />

    {/* Dark mode flame orange / obsidian auras */}
    <div className="hidden dark:block absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-orange-600/10 filter blur-[140px] animate-blob" />
    <div className="hidden dark:block absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-amber-600/10 filter blur-[150px] animate-blob animation-delay-2000" />
    <div className="hidden dark:block absolute -bottom-[20%] left-[20%] w-[65vw] h-[65vw] rounded-full bg-orange-500/10 filter blur-[140px] animate-blob animation-delay-4000" />
  </div>
);
