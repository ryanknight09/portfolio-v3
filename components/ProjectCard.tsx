import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  pic: string;
  tag: string;
  title: string;
  classname?: string;
}

export const ProjectCard = ({ pic, classname, tag, title }: Props) => {
  return (
    <div className={cn("flex flex-col gap-6 py-6", classname)}>
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
      <div className="flex flex-col gap-1.5">
        <p className="text-primary text-xs uppercase">{tag}</p>
        <h3 className="text-lg">{title}</h3>
      </div>
    </div>
  );
};
