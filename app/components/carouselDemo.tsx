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
import { url } from "inspector"
import Link from "next/link"

const projects = [
  { title: "Anvisninger.dk", image: "/images/anvisninger.png", url: "/projects/anvisningerdk" },
  { title: "The Lost Island", image: "/images/logoTransparent.png", url: "/projects/thelostisland" },
  { title: "Virtual Musicality", image: "/images/synth.png", url: "/projects/virtualmusicality" },
]

export function CarouselDemo() {
    const projElements = projects.map((project, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card>
            <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">{project.title}</span>
              <Link href={project.url} className="inset-0 z-10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  className="rounded-lg"/>
              </Link>
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
