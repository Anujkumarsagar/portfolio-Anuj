'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

interface FlipCardGridProps {
  projects: Project[];
}

export default function FlipCardGrid({ projects }: FlipCardGridProps) {
  const [flipped, setFlipped] = useState<string | null>(null);

  const flipVariants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
    back: {
      rotateY: 180,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  return (
    <section className="relative py-20 px-4 bg-background/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Interactive 3D Cards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hover to flip and discover project details
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
              onMouseEnter={() => setFlipped(project.id)}
              onMouseLeave={() => setFlipped(null)}
            >
              <motion.div
                variants={flipVariants}
                animate={flipped === project.id ? 'back' : 'front'}
                style={{ perspective: 1000 }}
                className="relative w-full h-full"
              >
                {/* Front of card */}
                <motion.div
                  animate={{ rotateY: flipped === project.id ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-secondary border border-border group hover:border-primary/50 transition-colors duration-300">
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
                </motion.div>

                {/* Back of card */}
                <motion.div
                  animate={{ rotateY: flipped === project.id ? 0 : -180 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="w-full h-full rounded-xl overflow-hidden bg-primary/90 border border-primary/50 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-sm text-white/90 line-clamp-4">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded bg-white/20 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-sm font-semibold text-white hover:underline"
                        >
                          Visit →
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
