import { Metadata } from "next";
import GalleryMosaic from "@/components/projects/gallery-mosaic";
import ProjectCarousel from "@/components/projects/project-carousel";
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
        tags: project.technologies?.map((t: any) => t.technology) || [],
    }));

    return (
        <main className="min-h-screen bg-black pb-20">
            <ProjectCarousel projects={projects} />
            <div className="pt-20">
                <GalleryMosaic
                projects={projects}
                backgroundColor="#000000"
                scrollSpeed1={-200}
                scrollSpeed2={150}
                scrollSpeed3={-100}
            />
            </div>
        </main>
    );
}
