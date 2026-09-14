import React from 'react';

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const LiquidGlass = ({ children, className = "", style = {} }: LiquidGlassProps) => (
  <div 
    className={`bg-white/40 dark:bg-zinc-900/30 backdrop-blur-[40px] border border-white/60 dark:border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.4)] ${className}`}
    style={{ WebkitBackdropFilter: 'blur(40px)', ...style }}
  >
    {children}
  </div>
);
