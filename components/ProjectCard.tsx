import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Props {
  pic: string;
  tag: string;
  title: string;
  classname?: string;
}

const arrows = Array.from({ length: 3 }, (_, index) => index + 1);

export const ProjectCard = ({ pic, classname, tag, title }: Props) => {
  return (
    <div
      className={cn("flex flex-col gap-6 py-6 group cursor-pointer", classname)}
    >
      <div>
        <Image
          alt="me"
          src={`/images/${pic}`}
          width={0}
          height={0}
          sizes="100%"
          className="aspect-square rounded-md w-full h-full"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1.5">
          <p className="text-primary text-xs uppercase">{tag}</p>
          <h3 className="text-lg">{title}</h3>
        </div>
        <div className="overflow-hidden max-w-[120px] hidden group-hover:flex">
          <ul className="flex gap-8 group-hover:animate-infinite-scroll-arrow">
            {[...arrows, ...arrows].map((arrow, index) => (
              <li key={`${arrow}-${index}`}>
                <ArrowRight className="text-primary" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
