'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { expo, expoOut } from '@/lib/animations';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[300] flex items-center justify-center bg-[#F5F0E8]"
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.8, ease: expoOut },
          }}
        >
          {/* Animated logo */}
          <div className="relative flex flex-col items-center">
            {/* Decorative line top */}
            <motion.div
              className="h-px bg-[#7C9A7E] mb-6"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.6, delay: 0.2, ease: expoOut }}
            />

            {/* KRAFT letters */}
            <div className="overflow-hidden">
              <motion.h1
                className="font-playfair text-6xl md:text-7xl font-bold text-[#2C2C2C] tracking-tight"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: expoOut }}
              >
                KRAFT
              </motion.h1>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden mt-2">
              <motion.p
                className="font-inter text-xs tracking-[0.3em] text-[#7C9A7E] uppercase"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: expoOut }}
              >
                Artisan fleuriste
              </motion.p>
            </div>

            {/* Loading bar */}
            <motion.div
              className="mt-8 h-px bg-[#E8E0D0] overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-[#8B6914]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'linear' }}
              />
            </motion.div>

            {/* Floating botanical SVG */}
            <motion.svg
              className="absolute -top-16 -right-20 w-24 h-24 text-[#7C9A7E] opacity-20"
              viewBox="0 0 96 96"
              fill="none"
              initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
              animate={{ opacity: 0.2, rotate: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: expo }}
            >
              <circle cx="48" cy="30" r="18" fill="currentColor" opacity="0.5" />
              <circle cx="48" cy="30" r="10" fill="currentColor" opacity="0.7" />
              <line x1="48" y1="48" x2="48" y2="90" stroke="currentColor" strokeWidth="2" />
              <ellipse cx="38" cy="65" rx="12" ry="5" fill="currentColor" opacity="0.3" transform="rotate(-20 38 65)" />
            </motion.svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
