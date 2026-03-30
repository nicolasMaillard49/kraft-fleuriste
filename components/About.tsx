'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, type Variants } from 'framer-motion';
import { expo, expoOut } from '@/lib/animations';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: expo },
  }),
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay, ease: expo },
  }),
};

const values = [
  { label: "Saison", desc: "Fleurs de saison uniquement" },
  { label: "Local", desc: "Producteurs regionaux" },
  { label: "Sur mesure", desc: "Chaque bouquet est unique" },
];

const paragraphs = [
  "Nee d'une passion profonde pour la botanique et le travail manuel, KRAFT est une adresse bordelaise ou chaque creation florale est pensee comme une oeuvre unique.",
  "Nous travaillons en priorite avec des fleurs de saison, sourcees aupres de producteurs locaux et de marches aux fleurs regionaux, pour offrir des bouquets vivants, genereux et authentiques.",
  "Le nom KRAFT evoque la matiere brute, le papier naturel, les attaches de raphia — un retour a l'essentiel, a la texture, a la sincerite du geste artisanal.",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, amount: 0.2 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const frameRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-[#FAFAF7] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div ref={textRef}>
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={slideLeft}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0}
            >
              <motion.div
                className="h-px w-10 bg-[#7C9A7E] origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: expo }}
              />
              <span className="font-inter text-xs tracking-[0.3em] text-[#7C9A7E] uppercase">
                Notre histoire
              </span>
            </motion.div>

            <motion.h2
              className="font-playfair text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-8 leading-tight"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0.1}
            >
              <span className="overflow-hidden inline-block">
                <motion.span
                  className="inline-block"
                  initial={{ y: '100%' }}
                  animate={isInView ? { y: 0 } : { y: '100%' }}
                  transition={{ duration: 0.8, delay: 0.15, ease: expoOut }}
                >
                  L&apos;art floral
                </motion.span>
              </span>
              <br />
              <span className="overflow-hidden inline-block">
                <motion.em
                  className="text-[#8B6914] not-italic inline-block"
                  initial={{ y: '100%' }}
                  animate={isInView ? { y: 0 } : { y: '100%' }}
                  transition={{ duration: 0.8, delay: 0.25, ease: expoOut }}
                >
                  au naturel
                </motion.em>
              </span>
            </motion.h2>

            <div className="space-y-5 font-inter text-base text-[#5C5C5C] leading-relaxed">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  custom={0.3 + i * 0.12}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Values */}
            <motion.div
              className="mt-10 pt-10 border-t border-[#E8E0D0]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="grid grid-cols-3 gap-6">
                {values.map((v, i) => (
                  <motion.div
                    key={v.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.8 + i * 0.15,
                      ease: expo,
                    }}
                  >
                    <motion.p
                      className="font-playfair text-lg font-bold text-[#8B6914]"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      {v.label}
                    </motion.p>
                    <p className="font-inter text-xs text-[#5C5C5C] mt-1">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image / Illustration side */}
          <motion.div
            ref={imageRef}
            className="relative"
            style={{ y: imageY }}
          >
            {/* Decorative frame with rotation based on scroll */}
            <motion.div
              className="absolute -top-4 -left-4 w-full h-full border-2 border-[#E8E0D0]"
              style={{ rotate: frameRotate }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.2, ease: expo }}
            />

            {/* Main visual */}
            <motion.div
              className="relative bg-gradient-to-br from-[#7C9A7E] via-[#5C7A5E] to-[#4a6b4c] aspect-[4/5] flex items-center justify-center overflow-hidden"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={imageInView ? { clipPath: 'inset(0% 0 0 0)' } : { clipPath: 'inset(100% 0 0 0)' }}
              transition={{ duration: 1.2, delay: 0.1, ease: expoOut }}
            >
              {/* Botanical SVG with individual element animations */}
              <svg
                viewBox="0 0 300 375"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4/5 h-4/5 opacity-40"
              >
                {/* Main stem - draw animation */}
                <motion.path
                  d="M150 370 C150 370 148 200 150 50"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={imageInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 2, delay: 0.5, ease: expo }}
                />

                {/* Large flower top */}
                <motion.circle
                  cx="150" cy="60" r="35" fill="white" opacity="0.6"
                  initial={{ scale: 0 }}
                  animate={imageInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.8, delay: 1.2, type: 'spring', stiffness: 100 }}
                />
                <motion.circle
                  cx="150" cy="60" r="22" fill="white" opacity="0.8"
                  initial={{ scale: 0 }}
                  animate={imageInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.4, type: 'spring', stiffness: 120 }}
                />
                <motion.circle
                  cx="150" cy="60" r="10" fill="white" opacity="1"
                  initial={{ scale: 0 }}
                  animate={imageInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.5, type: 'spring', stiffness: 150 }}
                />

                {/* Petals - bloom outward with spring */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <motion.ellipse
                    key={i}
                    cx={150 + 35 * Math.cos((angle * Math.PI) / 180)}
                    cy={60 + 35 * Math.sin((angle * Math.PI) / 180)}
                    rx="12"
                    ry="8"
                    fill="white"
                    opacity="0.5"
                    transform={`rotate(${angle} ${150 + 35 * Math.cos((angle * Math.PI) / 180)} ${60 + 35 * Math.sin((angle * Math.PI) / 180)})`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={imageInView ? { scale: 1, opacity: 0.5 } : { scale: 0, opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.6 + i * 0.06,
                      type: 'spring',
                      stiffness: 100,
                    }}
                  />
                ))}

                {/* Branch left - draw */}
                <motion.path
                  d="M150 180 C130 170 100 160 75 150"
                  stroke="white" strokeWidth="2" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={imageInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1, delay: 1.3, ease: expo }}
                />
                <motion.circle
                  cx="70" cy="148" r="20" fill="white" opacity="0.4"
                  initial={{ scale: 0 }}
                  animate={imageInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.8, type: 'spring', stiffness: 100 }}
                />
                <motion.circle
                  cx="70" cy="148" r="12" fill="white" opacity="0.5"
                  initial={{ scale: 0 }}
                  animate={imageInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.9, type: 'spring', stiffness: 120 }}
                />
                <ellipse cx="115" cy="163" rx="18" ry="8" fill="white" opacity="0.4" transform="rotate(-15 115 163)" />

                {/* Branch right - draw */}
                <motion.path
                  d="M150 240 C170 230 200 220 225 210"
                  stroke="white" strokeWidth="2" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={imageInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1, delay: 1.5, ease: expo }}
                />
                <motion.circle
                  cx="230" cy="208" r="18" fill="white" opacity="0.4"
                  initial={{ scale: 0 }}
                  animate={imageInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 2, type: 'spring', stiffness: 100 }}
                />
                <motion.circle
                  cx="230" cy="208" r="11" fill="white" opacity="0.5"
                  initial={{ scale: 0 }}
                  animate={imageInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 2.1, type: 'spring', stiffness: 120 }}
                />
                <ellipse cx="190" cy="222" rx="16" ry="7" fill="white" opacity="0.35" transform="rotate(15 190 222)" />

                {/* Small flower */}
                <motion.path
                  d="M150 300 C140 285 125 275 110 270"
                  stroke="white" strokeWidth="1.5" strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={imageInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 0.8, delay: 1.7, ease: expo }}
                />
                <circle cx="106" cy="268" r="14" fill="white" opacity="0.35" />
                <circle cx="106" cy="268" r="8" fill="white" opacity="0.5" />

                {/* Grass base */}
                <path d="M140 370 C135 350 132 330 130 310" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                <path d="M160 370 C165 345 168 320 165 300" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
                <path d="M145 370 C138 355 130 345 125 335" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
              </svg>

              {/* Quote overlay */}
              <motion.div
                className="absolute bottom-8 left-8 right-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 2.2, ease: expo }}
              >
                <p className="font-playfair text-white text-lg italic opacity-90 leading-snug">
                  &ldquo;La fleur est la poesie de la nature.&rdquo;
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
