import { Metadata } from "next";
import AnimatedCardShowcase from "@/components/projects/animated-card-showcase";
import FlipCardGrid from "@/components/projects/flip-card-grid";
import FloatingElementsSection from "@/components/projects/floating-elements-section";
import TimelineView from "@/components/projects/timeline-view";
import InfiniteScrollContainer from "@/components/projects/infinite-scroll-container";
import { getPayload } from "payload";
import config from "@payload-config";

export const metadata: Metadata = {
    title: "Projects",
    description: "Showcase of my featured projects and work",
};

export default async function ProjectsPage() {
    const payload = await getPayload({ config });
    const { docs: fetchedProjects } = await payload.find({
        collection: 'projects',
        limit: 100,
    });

    const projects = fetchedProjects.map((project: any) => ({
        id: project.id,
        title: project.title,
        description: project.description,
        image: project.image || "https://images.unsplash.com/photo-1460925895917-aaf4b51baea8?q=80&w=2700&auto=format&fit=crop",
        link: project.liveUrl || "",
        github: project.githubUrl || "",
        githubBackend: project.githubBackendUrl || "",
        tags: project.technologies?.map((t: any) => t.technology) || [],
    }));

    return (
        <InfiniteScrollContainer>
            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden bg-black">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800/20 rounded-full blur-3xl" />
                        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800/10 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-6xl md:text-7xl font-bungee mb-6 text-white">
                            Projects
                        </h1>
                        <p className="text-xl text-gray-400 mb-8">
                            Things I&apos;ve built — from full-stack apps to open-source tools.
                        </p>
                        <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                            <span>Scroll to explore</span>
                            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Featured Projects - Fade-in Cards */}
                <AnimatedCardShowcase projects={projects} />

                {/* 3D Flip Cards */}
                <FlipCardGrid projects={projects} />

                {/* Floating Elements */}
                <FloatingElementsSection projects={projects} />

                {/* Timeline View */}
                <TimelineView projects={projects} />

                {/* Footer CTA */}
                <section className="relative py-20 px-4 bg-black">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-4xl md:text-5xl font-bungee mb-6 text-white">
                            Want to work together?
                        </h2>
                        <p className="text-lg text-gray-400 mb-8">
                            I&apos;m always open to new projects and collaborations.
                        </p>
                        <a
                            href="mailto:anujkumarsagar62@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-3 squircle-a-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Get in Touch
                            <span>→</span>
                        </a>
                    </div>
                </section>
            </main>
        </InfiniteScrollContainer>
    );
}
