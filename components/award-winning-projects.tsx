"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

interface AwardProject {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  tags: string[];
  award: string;
  awardYear: number;
  links: {
    demo?: string;
    github?: string;
  };
}

const awardProjects: AwardProject[] = [
  {
    id: 1,
    title: "Recipe Sharing Platform",
    shortDescription: "Community-driven recipe discovery",
    description:
      "A full-stack application that empowers food enthusiasts to share, discover, and rate recipes. Features include user authentication, recipe management, image uploads, and an advanced filtering system. Built with modern web technologies to ensure smooth user experience and scalability.",
    image: "./assets/projects/recipe.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    award: "Best UX/UI Design",
    awardYear: 2025,
    links: {
      demo: "https://recipe-sharing-app-6b5v.onrender.com/",
      github: "https://github.com/Anujkumarsagar/Recipe-Sharing-app",
    },
  },
  {
    id: 2,
    title: "TeraMovies",
    shortDescription: "Cinematic movie discovery experience",
    description:
      "An immersive movie database and review platform that brings cinema to your screen. Features real-time search, personalized recommendations, user reviews, and advanced filtering. The application showcases modern animation techniques and responsive design principles.",
    image: "./assets/projects/recipe2.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    award: "Innovation in Animation",
    awardYear: 2025,
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    shortDescription: "Intelligent conversational interface",
    description:
      "A sophisticated AI-powered chatbot built with cutting-edge language models and real-time streaming capabilities. Features include context-aware responses, multi-turn conversations, and a beautiful animated UI that responds to user interactions seamlessly.",
    image: "./assets/projects/recipe2.png",
    tags: ["AI SDK", "OpenAI", "React", "Framer Motion"],
    award: "Best Innovation",
    awardYear: 2025,
    links: {
      demo: "#",
      github: "#",
    },
  },
];

export function AwardWinningProjects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="p-6 md:p-10 section-gradient"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-block mb-4">
            <motion.span
              className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Featured Projects
            </motion.span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bungee mb-6">
            Award Winning Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore a curated selection of projects that have been recognized for
            innovation, design, and technical excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {awardProjects.map((project, index) => (
            <AwardProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function AwardProjectCard({
  project,
  index,
}: {
  project: AwardProject;
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // Parallax effect for image
  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);

  // Content animation
  const contentX = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
          isEven ? "" : "lg:grid-flow-dense"
        }`}
      >
        {/* Image Column */}
        <motion.div
          className={`relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group ${
            !isEven && "lg:col-start-2"
          }`}
          style={{
            y: imageY,
            opacity: imageOpacity,
            scale: imageScale,
          }}
        >
          {/* Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] rounded-2xl p-1 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-black rounded-2xl" />
          </div>

          {/* Image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Award Badge */}
          <motion.div
            className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <div>
                <p className="text-xs font-medium text-white">
                  {project.award}
                </p>
                <p className="text-xs text-gray-400">{project.awardYear}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          style={{
            x: contentX,
            opacity: contentOpacity,
          }}
          className={`${isEven ? "lg:col-start-1" : ""}`}
        >
          {/* Number */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <span className="text-sm font-medium text-gray-500">
              Project {String(index + 1).padStart(2, "0")}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-3xl md:text-4xl font-bungee mb-4 text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {project.title}
          </motion.h3>

          {/* Short Description */}
          <motion.p
            className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.shortDescription}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-base leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {project.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="relative inline-flex group cursor-pointer"
              >
                <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1" />
                <span className="relative text-xs text-white px-3 py-1 bg-gray-900 rounded-full group-hover:bg-gray-800 transition-colors duration-300">
                  {tag}
                </span>
              </motion.span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1" />
                <button className="relative inline-flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-full text-white font-medium group-hover:bg-gray-800 transition-colors duration-300">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </button>
              </motion.a>
            )}
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-px rounded-full bg-gradient-to-r from-[#30cfd0] via-[#c43ad6] to-[#fdc830] transition-all duration-500 opacity-70 blur-sm group-hover:opacity-100 group-hover:-inset-1" />
                <button className="relative inline-flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-full text-white font-medium group-hover:bg-gray-800 transition-colors duration-300">
                  GitHub
                  <Github className="w-4 h-4" />
                </button>
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Divider */}
      {index < awardProjects.length - 1 && (
        <motion.div
          className="absolute -bottom-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
      )}
    </motion.div>
  );
}
