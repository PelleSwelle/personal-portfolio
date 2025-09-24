import openDb from "@/app/api/database";
import ProjectPage from "@/app/components/ProjectPage";
import Image from "next/image";
import CodeWithExplanation from "@/app/components/CodeWithExplanation";
import type { codeSnippet } from "@/types/interfaces";

const TheDreamHouseMurder = async() => {
    const db = await openDb();
    const project = await db.get('SELECT * FROM projects WHERE id = ?', [0]);

    return (
        <ProjectPage project={project}>
            <p>This is some extra content</p>
            <p>This is some extra content</p>
        </ProjectPage>
    )
}

export default TheDreamHouseMurder;