import openDb from "@/app/api/database"
import Image from "next/image";
import { Activity, technology, codeSnippet } from "@/types/interfaces";
import Example from "@/app/components/codeBlockDemo";
import CodeWithExplanation from "@/app/components/CodeWithExplanation";
import ProjectPage from "@/app/components/ProjectPage";

export default async function Thelostisland(
) {
    // TODO: let user choose wheter to see code or not.
    const db = await openDb();
    const project = await db.get('SELECT * FROM projects where id = 2');

    return (
        <ProjectPage project={project}>
            <p>This is some extra content</p>
            <p>This is some extra content</p>
        </ProjectPage>
    )
}