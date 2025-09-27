"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cosmic E-Commerce Platform",
    description:
      "A futuristic e-commerce platform with AI-powered recommendations and holographic product displays.",
    image: "/placeholder-project1.jpg",
    technologies: ["Next.js", "TypeScript", "Three.js", "Stripe"],
    category: "Web Development",
    link: "https://example.com/project1",
    github: "https://github.com/example/project1",
  },
  {
    id: 2,
    title: "Neural Network Visualizer",
    description:
      "Interactive 3D visualization of neural networks with real-time training simulation.",
    image: "/placeholder-project2.jpg",
    technologies: ["React", "Three.js", "TensorFlow.js", "WebGL"],
    category: "Data Visualization",
    link: "https://example.com/project2",
    github: "https://github.com/example/project2",
  },
  {
    id: 3,
    title: "Quantum Computing Simulator",
    description:
      "Educational tool for simulating quantum algorithms with interactive circuit builder.",
    image: "/placeholder-project3.jpg",
    technologies: ["Python", "Qiskit", "React", "D3.js"],
    category: "Education",
    link: "https://example.com/project3",
    github: "https://github.com/example/project3",
  },
  {
    id: 4,
    title: "Bio-Luminescent Dashboard",
    description:
      "Real-time analytics dashboard with organic-inspired UI and particle effects.",
    image: "/placeholder-project4.jpg",
    technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    category: "Web Development",
    link: "https://example.com/project4",
    github: "https://github.com/example/project4",
  },
  {
    id: 5,
    title: "AI Art Generator",
    description:
      "Generative art platform using machine learning to create cosmic-inspired artwork.",
    image: "/placeholder-project5.jpg",
    technologies: ["Python", "TensorFlow", "React", "FastAPI"],
    category: "AI/ML",
    link: "https://example.com/project5",
    github: "https://github.com/example/project5",
  },
  {
    id: 6,
    title: "Space Mission Planner",
    description:
      "Collaborative platform for planning and visualizing space missions with 3D orbital mechanics.",
    image: "/placeholder-project6.jpg",
    technologies: ["React", "Three.js", "WebRTC", "Node.js"],
    category: "Web Development",
    link: "https://example.com/project6",
    github: "https://github.com/example/project6",
  },
];

const categories = [
  "All",
  "Web Development",
  "Data Visualization",
  "AI/ML",
  "Education",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-cosmic-blue text-neon-cyan">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-organic-green bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-xl text-neon-cyan/80 max-w-2xl mx-auto">
            Explore my journey through the cosmos of technology, where
            innovation meets imagination.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-neon-cyan text-cosmic-blue shadow-lg shadow-neon-cyan/50"
                  : "bg-cosmic-blue border border-neon-cyan/30 text-neon-cyan hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-cosmic-blue to-holographic-purple/20 rounded-xl overflow-hidden border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-organic-green/20 z-10" />
                <Image
                  src={`https://picsum.photos/seed/cosmic-${project.id}/400/300?blur=1`}
                  alt={`AI-generated cosmic landscape for ${project.title}`}
                  fill
                  className="object-cover opacity-80 hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 z-30">
                  <span className="inline-block bg-neon-cyan/20 text-neon-cyan px-2 py-1 rounded-full text-xs font-medium">
                    AI Generated
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300 z-20" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-neon-cyan group-hover:text-organic-green transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-neon-cyan/70 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-holographic-purple/20 text-holographic-purple rounded-full border border-holographic-purple/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center px-4 py-2 bg-neon-cyan text-cosmic-blue rounded-lg font-medium hover:bg-organic-green transition-colors duration-300"
                  >
                    View Project
                  </motion.a>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 border border-neon-cyan/50 text-neon-cyan rounded-lg hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-cosmic-blue/80 to-transparent pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-neon-cyan/60 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
