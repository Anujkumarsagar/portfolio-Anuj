"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    github: string;
    tags: string[];
}

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
        dragFree: true
    })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section className="w-full bg-[#f8f8f8] text-black pt-32 pb-24 px-4 md:px-12 relative overflow-hidden" 
                 style={{ 
                     backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
                     backgroundBlendMode: 'overlay',
                     backgroundColor: '#f5f5f5' // Light textured look
                 }}>
            {/* Header */}
            <div className="flex items-center justify-between mb-16 max-w-7xl mx-auto z-10 relative">
                <button onClick={scrollPrev} className="hidden md:flex p-2 hover:bg-black/5 rounded-full transition-colors shrink-0">
                    <ArrowLeft strokeWidth={1} size={40} className="text-black/70" />
                </button>
                
                <div className="text-center max-w-xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight text-gray-900">
                        My Works
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                        Witness the beauty of nature through our lens, as we showcase stunning landscapes that evoke wonder and appreciation for the environment.
                    </p>
                </div>

                <button onClick={scrollNext} className="hidden md:flex p-2 hover:bg-black/5 rounded-full transition-colors shrink-0">
                    <ArrowRight strokeWidth={1} size={40} className="text-black/70" />
                </button>
            </div>

            {/* Mobile Arrows */}
            <div className="flex md:hidden items-center justify-center gap-8 mb-8">
                <button onClick={scrollPrev} className="p-2 hover:bg-black/5 rounded-full transition-colors shrink-0">
                    <ArrowLeft strokeWidth={1} size={32} className="text-black/70" />
                </button>
                <button onClick={scrollNext} className="p-2 hover:bg-black/5 rounded-full transition-colors shrink-0">
                    <ArrowRight strokeWidth={1} size={32} className="text-black/70" />
                </button>
            </div>

            {/* Carousel */}
            <div className="overflow-visible" ref={emblaRef}>
                <div className="flex -ml-4 md:-ml-6">
                    {projects.map((project, index) => (
                        <div key={index} className="flex-none pl-4 md:pl-6 w-[85vw] sm:w-[50vw] md:w-[35vw] lg:w-[28vw] xl:w-[24vw]">
                            <div className="relative group w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-gray-900 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                                {/* Background Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-sm"
                                    loading="lazy"
                                />
                                
                                {/* Overlay gradient - partially visible always, darkens on hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Content on hover */}
                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white z-10 translate-y-4 group-hover:translate-y-0">
                                    <div>
                                        <h3 className="text-3xl font-semibold mb-3">{project.title}</h3>
                                        <p className="text-sm text-gray-300 leading-relaxed max-w-[90%]">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex items-end justify-between w-full">
                                        <div className="flex flex-wrap gap-2 pr-4">
                                            {project.tags.slice(0, 2).map((tag, i) => (
                                                <span key={i} className="px-4 py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-xs font-medium tracking-wide transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        {project.link && (
                                            <Link href={project.link} target="_blank" className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-colors flex-shrink-0">
                                                <ArrowUpRight size={20} strokeWidth={2} />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
