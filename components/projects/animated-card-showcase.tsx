'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  githubBackend: string;
  tags: string[];
}

interface AnimatedCardShowcaseProps {
  projects: Project[];
}

export default function AnimatedCardShowcase({ projects }: AnimatedCardShowcaseProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative py-20 px-4 bg-black">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bungee mb-4 text-white">
            Featured Work
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A few projects I&apos;m proud of
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.slice(0, 4).map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative overflow-hidden squircle-a-20 bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 bg-gray-900">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 squircle-a-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 squircle-a-full bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      {project.githubBackend ? 'Frontend' : 'GitHub'}
                    </a>
                  )}
                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Backend
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 squircle-a-full bg-white text-black font-medium hover:bg-gray-200 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
