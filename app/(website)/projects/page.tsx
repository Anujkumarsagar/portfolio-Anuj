import { Metadata } from "next";
import GalleryMosaic from "@/components/projects/gallery-mosaic";
import projectsData from "@/data/projects.json";

export const metadata: Metadata = {
    title: "Projects",
    description: "Showcase of my featured projects and work",
};

export default function ProjectsPage() {
    const projects = projectsData.projects.map(project => ({
        id: project.id,
        title: project.title,
        description: project.description,
        image: project.image,
        link: project.link,
        github: project.github,
        tags: project.tags,
    }));

    return (
        <main className="min-h-screen bg-black">
            <div className="py-20 px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">My Projects</h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    A curated collection of my work in engineering and product design
                </p>
            </div>
            <GalleryMosaic
                projects={projects}
                backgroundColor="#000000"
                scrollSpeed1={-200}
                scrollSpeed2={150}
                scrollSpeed3={-100}
            />
        </main>
    );
}
