import React from 'react';

interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const LiquidGlass = ({ children, className = "", style = {} }: LiquidGlassProps) => (
  <div 
    className={`bg-white/40 backdrop-blur-[40px] border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_20px_40px_rgba(0,0,0,0.08)] ${className}`}
    style={{ WebkitBackdropFilter: 'blur(40px)', ...style }}
  >
    {children}
  </div>
);
