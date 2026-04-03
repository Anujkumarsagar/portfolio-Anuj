"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectCarousel } from "@/components/projects/carousel";
import { DetailView } from "@/components/projects/detail-view";
import { projects, Project } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <main className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="absolute top-0 left-0 right-0 z-40 pt-8 px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            My Works
          </h1>
          <p className="text-gray-400 text-lg">
            Explore my featured projects and technical achievements
          </p>
        </div>
      </motion.div>

      {/* Main Carousel Section */}
      <div className="w-full h-full flex flex-col items-center justify-center pt-24">
        <ProjectCarousel
          projects={projects}
          onSelectProject={setSelectedProject}
        />
      </div>

      {/* Detail View Modal */}
      <DetailView
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-96 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-96 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </main>
  );
}
