'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { expo, expoOut } from '@/lib/animations';

const PLACE_ID = "ChIJwevfna8nVQ0R5xlM2qqf-H4";

const hours = [
  { day: "Lundi", time: "Ferme" },
  { day: "Mardi", time: "10h-13h / 16h-19h" },
  { day: "Mercredi", time: "10h-13h / 16h-19h" },
  { day: "Jeudi", time: "10h-13h / 16h-19h" },
  { day: "Vendredi", time: "10h-13h / 16h-19h" },
  { day: "Samedi", time: "10h-13h / 15h-19h" },
  { day: "Dimanche", time: "9h30-12h30" },
];

function AnimatedRating() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayVal, setDisplayVal] = useState('0,0');

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, 4.8, {
      duration: 1.5,
      ease: expo,
      onUpdate: (v) => setDisplayVal(v.toFixed(1).replace('.', ',')),
    });
    return controls.stop;
  }, [isInView]);

  return (
    <div ref={ref}>
      <p className="font-inter text-xs tracking-widest text-[#7C9A7E] uppercase mb-1">
        Avis Google
      </p>
      <p className="font-playfair text-xl text-[#2C2C2C]">{displayVal} / 5</p>
      <p className="font-inter text-sm text-[#5C5C5C]">Excellente reputation</p>
    </div>
  );
}

const contactItems = [
  {
    key: 'address',
    label: 'Adresse',
    iconPath: (
      <>
        <path d="M9 1C5.686 1 3 3.686 3 7c0 5 6 10 6 10s6-5 6-10c0-3.314-2.686-6-6-6z" className="fill-[#7C9A7E] group-hover:fill-white transition-colors duration-300" />
        <circle cx="9" cy="7" r="2" className="fill-white group-hover:fill-[#7C9A7E] transition-colors duration-300" />
      </>
    ),
  },
  {
    key: 'phone',
    label: 'Telephone',
    iconPath: (
      <path d="M14.5 11.5c-.8-.8-2-.8-2.8 0l-.6.6C9.5 11 7 8.5 5.9 6.9l.6-.6c.8-.8.8-2 0-2.8L5 2c-.8-.8-2-.8-2.8 0L1.5 2.7C.7 3.5.7 4.7 1.1 5.7c2.2 5 6.2 9 11.2 11.2 1 .4 2.2.4 3-.4l.7-.7c.8-.8.8-2 0-2.8l-1.5-1.5z" className="fill-[#7C9A7E] group-hover:fill-white transition-colors duration-300" />
    ),
  },
  {
    key: 'rating',
    label: 'Avis',
    iconPath: (
      <path d="M9 1.5l2.06 4.18 4.61.67-3.34 3.25.79 4.59L9 12.12l-4.12 2.07.79-4.59L2.33 6.35l4.61-.67L9 1.5z" className="fill-[#8B6914] group-hover:fill-white transition-colors duration-300" stroke="#8B6914" strokeWidth="1" strokeLinejoin="round" />
    ),
  },
];

export default function Contact() {
  const mapsUrl = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const infosRef = useRef<HTMLDivElement>(null);
  const infosInView = useInView(infosRef, { once: true, amount: 0.2 });
  const hoursRef = useRef<HTMLDivElement>(null);
  const hoursInView = useInView(hoursRef, { once: true, amount: 0.2 });

  return (
    <section id="contact" className="py-24 bg-[#FAFAF7] overflow-hidden">
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
              Venir nous voir
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
              Nous <em className="text-[#8B6914] not-italic">trouver</em>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Infos */}
          <div ref={infosRef} className="space-y-10">
            {/* Address */}
            <motion.div
              className="flex gap-5 group"
              initial={{ opacity: 0, x: -40 }}
              animate={infosInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0, ease: expo }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#7C9A7E]"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  {contactItems[0].iconPath}
                </svg>
              </motion.div>
              <div>
                <p className="font-inter text-xs tracking-widest text-[#7C9A7E] uppercase mb-1">Adresse</p>
                <p className="font-playfair text-xl text-[#2C2C2C]">278 Cours de la Somme</p>
                <p className="font-inter text-base text-[#5C5C5C]">33000 Bordeaux, France</p>
                <motion.a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 font-inter text-sm text-[#8B6914] hover:text-[#6B4F10] transition-colors duration-200 cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="underline underline-offset-4">Voir sur Google Maps</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex gap-5 group"
              initial={{ opacity: 0, x: -40 }}
              animate={infosInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: expo }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#7C9A7E]"
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  {contactItems[1].iconPath}
                </svg>
              </motion.div>
              <div>
                <p className="font-inter text-xs tracking-widest text-[#7C9A7E] uppercase mb-1">Telephone</p>
                <motion.a
                  href="tel:+33557673259"
                  className="font-playfair text-xl text-[#2C2C2C] hover:text-[#8B6914] transition-colors duration-200 cursor-pointer"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  05 57 67 32 59
                </motion.a>
              </div>
            </motion.div>

            {/* Rating */}
            <motion.div
              className="flex gap-5 group"
              initial={{ opacity: 0, x: -40 }}
              animate={infosInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: expo }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#8B6914]"
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  {contactItems[2].iconPath}
                </svg>
              </motion.div>
              <AnimatedRating />
            </motion.div>
          </div>

          {/* Horaires */}
          <div ref={hoursRef}>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: 40 }}
              animate={hoursInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: expo }}
            >
              <p className="font-inter text-xs tracking-widest text-[#7C9A7E] uppercase mb-2">
                Horaires d&apos;ouverture
              </p>
              <h3 className="font-playfair text-2xl text-[#2C2C2C]">
                Quand nous rendre visite
              </h3>
            </motion.div>

            <div className="divide-y divide-[#E8E0D0]">
              {hours.map(({ day, time }, i) => (
                <motion.div
                  key={day}
                  className={`flex justify-between items-center py-3.5 transition-all duration-300 hover:px-2 hover:bg-[#F5F0E8]/50 cursor-default ${
                    time === "Ferme" ? "opacity-50" : ""
                  }`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={hoursInView ? { opacity: time === "Ferme" ? 0.5 : 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.07,
                    ease: expo,
                  }}
                >
                  <span className="font-inter text-sm text-[#2C2C2C] font-medium">{day}</span>
                  <span className={`font-inter text-sm ${time === "Ferme" ? "text-[#aaa]" : "text-[#8B6914]"}`}>
                    {time}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-10 p-6 bg-[#F5F0E8] border-l-4 border-[#7C9A7E] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={hoursInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: expo }}
              whileHover={{
                borderLeftWidth: 8,
                boxShadow: '0 10px 30px rgba(124,154,126,0.15)',
              }}
            >
              <p className="font-playfair text-lg text-[#2C2C2C] mb-1">
                Un projet particulier ?
              </p>
              <p className="font-inter text-sm text-[#5C5C5C] mb-4">
                N&apos;hesitez pas a nous appeler pour discuter de vos creations sur mesure.
              </p>
              <motion.a
                href="tel:+33557673259"
                className="group inline-flex items-center gap-2 bg-[#7C9A7E] text-white font-inter text-xs tracking-widest uppercase px-6 py-3 cursor-pointer relative overflow-hidden"
                whileHover={{
                  backgroundColor: '#5C7A5E',
                  boxShadow: '0 12px 24px rgba(124,154,126,0.3)',
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative">Appeler maintenant</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
