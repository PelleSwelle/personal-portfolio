import openDb from "@/app/api/database"
import ProjectPage from "@/app/components/ProjectPage";

const StarAlgorithm = async () => {
    const db = await openDb();
    const project = await db.get(`SELECT * FROM projects Where id = ${6}`)

    return (
        <ProjectPage project={project}/>
    )
}

export default StarAlgorithm