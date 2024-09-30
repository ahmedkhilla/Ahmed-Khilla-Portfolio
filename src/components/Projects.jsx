import { projects } from "../constants/cons";
import Button from "./Button";

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 pt-16 xs:px-8 sm:px-16 md:px-6 lg:px-20 xl:px-40"
    >
      <div className="container mx-auto">
        <h2 className="mb-8 text-xl font-semibold tracking-wide xl:text-2xl">
          Projects
        </h2>
        <ul className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:justify-between lg:justify-start lg:gap-[4%]">
          {projects.map((project) => (
            <li
              key={project.id}
              className="rounded-2xl bg-border-gradient p-[1px] md:w-[48%] lg:mb-8 lg:w-[48%]"
            >
              <div className="rounded-2xl bg-primary-bcg p-8 md:p-6">
                <div className="image-container mb-6 sm:h-[270px]">
                  <img src={project.imageUrl} alt="Comfy House App" />
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 font-semibold">{project.projectName}</h4>
                  <p className="text-sm text-grey-text lg:mb-16">
                    {project.text}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2">
                  <Button href={project.hrefLive}>Live preview</Button>
                  <Button href={project.hrefGit} color="dark">
                    {" "}
                    <span className="hidden xs:block md:hidden lg:block">
                      Check on Github
                    </span>
                    <span className="xs:hidden md:block lg:hidden">Github</span>
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
