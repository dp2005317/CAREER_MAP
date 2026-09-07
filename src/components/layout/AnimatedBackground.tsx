import React from 'react';

export const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-10]">
    <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-300/40 mix-blend-multiply filter blur-[100px] animate-blob" />
    <div className="absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-purple-300/40 mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000" />
    <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-teal-200/40 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
  </div>
);
