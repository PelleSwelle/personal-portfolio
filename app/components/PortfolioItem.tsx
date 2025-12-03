import { Project, Technology } from "@/types/interfaces";
import { fetchProjectTechnologies, fetchProjectRoles } from "../api/calls";
import Link from "next/link";
import Image from "next/image";

export default async function PortfolioItem({ project }: { project: Project }) {

  const allTech = await fetchProjectTechnologies(project.id)
  const roles = await fetchProjectRoles(project.id)

  return (
    <Link href={`/projects/${project.title.toLowerCase().replaceAll(' ', '-')}`}>
      <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
        <div>
          <Image src={`${project.image}.png`} alt={project.image} width={1200} height={200} className="rounded-md object-cover h-60 -z-20" />

          <div id="transparent-background"
            className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70">
          </div>

          <div id="portfolio-item-info"
            className="p-4 flex flex-col items-center justify-between relative z-10">
            <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">{project.title}</h3>
            <div id="portfolio-items-details" className="flex">
              {roles.map((role) => (
                <span className="text-sm font-bold text-pink-500 group-hover:text-indigo-500">{role.title}</span>
              ))}
              {
                allTech.map((tech: Technology) => (
                  <Image key={tech.id} src={`${tech.image}.png`} alt={tech.image} width={20} height={20} className="rounded-md object-cover h-6 w-6 ml-2 mt-4" />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
