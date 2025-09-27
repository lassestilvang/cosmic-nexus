"use client";

import { motion } from "framer-motion";
import {
  useScrollAnimation,
  fadeInUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  prefersReducedMotion,
} from "../lib/animations";
//import WeatherWidget from "../components/WeatherWidget";
import dynamic from "next/dynamic";

// Lazy load Testimonials for better performance
const Testimonials = dynamic(() => import("../components/Testimonials"), {
  loading: () => (
    <div className="py-20 text-center">
      <div className="animate-pulse text-neon-cyan/50">
        Loading testimonials...
      </div>
    </div>
  ),
});

// Lazy load the 3D cosmic sphere for performance
const CosmicSphere = dynamic(() => import("../components/CosmicSphere"), {
  ssr: false,
  loading: () => (
    <div className="w-64 h-64 bg-cosmic-blue/20 rounded-full animate-pulse" />
  ),
});

export default function Home() {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: featuresRef, inView: featuresInView } = useScrollAnimation();
  const reducedMotion = prefersReducedMotion();

  const features = [
    {
      title: "AI-Powered Innovation",
      description:
        "Harnessing the power of artificial intelligence to create groundbreaking solutions.",
      icon: "🤖",
    },
    {
      title: "Quantum Computing",
      description:
        "Exploring the frontiers of quantum mechanics for unprecedented computational power.",
      icon: "⚛️",
    },
    {
      title: "Space Exploration",
      description:
        "Pushing the boundaries of human knowledge through advanced space technology.",
      icon: "🚀",
    },
    {
      title: "Sustainable Tech",
      description:
        "Developing eco-friendly technologies that protect our planet while advancing humanity.",
      icon: "🌱",
    },
  ];

  return (
    <div className="min-h-screen bg-cosmic-blue text-neon-cyan pt-16">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, y: 50 }}
            animate={heroInView && !reducedMotion ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={reducedMotion ? {} : { opacity: 0, scale: 0.5 }}
              animate={
                heroInView && !reducedMotion ? { opacity: 1, scale: 1 } : {}
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-organic-green to-holographic-purple bg-clip-text text-transparent"
            >
              Cosmic Nexus
            </motion.h1>
            <motion.p
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={heroInView && !reducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-neon-cyan/80 mb-8 max-w-2xl mx-auto"
            >
              Blending futuristic technology with nature&apos;s wonders to
              create extraordinary digital experiences
            </motion.p>
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              animate={heroInView && !reducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={
                  reducedMotion
                    ? {}
                    : {
                        scale: 1.05,
                        boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)",
                      }
                }
                whileTap={reducedMotion ? {} : { scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-neon-cyan to-organic-green text-cosmic-blue font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Portfolio
              </motion.button>
              <motion.button
                whileHover={
                  reducedMotion
                    ? {}
                    : {
                        scale: 1.05,
                        boxShadow: "0 0 25px rgba(138, 43, 226, 0.4)",
                      }
                }
                whileTap={reducedMotion ? {} : { scale: 0.95 }}
                className="px-8 py-3 border-2 border-holographic-purple text-holographic-purple font-bold rounded-lg hover:bg-holographic-purple hover:text-cosmic-blue transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          ⚡
        </motion.div>
        <motion.div
          animate={
            reducedMotion
              ? {}
              : {
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 text-6xl opacity-20"
        >
          🌌
        </motion.div>

        {/* Weather Widget */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, x: 50 }}
          animate={heroInView && !reducedMotion ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute top-8 right-8 max-w-xs"
        >
          {/* <WeatherWidget /> */}
        </motion.div>

        {/* 3D Cosmic Sphere */}
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, scale: 0.5 }}
          animate={
            heroInView && !reducedMotion ? { opacity: 0.6, scale: 1 } : {}
          }
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none"
        >
          <CosmicSphere />
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="py-20 bg-gradient-to-b from-transparent to-cosmic-blue/50"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            initial={reducedMotion ? {} : "hidden"}
            animate={featuresInView && !reducedMotion ? "visible" : {}}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-neon-cyan to-organic-green bg-clip-text text-transparent"
          >
            Our Expertise
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial={reducedMotion ? {} : "hidden"}
            animate={featuresInView && !reducedMotion ? "visible" : {}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={
                  reducedMotion
                    ? {}
                    : {
                        y: -10,
                        boxShadow: "0 20px 40px rgba(0, 255, 255, 0.1)",
                      }
                }
                className="bg-gradient-to-br from-cosmic-blue to-holographic-purple/20 p-6 rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300"
              >
                <motion.div
                  initial={reducedMotion ? {} : { scale: 0 }}
                  animate={featuresInView && !reducedMotion ? { scale: 1 } : {}}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    duration: 0.5,
                    type: "spring",
                  }}
                  className="text-4xl mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-neon-cyan">
                  {feature.title}
                </h3>
                <p className="text-neon-cyan/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
