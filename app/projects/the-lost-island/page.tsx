import openDb from "@/app/api/database"
import ProjectPage from "@/app/components/ProjectPage";

export default async function Thelostisland(
) {
    const db = await openDb();
    const project = await db.get(`SELECT * FROM projects WHERE id = ${2}`)
    return (
        <ProjectPage project={project}/>
    )
}