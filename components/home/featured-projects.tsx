'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  tags: string[];
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleHover = (index: number) => {
      setActiveIndex(index);
      updateCardWidths(index);
    };

    // Add hover listeners to all cards
    cardsRef.current.forEach((card, idx) => {
      if (card) {
        card.addEventListener('mouseenter', () => handleHover(idx));
      }
    });

    // Initial setup
    updateCardWidths(0);

    return () => {
      cardsRef.current.forEach((card, idx) => {
        if (card) {
          card.removeEventListener('mouseenter', () => handleHover(idx));
        }
      });
    };
  }, []);

  const updateCardWidths = (activeIdx: number) => {
    cardsRef.current.forEach((card, idx) => {
      if (!card) return;

      const isActive = idx === activeIdx;
      const targetWidth = isActive ? 70 : 15;
      const opacity = isActive ? 1 : 0.6;

      gsap.to(card, {
        width: `${targetWidth}%`,
        opacity,
        duration: 0.6,
        ease: 'power3.inOut',
      });

      // Show/hide content based on active state
      const content = card.querySelector('[data-content]');
      if (content) {
        gsap.to(content, {
          opacity: isActive ? 1 : 0,
          pointerEvents: isActive ? 'auto' : 'none',
          duration: 0.3,
          ease: 'power2.inOut',
        });
      }

      const image = card.querySelector('[data-image]');
      if (image) {
        gsap.to(image, {
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 0.95,
          duration: 0.6,
          ease: 'power3.inOut',
        });
      }
    });
  };

  return (
    <section className="py-20 px-6 md:px-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 gap-6">
        <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight">
          FEATURED<br />PROJECTS
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xs leading-relaxed">
          A curated selection of my work in engineering and product design.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="flex gap-4 h-[500px] rounded-2xl overflow-hidden bg-gray-900/30"
      >
        {projects.map((project, idx) => (
          <div
            key={project.id}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-600"
            style={{
              width: idx === 0 ? '70%' : '15%',
              minWidth: '0',
            }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm" />

            {/* Project Image - Always visible but opacity changes */}
            <div
              data-image
              className="absolute inset-0 opacity-100 transition-all"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 70vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content - Only visible when active */}
            <div
              data-content
              className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between opacity-0 pointer-events-none"
            >
              {/* Top Section */}
              <div className="flex items-start justify-between">
                <h3 className="text-2xl md:text-3xl font-bold text-white max-w-xs">
                  {project.title}
                </h3>
                <Link
                  href={project.link}
                  target="_blank"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <ArrowUpRight size={20} className="text-white" />
                </Link>
              </div>

              {/* Middle Section - Description */}
              <div className="space-y-4">
                <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Section - Links */}
              <div className="flex gap-3">
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex-1 px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-sm"
                >
                  View Project
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <Github size={18} className="text-white" />
                </Link>
              </div>
            </div>

            {/* Overlay for inactive cards */}
            <div className="absolute inset-0 bg-black/40 opacity-100 transition-opacity group-hover:opacity-0" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
