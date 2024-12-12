import { AnimatedGhostLink } from "@/components/AnimatedLink";
import { DottedLine, DottedLineFlexContainer } from "@/components/DottedLine";
import { ProjectCarousel } from "@/components/projectCarousel";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const project = await client.fetch(PROJECT_QUERY, await params);

  if (!project) {
    notFound();
  }

  const images = project.imagesGallery?.map((gal) => urlFor(gal).url()) ?? [];

  return (
    <div className="flex flex-col gap-12 w-full">
      <DottedLineFlexContainer>
        <DottedLine>
          <AnimatedGhostLink className="w-full md:max-w-max" href="/projects">
            Back to Projects
          </AnimatedGhostLink>
        </DottedLine>
      </DottedLineFlexContainer>
      <section className="flex gap-12 flex-col">
        <h1 className="text-4xl md:text-5xl lg:max-w-xl break-words">
          {project.title}
        </h1>
      </section>
      <section className="md:pt-12 flex gap-12 flex-col">
        {<ProjectCarousel images={images} />}
      </section>
      <section className="md:pt-12 flex gap-12 flex-col">
        <div className=" hidden md:flex justify-center items-center rounded-md bg-transparent shadow-[inset_0_0_120px_rgba(0,50,100,0.50)] h-72 lg:h-96">
          <div className="md:flex md:justify-around items-center p-12 w-full flex-wrap">
            {project.technologies.map((tech) => (
              <Image
                key={tech._id}
                alt="stack image"
                src={`/svg/${tech.slug?.current}.svg`}
                width={0}
                height={0}
                sizes="100%"
                className="aspect-square h-14 lg:h-20 w-auto"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="md:pt-12 flex gap-12 flex-col lg:px-12">
        {project.body ? (
          <div className="prose max-w-none">
            <PortableText value={project.body} components={components} />
          </div>
        ) : null}
      </section>
    </div>
  );
}
