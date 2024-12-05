import { AnimatedLink } from "@/components/AnimatedLink";
import { ProjectCard } from "@/components/ProjectCard";
import { DottedLine, DottedLineFlexContainer } from "../DottedLine";

export const Projects = () => (
  <section className="flex gap-12 flex-col overflow-x-hidden">
    <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
      Recent Projects
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-8">
      <ProjectCard
        pic="project-stock.avif"
        tag="Full Stack"
        title="A Micro Lending Application"
      />
      <ProjectCard
        pic="project-stock2.avif"
        tag="Front End"
        title="Searchable English Dictionary"
      />
      <ProjectCard
        pic="project-stock3.avif"
        classname="hidden 3xl:flex"
        tag="Front End"
        title="A Clone of the Spotify Home Page"
      />
    </div>
    <DottedLineFlexContainer>
      <DottedLine />
      <AnimatedLink className="w-full md:max-w-max" href="projects">
        View All Projects
      </AnimatedLink>
    </DottedLineFlexContainer>
  </section>
);
