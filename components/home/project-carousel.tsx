"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ExternalLink, GithubIcon } from "lucide-react";
import "./project-carousel.css";

interface ProjectCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags?: string[];
}

interface ProjectCarouselProps {
  projects: ProjectCardData[];
}

const ProjectCard = ({
  project,
  isActive,
  onHover,
}: {
  project: ProjectCardData;
  isActive: boolean;
  onHover: (id: string | null) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    if (isActive) {
      gsap.to(cardRef.current, {
        flex: "0 0 70%",
        duration: 0.6,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(cardRef.current, {
        flex: "0 0 15%",
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  }, [isActive]);

  return (
    <motion.div
      ref={cardRef}
      className="project-card group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col cursor-pointer transition-all duration-500 flex-shrink-0"
      style={{ flex: isActive ? "0 0 70%" : "0 0 15%" }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ y: -5 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
        {/* Top Section */}
        <div>
          <motion.h3
            className="text-xl md:text-2xl font-bungee text-white mb-3 overflow-hidden text-ellipsis whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          {isActive && (
            <motion.p
              className="text-sm md:text-base text-gray-300 line-clamp-3 md:line-clamp-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {project.description}
            </motion.p>
          )}
        </div>

        {/* Bottom Section */}
        {isActive && (
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs md:text-sm bg-white/10 hover:bg-white/20 rounded-full text-gray-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        {/* Action Buttons */}
        {isActive && (
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
              <span className="hidden sm:inline">Visit</span>
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GithubIcon size={16} />
              <span className="hidden sm:inline">Code</span>
            </motion.a>
          </motion.div>
        )}
      </div>

      {/* Hover Gradient Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors duration-500"></div>
    </motion.div>
  );
};

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<string | null>(
    projects[0]?.id || null
  );

  // Apply smooth scroll behavior to the document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <motion.section
      id="projects"
      className="py-12 md:py-20 px-4 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-bungee text-white mb-3">
              Featured
              <br />
              Projects
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-md">
              A curated selection of my work in engineering and product design.
              Hover to explore each project.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bungee text-white">
                {projects.length}
              </p>
              <p className="text-gray-400 text-xs md:text-sm">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bungee text-white">100%</p>
              <p className="text-gray-400 text-xs md:text-sm">Delivered</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Carousel Container */}
      <motion.div
        ref={containerRef}
        className="project-carousel-container overflow-hidden rounded-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex gap-4 md:gap-6 h-[400px] md:h-[500px]">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              onHover={setActiveProject}
            />
          ))}
        </div>
      </motion.div>

      {/* Navigation Info */}
      <motion.p
        className="text-center text-gray-500 text-sm mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hover over a project to see details
      </motion.p>
    </motion.section>
  );
};

export default ProjectCarousel;
