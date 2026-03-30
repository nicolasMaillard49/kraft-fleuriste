'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { expo, expoOut } from '@/lib/animations';

// Orchestrated entrance variants
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 2.4 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: expo },
  },
};

const lineGrow: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: expo },
  },
};

const titleLetters = 'KRAFT'.split('');

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Parallax transforms based on scroll
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgY3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#F5F0E8] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax SVG Background Layers */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Layer 1 - Top-right bloom cluster (slowest parallax) */}
        <motion.svg
          className="absolute top-0 right-0 w-[500px] h-[500px] text-[#7C9A7E] opacity-[0.08]"
          viewBox="0 0 400 400"
          fill="none"
          style={{ y: bgY1, scale: bgScale }}
        >
          <motion.circle
            cx="320" cy="80" r="60" fill="currentColor" opacity="0.3"
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="280" cy="100" r="40" fill="currentColor" opacity="0.2" />
          <motion.circle
            cx="360" cy="120" r="35" fill="currentColor" opacity="0.2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <circle cx="300" cy="50" r="30" fill="currentColor" opacity="0.25" />
          <circle cx="340" cy="150" r="25" fill="currentColor" opacity="0.15" />
          <line x1="320" y1="140" x2="320" y2="400" stroke="currentColor" strokeWidth="2" opacity="0.4" />
          <line x1="280" y1="140" x2="260" y2="400" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <ellipse cx="295" cy="220" rx="25" ry="12" fill="currentColor" opacity="0.3" transform="rotate(-30 295 220)" />
          <ellipse cx="345" cy="280" rx="22" ry="10" fill="currentColor" opacity="0.25" transform="rotate(25 345 280)" />
        </motion.svg>

        {/* Layer 2 - Bottom-left bloom (medium parallax) */}
        <motion.svg
          className="absolute bottom-0 left-0 w-96 h-96 text-[#8B6914] opacity-[0.08]"
          viewBox="0 0 320 320"
          fill="none"
          style={{ y: bgY2 }}
        >
          <motion.circle
            cx="60" cy="260" r="45" fill="currentColor" opacity="0.2"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="100" cy="280" r="30" fill="currentColor" opacity="0.15" />
          <circle cx="30" cy="290" r="25" fill="currentColor" opacity="0.2" />
          <line x1="60" y1="215" x2="60" y2="0" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
          <ellipse cx="80" cy="150" rx="20" ry="10" fill="currentColor" opacity="0.2" transform="rotate(20 80 150)" />
          <ellipse cx="40" cy="100" rx="18" ry="9" fill="currentColor" opacity="0.15" transform="rotate(-20 40 100)" />
        </motion.svg>

        {/* Layer 3 - Scattered pollen (fast parallax) */}
        <motion.svg
          className="absolute top-1/3 left-1/4 w-64 h-64 text-[#7C9A7E] opacity-[0.12]"
          viewBox="0 0 256 256"
          fill="none"
          style={{ y: bgY3 }}
        >
          <circle cx="30" cy="40" r="4" fill="currentColor" opacity="0.3" />
          <circle cx="80" cy="20" r="3" fill="currentColor" opacity="0.2" />
          <circle cx="200" cy="60" r="5" fill="currentColor" opacity="0.25" />
          <circle cx="150" cy="200" r="4" fill="currentColor" opacity="0.2" />
          <circle cx="50" cy="180" r="3" fill="currentColor" opacity="0.3" />
          <circle cx="220" cy="180" r="4" fill="currentColor" opacity="0.2" />
        </motion.svg>

        {/* Floating particles with physics-based spring animation */}
        {[
          { top: '20%', left: '15%', size: 6, color: '#7C9A7E', delay: 0 },
          { top: '70%', right: '20%', size: 4, color: '#8B6914', delay: 1.5 },
          { top: '45%', left: '60%', size: 3, color: '#7C9A7E', delay: 3 },
          { top: '30%', right: '35%', size: 5, color: '#8B6914', delay: 0.5 },
          { top: '60%', left: '30%', size: 4, color: '#7C9A7E', delay: 2 },
          { top: '80%', left: '70%', size: 3, color: '#8B6914', delay: 4 },
          { top: '15%', right: '15%', size: 5, color: '#7C9A7E', delay: 1 },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: p.top,
              left: 'left' in p ? p.left : undefined,
              right: 'right' in p ? p.right : undefined,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -20, 5, -15, 0],
              x: [0, 5, -3, 8, 0],
              scale: [1, 1.2, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Hero Content - moves with scroll parallax */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Animated decorative line + label */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
          <motion.div
            className="h-px w-16 bg-[#7C9A7E] origin-right"
            variants={lineGrow}
          />
          <span className="font-inter text-xs tracking-[0.3em] text-[#7C9A7E] uppercase">
            Artisan fleuriste · Bordeaux
          </span>
          <motion.div
            className="h-px w-16 bg-[#7C9A7E] origin-left"
            variants={lineGrow}
          />
        </motion.div>

        {/* Main title - letter by letter reveal */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-playfair text-7xl md:text-9xl font-bold text-[#2C2C2C] leading-none tracking-tight flex justify-center"
            aria-label="KRAFT"
          >
            {titleLetters.map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { y: '120%', rotate: 8 },
                  show: {
                    y: '0%',
                    rotate: 0,
                    transition: {
                      duration: 0.9,
                      delay: 2.5 + i * 0.06,
                      ease: expoOut,
                    },
                  },
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="font-playfair text-xl md:text-2xl text-[#8B6914] italic mb-4 leading-relaxed"
        >
          La ou la nature devient art,
          <br />
          chaque fleur raconte une histoire.
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="font-inter text-base text-[#5C5C5C] mb-12 max-w-md mx-auto leading-relaxed"
        >
          Bouquets, compositions et creations florales faconnes avec passion,
          dans le respect des saisons et des matieres naturelles.
        </motion.p>

        {/* CTA Button - magnetic */}
        <motion.div variants={fadeUp}>
          <MagneticButton strength={0.3}>
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center gap-3 bg-[#7C9A7E] text-white font-inter text-sm tracking-widest uppercase px-8 py-4 overflow-hidden cursor-pointer"
              whileHover={{
                backgroundColor: '#5C7A5E',
                boxShadow: '0 20px 40px rgba(124,154,126,0.35)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              {/* Shimmer sweep */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
              <span className="relative">Nous contacter</span>
              <motion.svg
                className="relative w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </motion.a>
          </MagneticButton>
        </motion.div>

        {/* Rating badge - staggered stars */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex items-center justify-center gap-2"
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.svg
                key={i}
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 3.6 + i * 0.08,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                <path
                  d="M7 1l1.545 3.13 3.455.502-2.5 2.438.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.632l3.455-.502L7 1z"
                  fill={i <= 4 ? "#8B6914" : "none"}
                  stroke="#8B6914"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </motion.svg>
            ))}
          </div>
          <span className="font-inter text-xs text-[#8B6914] font-medium">4,8 sur Google</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
      >
        <motion.span
          className="font-inter text-[10px] tracking-[0.2em] text-[#7C9A7E]/60 uppercase"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="h-12 w-px bg-gradient-to-b from-[#7C9A7E] to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
