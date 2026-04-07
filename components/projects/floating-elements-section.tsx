'use client';

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

interface FloatingElementsSectionProps {
  projects: Project[];
}

export default function FloatingElementsSection({ projects }: FloatingElementsSectionProps) {
  // Floating animation variants for staggered movement
  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -20, 0],
      x: [0, i % 2 === 0 ? 10 : -10, 0],
      transition: {
        duration: 6 + i,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Floating Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch projects float with smooth parallax as you scroll
          </p>
        </motion.div>

        <div className="relative h-[800px] md:h-[600px]">
          {/* Floating Cards */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            custom={0}
            className="absolute top-0 left-0 w-72 h-64 rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-shadow"
          >
            {projects[0] && (
              <>
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">{projects[0].title}</h3>
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            variants={floatingVariants}
            animate="animate"
            custom={1}
            className="absolute top-32 right-0 w-80 h-72 rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-shadow"
          >
            {projects[1] && (
              <>
                <Image
                  src={projects[1].image}
                  alt={projects[1].title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">{projects[1].title}</h3>
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            variants={floatingVariants}
            animate="animate"
            custom={2}
            className="absolute bottom-20 left-1/4 w-64 h-60 rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-shadow"
          >
            {projects[2] && (
              <>
                <Image
                  src={projects[2].image}
                  alt={projects[2].title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">{projects[2].title}</h3>
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            variants={floatingVariants}
            animate="animate"
            custom={3}
            className="absolute bottom-32 right-1/4 w-72 h-68 rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-shadow"
          >
            {projects[3] && (
              <>
                <Image
                  src={projects[3].image}
                  alt={projects[3].title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">{projects[3].title}</h3>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Background blur effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
