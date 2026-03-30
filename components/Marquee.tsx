'use client';

import { useRef, ReactNode } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

interface MarqueeProps {
  children: ReactNode;
  baseVelocity?: number;
  className?: string;
}

export default function Marquee({
  children,
  baseVelocity = -2,
  className = '',
}: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {/* Repeat content 4 times for seamless loop */}
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="flex-shrink-0 flex items-center">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
