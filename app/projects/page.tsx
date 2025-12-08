import { fetchAllProjects } from "../api/calls";
import PortfolioItem from "../components/PortfolioItem";

export default async function Projects() {
  const allProjects = await fetchAllProjects();

  return (
    // <main className="flex min-h-screen p-0 flex-col md:p-24 gap-12">
    //   <div className="relative flex flex-col items-center">
    //     <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-12 min-w-full">
    //       {allProjects.map((project) => (
    //         <ProjectSection key={project.id} project={project} />
    //       ))}
    //     </div>
    //     <div className="opacity-0 translate-y-5 transition-all duration-700" data-animate>
    //       <h2 className="text-3xl font-bold">Reveal on Scroll</h2>
    //       <p>This section will fade and slide into view.</p>
    //     </div>
    //   </div>
    // </main>
    <section id="portfolio" className="portfolio-section py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Portfolio Showcase</h2>
          <p className="text-lg text-indigo-500 font-semibold">Personal and professional projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProjects.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
