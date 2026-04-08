'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

interface FloatingElementsSectionProps {
  projects: Project[];
}

export default function FloatingElementsSection({ projects }: FloatingElementsSectionProps) {
  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -20, 0],
      x: [0, i % 2 === 0 ? 10 : -10, 0],
      transition: {
        duration: 6 + i,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    }),
  };

  const floatingCards = [
    { index: 0, className: 'absolute top-0 left-0 w-72 h-64' },
    { index: 1, className: 'absolute top-32 right-0 w-80 h-72' },
    { index: 2, className: 'absolute bottom-20 left-1/4 w-64 h-60' },
    { index: 3, className: 'absolute bottom-32 right-1/4 w-72 h-64' },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-black">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bungee mb-4 text-white">
            Gallery
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A different perspective
          </p>
        </motion.div>

        <div className="relative h-[800px] md:h-[600px]">
          {floatingCards.map(({ index, className }) => (
            <motion.div
              key={index}
              variants={floatingVariants}
              animate="animate"
              custom={index}
              className={`${className} squircle-a-20 overflow-hidden border border-gray-800 shadow-xl hover:shadow-2xl hover:border-gray-600 transition-all duration-300`}
            >
              {projects[index] && (
                <>
                  <Image
                    src={projects[index].image}
                    alt={projects[index].title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">{projects[index].title}</h3>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background blur effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-800/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
