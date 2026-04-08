'use client';

import { useState } from 'react';
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

interface FlipCardGridProps {
  projects: Project[];
}

export default function FlipCardGrid({ projects }: FlipCardGridProps) {
  const [flipped, setFlipped] = useState<string | null>(null);

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
            Quick Look
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hover over a card to see more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: false }}
              className="h-72 cursor-pointer"
              style={{ perspective: 1000 }}
              onMouseEnter={() => setFlipped(project.id)}
              onMouseLeave={() => setFlipped(null)}
            >
              {/* Single rotating wrapper — both faces are children */}
              <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped === project.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative w-full h-full squircle-a-20 overflow-hidden bg-gray-800 border border-gray-700 group hover:border-gray-600 transition-colors duration-300">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="w-full h-full squircle-a-20 overflow-hidden bg-gray-900 border border-gray-700 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-sm text-gray-400 line-clamp-4">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 squircle-a-10 bg-gray-800 text-gray-300 border border-gray-700"
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
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 squircle-a-full bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-3 h-3" />
                            {project.githubBackend ? 'Frontend' : 'GitHub'}
                          </a>
                        )}
                        {project.githubBackend && (
                          <a
                            href={project.githubBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 squircle-a-full bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-3 h-3" />
                            Backend
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 squircle-a-full bg-white text-black font-medium hover:bg-gray-200 transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-3 h-3" />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
