import openDb from "@/app/api/database"
import ProjectPage from "@/app/components/ProjectPage"

const VirtualMusicality = async () => {
    const db = await openDb()
    const project = await db.get(`SELECT * FROM projects WHERE id = ${1}`)

    return (
        <ProjectPage project={project}/>
    )
}

export default VirtualMusicality