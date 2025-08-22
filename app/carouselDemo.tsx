import * as React from "react"


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const projects = [
  { title: "Project 1", description: "Description of Project 1", image: "/images/anvisninger.png" },
  { title: "Project 2", description: "Description of Project 2", image: "/images/logoTransparent.png" },
  { title: "Project 3", description: "Description of Project 3", image: "/images/synth.png" },
]

export function CarouselDemo() {
    const projElements = projects.map((project, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">{project.title}</span>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <Image
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="rounded-lg"/>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {projElements}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
