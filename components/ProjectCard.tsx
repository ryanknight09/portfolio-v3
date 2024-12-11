import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { type Project } from "@/sanity/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props extends Pick<Project, "tag" | "title"> {
  classname?: string;
  mainImage: Project["mainImage"] | null;
  slug?: string;
}

const arrows = Array.from({ length: 6 }, (_, index) => index + 1);

export const ProjectCard = ({
  mainImage,
  classname,
  tag,
  title,
  slug,
}: Props) => {
  return (
    <Link
      href={`projects/${slug}`}
      className={cn(
        "flex flex-col gap-6 py-6 group cursor-pointer group relative overflow-hidden",
        classname
      )}
    >
      {/* <div className="overflow-hidden rounded-md bg-transparent p-8 shadow-[inset_0_0_120px_0px_rgba(0,0,100,0.5)]"> */}
      <div className="overflow-hidden rounded-md bg-transparent py-4">
        {mainImage ? (
          <Image
            alt="me"
            src={urlFor(mainImage).url()}
            width={0}
            height={0}
            sizes="100%"
            className="shadow-xl object-cover rounded-md w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        ) : null}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1.5 ml-11">
          <p className="text-primary text-xs uppercase">{tag}</p>
          <h3 className="text-lg">{title}</h3>
        </div>
        <div className="overflow-hidden max-w-[120px] hidden group-hover:flex masked-gradient">
          <ul className="flex gap-8 group-hover:animate-infinite-scroll-arrow">
            {arrows.map((arrow, index) => (
              <li key={`${arrow}-${index}`}>
                <ArrowRight className="text-primary" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};
