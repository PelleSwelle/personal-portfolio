import ProjectSection from "../components/projectSection";
import openDb from "../api/database";


export default async function Projects() {

    const db = await openDb();
    const allProjects = await db.all('SELECT * FROM projects');

    return (
        <main className="flex min-h-screen p-0 flex-col p-24 gap-12">
            <div className="relative flex flex-col items-center">
                <div className="grid-cols-2 gap-12 min-w-full grid">
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