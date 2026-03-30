'use client';

import { useScrolled } from '@/hooks/useAnimations';
import { motion } from 'framer-motion';
import { expoOut } from '@/lib/animations';

const links = [
  { label: 'A propos', href: '#about' },
  { label: 'Creations', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const scrolled = useScrolled(80);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 px-6 bg-[#F5F0E8]/80 backdrop-blur-xl shadow-[0_1px_0_rgba(124,154,126,0.15)]'
          : 'py-6 px-8 bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.2, ease: expoOut }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          className={`font-playfair font-bold tracking-widest uppercase transition-all duration-500 ${
            scrolled ? 'text-lg text-[#8B6914]' : 'text-xl text-[#8B6914]'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          KRAFT
        </motion.a>

        <div className="hidden md:flex items-center gap-8 font-inter text-sm tracking-wide">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`nav-link transition-colors duration-300 cursor-pointer ${
                scrolled ? 'text-[#2C2C2C]' : 'text-[#5C5C5C]'
              } hover:text-[#7C9A7E]`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.4 + i * 0.1, ease: expoOut }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-[#2C2C2C]' : 'bg-[#5C5C5C]'} group-hover:w-6`} />
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-[#2C2C2C]' : 'bg-[#5C5C5C]'}`} />
          <span className={`block w-4 h-px transition-all duration-300 ${scrolled ? 'bg-[#2C2C2C]' : 'bg-[#5C5C5C]'} group-hover:w-6`} />
        </button>
      </div>
    </motion.nav>
  );
}
