import { ProjectCarousel } from "@/components/project/ProjectCarousel";
import { type PROJECT_QUERYResult } from "@/sanity/types";
import { BackToProjectsLink } from "./BackToProjectsLink";
import { ProjectHeader } from "./project-header/ProjectHeader";
import { ProjectBody } from "./ProjectBody";
import { ProjectStack } from "./ProjectStack";

type Props = {
  project: NonNullable<PROJECT_QUERYResult>;
  imagesGallery: string[];
};

export const Project = ({ project, imagesGallery }: Props) => (
  <div className="flex flex-col gap-12 w-full">
    <BackToProjectsLink />
    <ProjectHeader {...project} />
    <ProjectCarousel images={imagesGallery} />
    <ProjectStack technologies={project.technologies} />
    <ProjectBody body={project.body} />
  </div>
);
