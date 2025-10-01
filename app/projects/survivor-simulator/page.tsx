import openDb from "@/app/api/database";
import ProjectPage from "@/app/components/ProjectPage";

const SurvivorSimulator = async() => {
    const db = await openDb();
    const project = await db.get(`SELECT * FROM projects WHERE id = ${3}`);

    return (
        <ProjectPage project={project}/>
    )
}

export default SurvivorSimulator;