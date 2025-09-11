import Image from "next/image";

export default function ProjectSection({project}: {project?: any}) {
    return (
        <section>
            <Image src="/images/anvisninger.png" alt="Project 1 Image" width={1200} height={2000} className="rounded-md object-cover"/>
            
            <h2 className="text-4xl font-bold dark:text-white mt-6">{project.title}</h2>

            <p>{project.subTitle}</p>
        </section>
    );
}