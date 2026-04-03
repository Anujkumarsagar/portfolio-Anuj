"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
    tags: string[];
}

interface GalleryMosaicProps {
    projects?: Project[];
    backgroundColor?: string;
    viewText?: string;
    scrollSpeed1?: number;
    scrollSpeed2?: number;
    scrollSpeed3?: number;
}

const GalleryMosaic: React.FC<GalleryMosaicProps> = ({
    projects = [],
    backgroundColor = "#000000",
    viewText = "View",
    scrollSpeed1 = -200,
    scrollSpeed2 = 150,
    scrollSpeed3 = -100,
}) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const y1 = useTransform(scrollYProgress, [0, 1], [0, scrollSpeed1]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, scrollSpeed2]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, scrollSpeed3]);

    const col1 = projects.slice(0, 3);
    const col2 = projects.slice(3, 6);
    const col3 = projects.slice(6, 9);

    return (
        <div ref={containerRef} className="relative min-h-[150vh] overflow-hidden px-4 py-20" style={{ backgroundColor }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 */}
                <motion.div style={{ y: y1 }} className="flex flex-col gap-8 mt-20">
                    {col1.map((project) => (
                        <motion.div
                            key={project.id}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                            
                            {/* Links overlay - only on hover */}
                            {hoveredId === project.id && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                                >
                                    <div className="flex gap-3">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold text-black hover:bg-white transition-colors"
                                        >
                                            <ExternalLink size={14} />
                                            {viewText}
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold text-black hover:bg-white transition-colors"
                                        >
                                            <Github size={14} />
                                            Code
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Column 2 */}
                <motion.div style={{ y: y2 }} className="flex flex-col gap-8">
                    {col2.map((project) => (
                        <motion.div
                            key={project.id}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                            
                            {/* Links overlay - only on hover */}
                            {hoveredId === project.id && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                                >
                                    <div className="flex gap-3">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold text-black hover:bg-white transition-colors"
                                        >
                                            <ExternalLink size={14} />
                                            {viewText}
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold text-black hover:bg-white transition-colors"
                                        >
                                            <Github size={14} />
                                            Code
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Column 3 */}
                <motion.div style={{ y: y3 }} className="flex flex-col gap-8 mt-40">
                    {col3.map((project) => (
                        <motion.div
                            key={project.id}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                            
                            {/* Links overlay - only on hover */}
                            {hoveredId === project.id && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                                >
                                    <div className="flex gap-3">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold text-black hover:bg-white transition-colors"
                                        >
                                            <ExternalLink size={14} />
                                            {viewText}
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold text-black hover:bg-white transition-colors"
                                        >
                                            <Github size={14} />
                                            Code
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Top gradient */}
            <div
                className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b to-transparent z-10"
                style={{ background: `linear-gradient(to bottom, ${backgroundColor}, transparent)` }}
            />

            {/* Bottom gradient */}
            <div
                className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t to-transparent z-10"
                style={{ background: `linear-gradient(to top, ${backgroundColor}, transparent)` }}
            />
        </div>
    );
};

export default GalleryMosaic;
