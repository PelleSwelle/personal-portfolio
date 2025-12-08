import openDb from "./database"
import { Project, Technology, Role, CodeSnippet } from '@/types/interfaces'

const fetchAllProjects = async (): Promise<Project[]> => {
  const db = await openDb();
  const data: Project[] = await db.all('SELECT * from projects')
  return data
}

const fetchAllTechnologies = async (): Promise<string[]> => {
  const db = await openDb();
  const data: string[] = await db.all('SELECT * FROM technologies');
  return data;
}

const fetchProjectTechnologies = async (projectID: number): Promise<Technology[]> => {
  const db = await openDb();
  const data: Technology[] = await db.all(`
        SELECT 
            t.id as technology_id,
            t.title,
            t.image
        FROM 
            project_technologies pt
        JOIN 
            technologies t ON pt.technology_id = t.id
        WHERE 
            pt.project_id = ${projectID}
    `)

  return data;
}

const fetchProjectRoles = async (projectID: number): Promise<Role[]> => {
  const db = await openDb();
  const data = await db.all(`
        SELECT 
            roles.title
        FROM projects
        INNER JOIN project_roles
                ON projects.id = project_roles.project_id
        INNER JOIN roles
                ON roles.id = project_roles.role_id
        WHERE projects.id = ${projectID};
    `)
  return data;
}

const fetchProject = async (projectID: number): Promise<Project> => {
  const db = await openDb();
  const data: Project = await db.all(`SELECT * FROM projects where id = ${projectID}`)

  return data;
}

const fetchProjectCodeSnippets = async (projectID: number): Promise<CodeSnippet[]> => {
  const db = await openDb();
  const data: CodeSnippet[] = await db.all(`
        SELECT *
        FROM
            code_snippets
        WHERE
            game_id = ${projectID}    
    `)
  return data;
}

export {
  fetchAllProjects,
  fetchAllTechnologies,
  fetchProjectTechnologies,
  fetchProject,
  fetchProjectRoles,
  fetchProjectCodeSnippets
}
