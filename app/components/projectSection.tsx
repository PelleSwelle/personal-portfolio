import Link from "next/link";
import openDb from "../api/database";
import Image from "next/image";
import { Technology, Project } from "@/types/interfaces";
import { fetchProjectTechnologies } from "../api/route";

export default async function ProjectSection({ project }: { project: Project }) {
    
    const allTech = await fetchProjectTechnologies(project.id);

    
    return (
        <Link href={`/projects/${project.title.toLowerCase().replaceAll(' ', '-')}`}>
            <section className=" transition-all duration-700 data-animate mb-12 w-full justify-end align-end">
                <div className="w-full flex justify-end align-end">
                    <Image src={`${project.image}.png`} alt={project.image} width={1200} height={200} className="rounded-md object-cover h-120" />
                </div>

                <h2 className="text-4xl font-bold dark:text-white mt-6">{project.title}</h2>
                <div className="h-0.5 w-100% bg-white mb-2 mt-2"></div>
                <div className="flex flex-row justify-between">
                    <p>{project.subTitle}</p>
                    <div className="flex flex-row">
                        {
                            allTech.map((tech: Technology) => (
                                <Image key={tech.id} src={`${tech.image}.png`} alt={tech.image} width={20} height={20} className="rounded-md object-cover h-8 w-8 ml-2" />
                            ))
                        }
                    </div>
                </div>
            </section>
        </Link>
    );
}