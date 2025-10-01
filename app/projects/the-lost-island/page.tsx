import openDb from "@/app/api/database"
import { fetchProject } from "@/app/api/route";
import ProjectPage from "@/app/components/ProjectPage";
import { Project } from "@/types/interfaces";

export default async function Thelostisland(
) {
    const db = await openDb();
    const project = await db.get(`SELECT * FROM projects WHERE id = ${2}`)
    return (
        <ProjectPage project={project}/>
    )
}