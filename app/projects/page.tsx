import { ProjectCard } from "../components/projectCard";

export default function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "This is the first project.",
            imageUrl: "/images/anvisninger.png",
            imageAlt: "Project 1 Image"
        },
        {
            title: "Project 2",
            description: "This is the second project.",
            imageUrl: "/images/dreamHouseMurderCover.png",
            imageAlt: "Project 2 Image"
        },
        {
            title: "Project 3",
            description: "This is the third project.",
            imageUrl: "/images/featureExtraction.png",
            imageAlt: "Project 3 Image"
        }
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-12">
            <h1>Projects Page</h1>
            <div className="flex flex-row gap-12 min-w-full justify-center">
                <ProjectCard project={projects[0]}/>
                <ProjectCard project={projects[1]}/>
                <ProjectCard project={projects[2]}/>
            </div>
        </main>
    )
}