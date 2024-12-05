import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  pic: string;
  tag: string;
  title: string;
  classname?: string;
}

const arrows = Array.from({ length: 6 }, (_, index) => index + 1);

export const ProjectCard = ({ pic, classname, tag, title }: Props) => {
  return (
    <Link
      href={`projects/${title}`}
      className={cn(
        "flex flex-col gap-6 py-6 group cursor-pointer group relative overflow-hidden",
        classname
      )}
    >
      <div className="overflow-hidden rounded-md">
        <Image
          alt="me"
          src={`/images/${pic}`}
          width={0}
          height={0}
          sizes="100%"
          className="aspect-square rounded-md w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1.5">
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
