import { cn } from "@/lib/utils";
import { type Project } from "@/sanity/types";
import Link from "next/link";
import { AnimatedArrows } from "./AnimatedArrows";
import { ProjectImage } from "./ProjectImage";

interface Props extends Pick<Project, "tag" | "title" | "slug" | "mainImage"> {
  classname?: string;
}

export const ProjectCard = ({
  mainImage,
  classname,
  tag,
  title,
  slug,
}: Props) => {
  return (
    <Link
      href={`projects/${slug.current}`}
      className={cn(
        "flex flex-col gap-6 py-6 group cursor-pointer group relative",
        classname
      )}
    >
      <ProjectImage image={mainImage} />
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1.5 ml-11">
          <p className="text-primary text-xs uppercase">{tag}</p>
          <h3 className="text-lg">{title}</h3>
        </div>
        <AnimatedArrows />
      </div>
    </Link>
  );
};
