"use client";

import { motion } from "framer-motion";
import { prefersReducedMotion } from "../../lib/animations";

export default function About() {
  const reducedMotion = prefersReducedMotion();

  return (
    <div className="min-h-screen bg-cosmic-blue text-neon-cyan">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-8">About</h1>
          <p className="text-lg">Learn more about the creator</p>
        </motion.div>
      </div>
    </div>
  );
}