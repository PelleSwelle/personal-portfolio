import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface project {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

export function ProjectCard({project}: {project: project}) {
  const projectData = project;

  return (
    <Card
      style={{ backgroundImage: `url(${projectData.imageUrl})` }}
      
      className={`w-full h-full bg-[image(backgroundImage)) bg-cover bg-center`}>
        <div className="w-full h-full flex flex-col justify-between items-center backdrop-blur-sm">
          <CardHeader>
            <CardTitle>{projectData.title || "this is the title of the project"}</CardTitle>
            <CardDescription>
              {projectData.description || "This is a brief description of the project."}
            </CardDescription>
          </CardHeader>

          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Learn More
            </Button>
          </CardFooter>

        </div>
    </Card>
  )
}
