import { AnimatedLink } from "@/components/AnimatedLink";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import { type TOP_THREE_PROJECTS_QUERYResult } from "@/sanity/types";
import { DottedLine, DottedLineFlexContainer } from "../DottedLine";

interface Props {
  projects: TOP_THREE_PROJECTS_QUERYResult;
}

export const Projects = ({ projects }: Props) => (
  <section className="flex gap-12 flex-col overflow-x-hidden">
    <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
      Recent Projects
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-8">
      {projects.map(({ _id, mainImage, title, tag }, index) => (
        <ProjectCard
          key={_id}
          mainImage={mainImage}
          tag={tag ?? ""}
          title={title ?? ""}
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
  </section>
);
