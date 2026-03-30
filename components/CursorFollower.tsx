'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Main dot springs
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Trailing ring springs (slower, heavier)
  const trailX = useSpring(cursorX, { damping: 40, stiffness: 200, mass: 0.8 });
  const trailY = useSpring(cursorY, { damping: 40, stiffness: 200, mass: 0.8 });

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Hide on touch devices
    if ('ontouchstart' in window) return;

    setVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor-hover]')) {
        setHovering(true);
      }
    };

    const handleHoverEnd = () => setHovering(false);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, [cursorX, cursorY]);

  // Render nothing but keep hooks stable
  if (!visible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[200] mix-blend-difference"
        style={{ x, y }}
      >
        <motion.div
          className="rounded-full bg-[#7C9A7E]"
          animate={{
            width: hovering ? 48 : 10,
            height: hovering ? 48 : 10,
            x: hovering ? -24 : -5,
            y: hovering ? -24 : -5,
            opacity: hovering ? 0.3 : 0.6,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[199]"
        style={{ x: trailX, y: trailY }}
      >
        <motion.div
          className="rounded-full border border-[#7C9A7E]/30"
          animate={{
            width: hovering ? 64 : 32,
            height: hovering ? 64 : 32,
            x: hovering ? -32 : -16,
            y: hovering ? -32 : -16,
            borderColor: hovering ? 'rgba(139, 105, 20, 0.4)' : 'rgba(124, 154, 126, 0.3)',
          }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        />
      </motion.div>
    </>
  );
}
