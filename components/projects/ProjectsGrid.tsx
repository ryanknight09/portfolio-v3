import { ProjectCard } from "@/components/ProjectCard";
import { type PROJECTS_QUERYResult } from "@/sanity/types";

interface Props {
  projects: PROJECTS_QUERYResult;
}

export const ProjectsGrid = ({ projects }: Props) => (
  <section className="flex gap-12 flex-col overflow-x-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-8">
      {projects.map(({ _id, mainImage, title, tag, slug }) => {
        return (
          <ProjectCard
            key={_id}
            mainImage={mainImage}
            tag={tag ?? ""}
            title={title ?? ""}
            slug={slug?.current ?? ""}
            classname="rounded-lg hover:shadow-[inset_0_0_120px_rgba(0,50,100,0.50)] shadow-primary transition-all duration-300"
          />
        );
      })}
    </div>
  </section>
);
