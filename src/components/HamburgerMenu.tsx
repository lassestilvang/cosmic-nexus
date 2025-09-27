'use client';

import { motion } from 'framer-motion';
import { hoverLift, hoverGlow, prefersReducedMotion } from '../lib/animations';

interface HamburgerMenuProps {
  onClick?: () => void;
  className?: string;
}

export default function HamburgerMenu({ onClick, className = '' }: HamburgerMenuProps) {
  const reducedMotion = prefersReducedMotion();

  return (
    <motion.button
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      whileHover={reducedMotion ? {} : { ...hoverLift, ...hoverGlow }}
      whileTap={reducedMotion ? {} : { scale: 0.95 }}
      className={`flex flex-col justify-center items-center w-8 h-8 space-y-1 bg-transparent border-none cursor-pointer ${className}`}
      aria-label="Menu"
    >
      <motion.div
        className="w-6 h-0.5 bg-neon-cyan rounded-full"
        initial={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="w-6 h-0.5 bg-neon-cyan rounded-full"
        initial={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="w-6 h-0.5 bg-neon-cyan rounded-full"
        initial={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}