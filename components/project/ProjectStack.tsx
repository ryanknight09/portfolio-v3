import { StaggeredXDiv } from "@/components/Animation";
import { type Slug } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";

type SimpleTechnology = {
  _id: string;
  slug: Slug | null;
  title: string | null;
  href: string | null;
};

interface Props {
  technologies: SimpleTechnology[];
}

export const ProjectStack = ({ technologies }: Props) => (
  <section className="md:pt-12 flex gap-12 flex-col">
    <div className=" hidden md:flex justify-center items-center rounded-md bg-transparent shadow-[inset_0_0_120px_rgba(0,50,100,0.50)] h-72 lg:h-96">
      <div className="md:flex md:justify-around items-center p-12 w-full flex-wrap">
        {technologies.map((tech, index) => (
          <StaggeredXDiv index={index} key={tech._id}>
            <Link
              key={tech._id}
              href={tech.href || ""}
              target="blank"
              className="hover:animate-pulse"
            >
              <Image
                alt="stack image"
                src={`/svg/${tech.slug?.current}.svg`}
                width={0}
                height={0}
                sizes="100%"
                className="aspect-square h-14 lg:h-20 w-auto"
              />
            </Link>
          </StaggeredXDiv>
        ))}
      </div>
    </div>
  </section>
);
