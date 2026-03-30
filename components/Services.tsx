'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { expo, expoOut } from '@/lib/animations';
import Marquee from '@/components/Marquee';

const services = [
  {
    title: "Bouquets",
    subtitle: "Sur mesure & de saison",
    description:
      "Des bouquets composes avec les plus belles fleurs du moment, faconnes selon vos envies, vos couleurs, vos emotions. Chaque bouquet est une creation unique enveloppee de papier kraft.",
    gradient: "from-[#7C9A7E] via-[#6B8A6D] to-[#5C7A5E]",
    accent: "#7C9A7E",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="32" cy="18" r="12" fill="white" opacity="0.8" />
        <circle cx="32" cy="18" r="7" fill="white" opacity="0.9" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={i}
            cx={32 + 12 * Math.cos((angle * Math.PI) / 180)}
            cy={18 + 12 * Math.sin((angle * Math.PI) / 180)}
            rx="5"
            ry="3"
            fill="white"
            opacity="0.6"
            transform={`rotate(${angle} ${32 + 12 * Math.cos((angle * Math.PI) / 180)} ${18 + 12 * Math.sin((angle * Math.PI) / 180)})`}
          />
        ))}
        <path d="M32 30 L32 58" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <ellipse cx="26" cy="44" rx="10" ry="5" fill="white" opacity="0.4" transform="rotate(-20 26 44)" />
        <ellipse cx="38" cy="50" rx="9" ry="4" fill="white" opacity="0.35" transform="rotate(20 38 50)" />
      </svg>
    ),
  },
  {
    title: "Compositions",
    subtitle: "Vegetal & art de vivre",
    description:
      "Coupes, terrariums, compositions en vase ou en coupe — pour habiller votre interieur d'une touche vegetale delicate et durable, inspiree des jardins botaniques.",
    gradient: "from-[#8B6914] via-[#7A5C10] to-[#6B4F10]",
    accent: "#8B6914",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M22 56 C20 56 18 52 18 48 L20 34 L44 34 L46 48 C46 52 44 56 42 56 Z" fill="white" opacity="0.5" />
        <path d="M24 34 C22 28 22 24 32 22 C42 24 42 28 40 34" fill="white" opacity="0.3" />
        <path d="M32 34 L32 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        <path d="M32 28 L22 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M32 28 L42 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="32" cy="12" r="6" fill="white" opacity="0.8" />
        <circle cx="20" cy="14" r="5" fill="white" opacity="0.7" />
        <circle cx="44" cy="14" r="5" fill="white" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Evenements",
    subtitle: "Mariages & occasions",
    description:
      "Decoration florale pour vos mariages, anniversaires, ceremonies et evenements professionnels. Nous creons l'ambiance de votre moment, des tables aux arches en passant par les boutonnieres.",
    gradient: "from-[#9DB59F] via-[#85A087] to-[#7C9A7E]",
    accent: "#9DB59F",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <path d="M12 48 C12 30 20 20 32 18 C44 20 52 30 52 48" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
        <circle cx="12" cy="48" r="7" fill="white" opacity="0.7" />
        <circle cx="52" cy="48" r="7" fill="white" opacity="0.7" />
        <circle cx="32" cy="18" r="8" fill="white" opacity="0.8" />
        <circle cx="32" cy="18" r="4" fill="white" opacity="1" />
        <circle cx="20" cy="28" r="5" fill="white" opacity="0.6" />
        <circle cx="44" cy="28" r="5" fill="white" opacity="0.6" />
        <ellipse cx="24" cy="40" rx="8" ry="4" fill="white" opacity="0.3" transform="rotate(-15 24 40)" />
        <ellipse cx="40" cy="40" rx="8" ry="4" fill="white" opacity="0.3" transform="rotate(15 40 40)" />
        <path d="M12 56 L52 56" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: expo,
      }}
      style={{ perspective: 800 }}
    >
      <motion.div
        className="group relative overflow-hidden cursor-pointer card-shine-hover"
        whileHover={{
          y: -8,
          rotateY: 3,
          rotateX: -2,
          transition: { type: 'spring', stiffness: 200, damping: 20 },
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Gradient card */}
        <div
          className={`bg-gradient-to-br ${service.gradient} p-8 pt-10 pb-10 h-full flex flex-col transition-shadow duration-500 group-hover:shadow-2xl`}
        >
          {/* Animated icon */}
          <motion.div
            className="mb-6"
            whileHover={{ scale: 1.15, rotate: 5, y: -4 }}
            transition={{ type: 'spring', stiffness: 250, damping: 15 }}
          >
            {service.icon}
          </motion.div>

          {/* Text */}
          <h3 className="font-playfair text-2xl font-bold text-white mb-1">
            {service.title}
          </h3>
          <p className="font-inter text-xs tracking-widest text-white/70 uppercase mb-5">
            {service.subtitle}
          </p>
          <p className="font-inter text-sm text-white/80 leading-relaxed flex-1">
            {service.description}
          </p>

          {/* Decorative corner element */}
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
            whileHover={{ scale: 1.3, opacity: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <svg viewBox="0 0 128 128" fill="none">
              <circle cx="100" cy="100" r="60" fill="white" />
              <circle cx="80" cy="80" r="40" fill="white" />
            </svg>
          </motion.div>
        </div>

        {/* Bottom accent line with animated shimmer */}
        <div className="relative h-1 w-full overflow-hidden transition-all duration-500 group-hover:h-1.5" style={{ backgroundColor: service.accent }}>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#F5F0E8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="h-px w-10 bg-[#7C9A7E] origin-right"
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: expo }}
            />
            <span className="font-inter text-xs tracking-[0.3em] text-[#7C9A7E] uppercase">
              Savoir-faire
            </span>
            <motion.div
              className="h-px w-10 bg-[#7C9A7E] origin-left"
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: expo }}
            />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h2
              className="font-playfair text-4xl md:text-5xl font-bold text-[#2C2C2C] leading-tight"
              initial={{ y: '100%' }}
              animate={headerInView ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: expoOut }}
            >
              Nos <em className="text-[#8B6914] not-italic">creations</em>
            </motion.h2>
          </div>

          <motion.p
            className="mt-4 font-inter text-base text-[#5C5C5C] max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: expo }}
          >
            Du bouquet du quotidien a la decoration evenementielle, chaque realisation porte
            la signature d&apos;un geste soigne et d&apos;une matiere naturelle.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Velocity-sensitive marquee */}
        <div className="mt-16">
          <Marquee baseVelocity={-1.5}>
            <span className="flex items-center gap-8 mx-8">
              <span className="font-playfair text-xl italic text-[#8B6914] whitespace-nowrap">
                Chaque creation est unique
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C9A7E] flex-shrink-0" />
              <span className="font-playfair text-xl italic text-[#7C9A7E] whitespace-nowrap">
                Parlez-nous de votre projet
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B6914] flex-shrink-0" />
            </span>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
