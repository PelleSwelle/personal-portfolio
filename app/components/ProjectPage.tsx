import openDb from "@/app/api/database"
import Image from "next/image";
import { Role, Technology, Project } from "@/types/interfaces";
import CodeWithExplanation from "@/app/components/CodeWithExplanation";
import { ReactNode } from "react";
import { fetchProjectCodeSnippets, fetchProjectRoles, fetchProjectTechnologies } from "../api/calls";

export default async function ProjectPage({project}: {project: Project}) {
    const db = await openDb();
    const roles = await fetchProjectRoles(project.id);
    const allTech = await fetchProjectTechnologies(project.id)
    const codeSnippets = await fetchProjectCodeSnippets(project.id)

    return (
        <main className="relative flex min-h-screen w-full flex-col items-start justify-center p-24 gap-4">
            <div className="w-full flex">
                <Image src={`${project.image}.png`} alt={project.image} width={2000} height={200} className="rounded-md object-cover h-120" />
            </div>

            <h2 className="text-4xl font-bold dark:text-white">{project.title}</h2>
            <div className="h-0.5 w-[100%] bg-white"></div>
            <div className="flex w-full flex-row justify-between">
                <p className="text-xl border-solid border-white border-b-1">{project.subTitle}</p>
                <div className="flex flex-row">
                    {
                        roles.map((role) => (
                            <span key={role.id} className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-white/10 border border-white/20">{role.title}</span>
                        ))
                    }
                </div>
            </div>

            <p className="pr-[40%] mb-20 text-lg">{project.longDescription}</p>

            <h2 className="text-4xl font-bold dark:text-white">Code Snippets</h2>

                { codeSnippets?.map(snippet => (
                    <CodeWithExplanation key={snippet.id} props={snippet}/>                   
                ))}
        </main>
    )
}
