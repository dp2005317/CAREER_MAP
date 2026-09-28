import React from 'react';
import Image from 'next/image';

export const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none">
    {/* Light mode ambient aura orbs (Reference 1 & 2 inspired) */}
    <div className="dark:hidden absolute inset-0 w-full h-full transition-opacity duration-700">
      {/* Top-right soft peach/coral bloom */}
      <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-rose-200/50 via-orange-100/40 to-transparent blur-3xl" />
      
      {/* Top-left subtle periwinkle / lavender aura */}
      <div className="absolute top-[5%] -left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-indigo-100/60 via-blue-100/50 to-transparent blur-3xl" />
      
      {/* Bottom-right gentle warm blush glow */}
      <div className="absolute bottom-[5%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-pink-200/40 via-amber-100/35 to-transparent blur-3xl" />
      
      {/* Center ambient softness */}
      <div className="absolute top-[40%] left-[30%] w-[450px] h-[450px] rounded-full bg-gradient-to-r from-sky-100/30 via-violet-100/30 to-transparent blur-3xl" />
    </div>

    {/* Dark mode celestial ambient aura orbs */}
    <div className="hidden dark:block absolute inset-0 w-full h-full transition-opacity duration-700">
      {/* Top-right deep midnight blue / sapphire */}
      <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/15 via-indigo-700/10 to-transparent blur-3xl" />
      
      {/* Center-right warm amber/ember accent */}
      <div className="absolute top-[30%] right-[15%] w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-orange-600/10 via-amber-700/05 to-transparent blur-3xl" />
      
      {/* Bottom-left deep purple glow */}
      <div className="absolute -bottom-[5%] -left-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-violet-900/15 via-purple-800/10 to-transparent blur-3xl" />
    </div>
  </div>
);
