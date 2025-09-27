'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation, fadeInUp, prefersReducedMotion, buttonHover, buttonTap } from '../lib/animations';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  review: string;
  rating: number;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    company: 'TechCorp',
    review: 'Incredible work! The Cosmic Nexus theme brought our project to life with stunning visuals and smooth animations.',
    rating: 5,
    logo: '/vercel.svg', // placeholder
  },
  {
    id: 2,
    name: 'Bob Smith',
    company: 'InnovateLabs',
    review: 'The interactive elements and responsive design exceeded our expectations. Highly recommend!',
    rating: 5,
    logo: '/next.svg',
  },
  {
    id: 3,
    name: 'Carol Davis',
    company: 'FutureTech',
    review: 'Blending technology and nature in such a unique way. The testimonials section is a standout feature.',
    rating: 4,
    logo: '/globe.svg',
  },
  {
    id: 4,
    name: 'David Wilson',
    company: 'SpaceX',
    review: 'The cosmic theme perfectly captures our vision. Outstanding development and attention to detail.',
    rating: 5,
    logo: '/window.svg',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useScrollAnimation();
  const reducedMotion = prefersReducedMotion();

  useEffect(() => {
    if (!reducedMotion) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000); // Auto-scroll every 5 seconds

      return () => clearInterval(interval);
    }
  }, [reducedMotion]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-16 bg-cosmic-blue">
      <div className="container mx-auto px-4">
        <motion.h2
          variants={fadeInUp}
          initial={reducedMotion ? {} : "hidden"}
          animate={inView && !reducedMotion ? "visible" : {}}
          className="text-3xl md:text-4xl font-bold text-center text-neon-cyan mb-12"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={reducedMotion ? {} : { opacity: 0, x: 100 }}
              animate={reducedMotion ? {} : { opacity: 1, x: 0 }}
              exit={reducedMotion ? {} : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-cosmic-blue to-holographic-purple/10 rounded-lg p-8 border border-neon-cyan/20 hover:border-neon-cyan/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={testimonials[currentIndex].logo}
                    alt={`${testimonials[currentIndex].company} logo`}
                    className="w-16 h-16 rounded-full bg-neon-cyan/10 p-2"
                    initial={reducedMotion ? {} : { scale: 0 }}
                    animate={reducedMotion ? {} : { scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
                  />
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    className="flex justify-center md:justify-start mb-4"
                    initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                    animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={reducedMotion ? {} : { opacity: 0, scale: 0 }}
                        animate={reducedMotion ? {} : { opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.3, type: 'spring' }}
                        className={`text-xl ${
                          i < testimonials[currentIndex].rating
                            ? 'text-organic-green'
                            : 'text-neon-cyan/30'
                        }`}
                      >
                        ★
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.blockquote
                    className="text-lg text-neon-cyan mb-4 italic"
                    initial={reducedMotion ? {} : { opacity: 0 }}
                    animate={reducedMotion ? {} : { opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    &ldquo;{testimonials[currentIndex].review}&rdquo;
                  </motion.blockquote>
                  <motion.div
                    initial={reducedMotion ? {} : { opacity: 0, y: 10 }}
                    animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <cite className="text-organic-green font-semibold block">
                      {testimonials[currentIndex].name}
                    </cite>
                    <p className="text-neon-cyan/70">{testimonials[currentIndex].company}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={reducedMotion ? {} : buttonHover}
            whileTap={reducedMotion ? {} : buttonTap}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-holographic-purple/20 hover:bg-holographic-purple/40 text-neon-cyan p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-holographic-purple/30"
            aria-label="Previous testimonial"
          >
            ‹
          </motion.button>
          <motion.button
            onClick={nextTestimonial}
            whileHover={reducedMotion ? {} : buttonHover}
            whileTap={reducedMotion ? {} : buttonTap}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-holographic-purple/20 hover:bg-holographic-purple/40 text-neon-cyan p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-holographic-purple/30"
            aria-label="Next testimonial"
          >
            ›
          </motion.button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={reducedMotion ? {} : { scale: 1.2 }}
                whileTap={reducedMotion ? {} : { scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-organic-green shadow-lg shadow-organic-green/50'
                    : 'bg-neon-cyan/30 hover:bg-neon-cyan/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}