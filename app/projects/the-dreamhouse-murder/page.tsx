import openDb from "@/app/api/database";
import ProjectPage from "@/app/components/ProjectPage";

const TheDreamHouseMurder = async() => {
    const db = await openDb();
    const project = await db.get(`SELECT * FROM projects WHERE id = ${0}`);

    return (
        <ProjectPage project={project}/>
    )
}

export default TheDreamHouseMurder;