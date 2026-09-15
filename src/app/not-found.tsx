import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-black text-gray-900 dark:text-gray-100 flex items-center justify-center p-8 sm:p-12 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 dark:bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-2xl w-full mx-auto relative z-10 text-center">
        <div className="liquid-glass rounded-[3rem] p-12 sm:p-16 flex flex-col items-center justify-center border border-white/20">
          
          <div className="w-24 h-24 mb-8 bg-blue-100 dark:bg-orange-500/20 text-blue-600 dark:text-orange-400 rounded-3xl flex items-center justify-center shadow-inner">
            <Compass className="w-12 h-12" />
          </div>

          <h1 className="text-8xl sm:text-9xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-orange-400 dark:to-amber-500">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Lost in the void?</h2>
          <p className="text-gray-500 dark:text-zinc-400 mb-10 max-w-md">
            The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-orange-600 dark:to-orange-500 dark:hover:from-orange-500 dark:hover:to-orange-600 shadow-xl shadow-blue-500/20 dark:shadow-orange-600/25 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Safety
          </Link>

        </div>
      </div>
    </div>
  );
}
