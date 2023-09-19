import { Project } from "../page";

interface Props {
  project: Project;
}
export default function Card({project}: Props) {
  return (
    <div className="relative flex w-full lg:flex-row flex-col rounded-xl bg-dark-sand bg-clip-border shadow-md">
        <div className="relative m-0 lg:w-1/3 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-clip-border">
          <img
            src={project.image}
            alt="image"
            className="h-full  object-cover"
          />
        </div>
        <div className="p-6 ">
          <h2 className="mb-4 block text-3xl font-semibold leading-snug text-dark-green">
            {project.title}
          </h2>
          <p className="mb-8 block text-base font-normal leading-relaxed text-light-sand">
            {project.description}
          </p>
          {project.appUrl !== '' && <a href={project.appUrl} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light-sand 
              bg-dark-green rounded-lg mr-3 hover:bg-light-green focus:ring-4 focus:outline-none focus:ring-dark-green">
              Visiter le site
          </a>}
          {project.gitUrl !== '' && <a href={project.gitUrl} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light-sand 
              bg-dark-green rounded-lg hover:bg-light-green focus:ring-4 focus:outline-none focus:ring-dark-green">
              Visiter le projet GitHub
          </a>}
          
        </div>
      </div>
  )
}
