'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI integration and message history',
    tags: ['React', 'Next.js', 'WebSockets', 'AI'],
    link: '#',
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment gateway integration',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
    link: '#',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Professional portfolio with animations and 3D visualization',
    tags: ['React', 'Three.js', 'GSAP', 'WebGL'],
    link: '#',
  },
  {
    id: '4',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    tags: ['React', 'Firebase', 'Redux', 'CSS'],
    link: '#',
  },
];

export function ProjectsAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            scrub: 0.5,
          },
        }
      );
    }

    // Animate project cards with stagger
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('[data-project-card]');

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            scrub: 0.5,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="projects" className="p-6 md:p-10 section-gradient">
      <h2 ref={titleRef} className="text-5xl md:text-6xl font-mono font-bold mb-12">
        Featured <span className="text-blue-400">Projects</span>
      </h2>

      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {sampleProjects.map((project) => (
          <motion.div
            key={project.id}
            data-project-card
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 to-black p-6 hover:border-blue-500/50 transition-all duration-300"
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              {/* Project Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 group-hover:bg-blue-900/50 group-hover:text-blue-300 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                >
                  View Project
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              )}
            </div>

            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg -z-10"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
