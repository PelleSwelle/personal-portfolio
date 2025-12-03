import Link from "next/link";
import openDb from "../api/database";
import Image from "next/image";
import { Technology, Project } from "@/types/interfaces";
import { fetchProjectTechnologies } from "../api/calls";

export default async function ProjectSection({ project }: { project: Project }) {

  const allTech = await fetchProjectTechnologies(project.id);


  return (
    <Link href={`/projects/${project.title.toLowerCase().replaceAll(' ', '-')}`}>
      {/* <div className="grid min-h-[96px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-hidden"> */}
      {/* <figure className="relative w-full h-96"> */}
      {/* <Image src={`${project.image}.png`} alt={project.image} width={1200} height={200} className="rounded-md object-cover h-96 -z-20" /> */}
      {/* <figcaption className="absolute bottom-0 w-full justify-between border-t-white bg-white/75 py-4 px-6 shadow-md shadow-black/2 saturate-200 backdrop-blur-xs"> */}
      {/* <div> */}
      {/* <h2 className="md:text-3xl text-2xl font-bold dark:text-white mt-6">{project.title}</h2> */}
      {/* <div className="h-0.5 w-100% bg-white mb-2 mt-2"></div> */}
      {/* <div className="flex lg:flex-row flex-col justify-between"> */}
      {/* <p>{project.subTitle}</p> */}
      {/* <div className="flex flex-row justify-end"> */}
      {/* { */}
      {/* allTech.map((tech: Technology) => ( */}
      {/* <Image key={tech.id} src={`${tech.image}.png`} alt={tech.image} width={20} height={20} className="rounded-md object-cover h-6 w-6 ml-2 mt-4" /> */}
      {/* )) */}
      {/* } */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </figcaption> */}
      {/* </figure> */}
      {/* </div> */}
      {/* <section className="b-12 w-full justify-end align-end"> */}
      {/*   <div className="w-full relative justify-end align-end"> */}
      {/*     <div className="absolute shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm"> */}
      {/*       <div className="absolute bottom-[2%] left-[4%]"> */}
      {/*         <h2 className="md:text-3xl text-4xl font-bold dark:text-white mt-6">{project.title}</h2> */}
      {/*         <div className="h-0.5 w-100% bg-white mb-2 mt-2"></div> */}
      {/*         <div className="flex flex-row justify-between"> */}
      {/*           <p>{project.subTitle}</p> */}
      {/*           <div className="flex flex-row"> */}
      {/*             { */}
      {/*               allTech.map((tech: Technology) => ( */}
      {/*                 <Image key={tech.id} src={`${tech.image}.png`} alt={tech.image} width={20} height={20} className="rounded-md object-cover h-8 w-8 ml-2" /> */}
      {/*               )) */}
      {/*             } */}
      {/*           </div> */}
      {/*         </div> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*     <Image src={`${project.image}.png`} alt={project.image} width={1200} height={200} className="rounded-md object-cover h-120 -z-20" /> */}
      {/*   </div> */}
      {/**/}
      {/* </section> */}
    </Link>
  );
}
