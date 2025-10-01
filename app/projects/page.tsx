import ProjectSection from "../components/projectSection";
import { fetchAllProjects } from "../api/route";

export default async function Projects() {
    const allProjects = await fetchAllProjects();

    return (
        <main className="flex min-h-screen p-0 flex-col p-24 gap-12">
            <div className="relative flex flex-col items-center">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-12 min-w-full">
                    {allProjects.map((project) => (
                        <ProjectSection key={project.id} project={project}/>
                    ))}
                </div>
                <div className="opacity-0 translate-y-5 transition-all duration-700" data-animate>
                    <h2 className="text-3xl font-bold">Reveal on Scroll</h2>
                    <p>This section will fade and slide into view.</p>
                </div>
            </div>
        </main>
    )
}