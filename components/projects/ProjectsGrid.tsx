import { ProjectCard } from "@/components/ProjectCard";
import { type PROJECTS_QUERYResult } from "@/sanity/types";

interface Props {
  projects: PROJECTS_QUERYResult;
}

export const ProjectsGrid = ({ projects }: Props) => (
  <section className="flex gap-12 flex-col overflow-x-hidden">
    <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
      All Projects
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-8">
      {projects.map(({ _id, mainImage, title, tag }) => (
        <ProjectCard
          key={_id}
          mainImage={mainImage}
          tag={tag ?? ""}
          title={title ?? ""}
        />
      ))}
    </div>
  </section>
);
