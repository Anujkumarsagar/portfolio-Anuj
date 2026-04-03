"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const ProjectCard = ({
  project,
  isFeatured,
  onHover,
}: {
  project: Project;
  isFeatured: boolean;
  onHover: (id: string) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        width: isFeatured ? "100%" : "100%",
        flex: isFeatured ? 3.5 : 1,
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
  }, [isFeatured]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => onHover(project.id)}
      className={`relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 overflow-hidden cursor-pointer group transition-all duration-300 ${
        isFeatured ? "h-auto min-h-96" : "h-40"
      }`}
      style={{
        flex: isFeatured ? 3.5 : 1,
      }}
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
            {project.title}
          </h3>
          {isFeatured && (
            <p className="text-sm text-gray-300 mb-4 line-clamp-3">
              {project.description}
            </p>
          )}
        </div>

        {isFeatured && (
          <div className="flex gap-2 flex-wrap mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-slate-700/50 text-blue-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-3 items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={16} />
            {isFeatured && "View Project"}
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Github size={16} />
            {isFeatured && "Code"}
          </a>
        </div>
      </div>

      {/* Featured project image */}
      {isFeatured && (
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const [featuredId, setFeaturedId] = useState<string>(projects[0]?.id || "");
  const containerRef = useRef<HTMLDivElement>(null);

  // Enable smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              FEATURED
              <br />
              PROJECTS
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-xs md:text-right">
            A curated selection of my work in engineering and product design.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={containerRef}
          className="flex gap-6 h-96 md:h-[400px] lg:h-[500px]"
        >
          {/* Featured Project (Left - 70%) */}
          <div className="flex-[3.5] min-w-0">
            <ProjectCard
              project={projects.find((p) => p.id === featuredId) || projects[0]}
              isFeatured={true}
              onHover={setFeaturedId}
            />
          </div>

          {/* Smaller Projects (Right - 30%) */}
          <div className="flex-1 flex flex-col gap-6 overflow-hidden">
            {projects
              .filter((p) => p.id !== featuredId)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isFeatured={false}
                  onHover={setFeaturedId}
                />
              ))}
          </div>
        </div>

        {/* Footer hint */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Hover over a project to view details
        </p>
      </div>
    </section>
  );
}
