import openDb from "../api/database";
import Image from "next/image";

export default async function ProjectSection({project}: {project?: any}) {
    const db = await openDb();
    const allTech = await db.all('SELECT * FROM project_technologies WHERE project_id = ?', [project.id]);

    return (
        <section className="data-animate mb-12 w-full justify-end align-end">
            <div className="w-full flex justify-end align-end">
                <Image src={`${project.image}.png`} alt={project.image} width={1200} height={200} className="rounded-md object-cover h-120"/>
            </div>
            
            <h2 className="text-4xl font-bold dark:text-white mt-6">{project.title}</h2>
            <div className="h-0.5 w-100% bg-white mb-2 mt-2"></div>
            <div className="flex flex-row justify-between">
                <p>{project.subTitle}</p>
                {/* {allTech.map((tech: any) => (
                    <Image key={tech.id} src={`${tech.image}.png`} alt={tech.title} width={30} height={30} className="rounded-md object-cover h-10 w-10"/>
                ))} */}
            </div>
        </section>
    );
}