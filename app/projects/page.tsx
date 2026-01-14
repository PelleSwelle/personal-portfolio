import { fetchAllProjects } from "../api/calls";
import PortfolioItem from "../components/PortfolioItem";

export default async function Projects() {
  const allProjects = await fetchAllProjects();

  return (
    <section id="portfolio" className="py-16 px-4">
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
