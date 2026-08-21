"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { LiquidGlass } from './LiquidGlass';
import Link from 'next/link';
import Image from 'next/image';

export const LiquidNavbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full px-4 sm:px-8 py-6 flex justify-between items-center z-10"
    >
      <LiquidGlass className="px-6 py-3 rounded-full flex items-center gap-2">
        <Image src="/logo.png" alt="CareerMap AI Logo" width={200} height={200} className="object-contain w-auto h-12 scale-[1.3]" priority />
        <span className="text-lg font-bold tracking-tight text-gray-900">CareerMap AI</span>
      </LiquidGlass>
      
      <LiquidGlass className="hidden md:flex px-8 py-3 rounded-full gap-8 text-sm font-medium text-gray-700">
        <Link href="#" className="hover:text-blue-600 transition-colors">Features</Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">How it Works</Link>
        <Link href="#" className="hover:text-blue-600 transition-colors">About</Link>
      </LiquidGlass>

      <LiquidGlass className="p-1 rounded-full">
        <Link href="/login">
          <button className="bg-gray-900/90 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-all shadow-md">
            Login
          </button>
        </Link>
      </LiquidGlass>
    </motion.nav>
  );
};
