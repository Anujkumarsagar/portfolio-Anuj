'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="relative py-20 px-4 overflow-hidden">
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
            style={{ y: y1 }}
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
            style={{ y: y2 }}
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
            style={{ y: y3 }}
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
            style={{ y: y4 }}
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
