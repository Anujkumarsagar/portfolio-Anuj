'use client';

import { motion } from 'framer-motion';
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

interface TimelineViewProps {
  projects: Project[];
}

export default function TimelineView({ projects }: TimelineViewProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="relative py-20 px-4 bg-black">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bungee mb-4 text-white">
            Timeline
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            All projects, one after another
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="flex gap-6 md:gap-8 items-stretch"
            >
              {/* Timeline marker */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: false }}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold z-10 relative"
                >
                  {index + 1}
                </motion.div>
                {index < projects.length - 1 && (
                  <div className="w-1 flex-1 bg-gradient-to-b from-white to-gray-800 min-h-32" />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 pb-8 md:pb-0">
                <motion.div className="group relative squircle-a-20 border border-gray-800 bg-gray-900 p-6 hover:border-gray-600 transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Image */}
                    <div className="md:col-span-1 h-48 md:h-full squircle-a-15 overflow-hidden bg-gray-800 relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gray-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 squircle-a-full bg-gray-800 text-gray-300 border border-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
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
                              className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 squircle-a-full bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white transition-all"
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
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 squircle-a-20 pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
