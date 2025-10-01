import openDb from "@/app/api/database";
import { fetchProject } from "@/app/api/route";
import ProjectPage from "@/app/components/ProjectPage";

export default async function AnvisningerDK() {
    const db = await openDb();
        const project = await db.get(`SELECT * FROM projects WHERE id = ${5}`)

    return (
        <ProjectPage project={project}/>
    )
}