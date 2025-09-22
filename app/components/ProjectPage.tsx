import openDb from "@/app/api/database"
import Image from "next/image";
import { Activity, technology, project } from "@/types/interfaces";
import CodeWithExplanation from "@/app/components/CodeWithExplanation";
import { ReactNode } from "react";

export default async function ProjectPage({children, project}: {children: ReactNode[], project: project}) {
    // TODO: let user choose wheter to see code or not.
    const db = await openDb();

    const activities = await db.all(`
        SELECT
            a.id as activity_id,
            a.title
        FROM
            project_activities pa
        JOIN
            activities a ON pa.activity_id = a.id
        WHERE
            pa.project_id = ${project.id}
    `)

    const allTech = await db.all(`
        SELECT 
            t.id as technology_id,
            t.title,
            t.image
        FROM 
            project_technologies pt
        JOIN 
            technologies t ON pt.technology_id = t.id
        WHERE 
            pt.project_id = ?
    `, [project.id]);

    return (
        <main className="relative flex min-h-screen w-full flex-col items-start justify-center p-24 gap-4">
            <div className="w-full flex">
                <Image src={`${project.image}.png`} alt={project.image} width={2000} height={200} className="rounded-md object-cover h-120" />
            </div>

            <h2 className="text-4xl font-bold dark:text-white">{project.title}</h2>
            <div className="h-0.5 w-[100%] bg-white"></div>
            <div className="flex w-full flex-row justify-between">
                <p>{project.subTitle}</p>
                <div className="flex flex-row">
                    {
                        activities.map((activity: Activity) => (
                            <span key={activity.activity_id} className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-white/10 border border-white/20">{activity.title}</span>
                        ))
                    }
                </div>
            </div>

            <p className="pr-[30%] mb-20">{project.longDescription}</p>
            {children}
        </main>
    )
}