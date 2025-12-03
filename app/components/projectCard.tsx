import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image";

// TODO: Define project type in a separate file and import it here
interface project {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export function ProjectCard({ project }: { project: project }) {
  const projectData = project;

  return (

    <Card className={`w-full h-full  bg-cover bg-center`}>
      <CardHeader>
        <CardTitle>{projectData.title || "this is the title of the project"}</CardTitle>
        <Image src={projectData.imageUrl} alt={projectData.imageAlt} width={400} height={200} className="rounded-md object-cover h-60" />
        <CardDescription>
          <Button className="mt-2 mb-2" variant="outline">Tech Stack</Button>
          {projectData.description || "This is a brief description of the project."}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  )
}
