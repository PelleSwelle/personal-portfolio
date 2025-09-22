import openDb from "@/app/api/database";
import ProjectPage from "@/app/components/ProjectPage";
import Image from "next/image";
import CodeWithExplanation from "@/app/components/CodeWithExplanation";
import type { code } from "@/types/interfaces";

const code = [
    {
    language: "typescript",
    filename: "example.ts",
    code: `function greet(name: string): string {
  return \`Hello, \${name}!\;`
}]

const TheDreamHouseMurder = async() => {
    const db = await openDb();
    const project = await db.get('SELECT * FROM projects WHERE id = ?', [0]); // Example query
    

    return (
        <ProjectPage project={project}>
            <CodeWithExplanation code={code}>I am some description</CodeWithExplanation>
            <CodeWithExplanation code={code}>I am even more description</CodeWithExplanation>
        </ProjectPage>
    )
}

export default TheDreamHouseMurder;