'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { expo } from '@/lib/animations';

export default function Footer() {
  const year = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <motion.footer
      ref={ref}
      className="bg-[#2C2C2C] text-white py-12 overflow-hidden"
      style={{ opacity, y }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: expo }}
          >
            <motion.p
              className="font-playfair text-2xl font-bold tracking-widest text-white uppercase mb-1"
              whileHover={{ color: '#7C9A7E' }}
              transition={{ duration: 0.3 }}
            >
              KRAFT
            </motion.p>
            <p className="font-inter text-xs tracking-[0.25em] text-white/50 uppercase">
              Artisan fleuriste · Bordeaux
            </p>
          </motion.div>

          <div className="hidden md:block h-12 w-px bg-white/20" />

          {/* Nav links */}
          <nav className="flex items-center gap-6 font-inter text-sm text-white/60">
            {[
              { label: 'A propos', href: '#about' },
              { label: 'Creations', href: '#services' },
              { label: 'Contact', href: '#contact' },
            ].map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="nav-link hover:text-white transition-colors duration-200 cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: expo }}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:block h-12 w-px bg-white/20" />

          {/* Address */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: expo }}
          >
            <p className="font-inter text-xs text-white/50 leading-relaxed">
              278 Cours de la Somme
              <br />
              33000 Bordeaux
              <br />
              <a href="tel:+33557673259" className="hover:text-white/80 transition-colors duration-200 cursor-pointer">
                05 57 67 32 59
              </a>
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-inter text-xs text-white/30">
            &copy; {year} KRAFT artisan fleuriste. Tous droits reserves.
          </p>
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-[#7C9A7E]"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <p className="font-inter text-xs text-white/30">
              Fait avec soin a Bordeaux
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
