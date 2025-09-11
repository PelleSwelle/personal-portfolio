import { ProjectCard } from "../components/projectCard";
import ProjectSection from "../components/projectSection";
import openDb from "../api/database";

export default async function Projects() {

    const db = await openDb();
    const allProjects = await db.all('SELECT * FROM projects');

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-12">
            <div className="flex flex-col gap-12 min-w-full justify-center">
                {allProjects.map((project) => (
                    <ProjectSection key={project.index} project={project}/>
                ))}
            </div>
        </main>
    )
}