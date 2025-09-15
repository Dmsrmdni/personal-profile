import Image from "next/image";
import Project from "../../data/project.json";

export default function ExperienceSection() {
  return (
    <section id="projects" className="flex flex-col gap-2 md:gap-4">
      <h2 className="text-3xl md:text-4xl text-almost-black font-semibold">Projects</h2>
      <div className="flex flex-col gap-4 md:gap-10">
        {Project
          .slice()
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between md:gap-8 lg:gap-10 rounded-2xl py-4">
              <div className="flex flex-col gap-6 md:gap-6 order-2 lg:order-1">
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="flex flex-col gap-0 md:gap-2">
                    <p className="text-lg md:text-xl text-gray-800 font-semibold">{project.type}</p>
                    <p className="text-xl md:text-2xl text-almost-black font-semibold capitalize">{project.title}</p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-gray-600 text-md">
                      {project.description}
                    </p>
                    <p className="text-gray-600 text-md">{project.techstack}</p>
                  </div>
                </div>
                <a
                  href={project.link ? project.link : undefined}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  className="w-full md:w-max text-md font-medium border-2 px-6 py-2 rounded-full transition-all duration-300 ease-in-out border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white cursor-pointer flex gap-1 items-center justify-center">
                  <span>View Project</span>
                  <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M18 6H9M18 6V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <Image
                src={`/images/${project.image}`}
                alt="project 1"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full order-1 lg:order-2"
              />
            </div>
          ))}
      </div>
    </section>
  )
}