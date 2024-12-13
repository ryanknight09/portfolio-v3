import { AnimatedLink } from "@/components/AnimatedLink";
import { ProjectCard } from "@/components/project-card/ProjectCard";
import { cn } from "@/lib/utils";
import { type TOP_TWO_PROJECTS_QUERYResult } from "@/sanity/types";
import { FadeUpDiv } from "../Animation";
import { DottedLine, DottedLineFlexContainer } from "../DottedLine";

interface Props {
  projects: TOP_TWO_PROJECTS_QUERYResult;
}

export const Projects = ({ projects }: Props) => (
  <FadeUpDiv className="flex gap-12 flex-col overflow-x-hidden">
    <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
      Recent Projects
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project._id}
          {...project}
          classname={cn(index === 2 && "hidden 3xl:flex")}
        />
      ))}
    </div>
    <DottedLineFlexContainer>
      <DottedLine />
      <AnimatedLink className="w-full md:max-w-max" href="projects">
        View All Projects
      </AnimatedLink>
    </DottedLineFlexContainer>
  </FadeUpDiv>
);
