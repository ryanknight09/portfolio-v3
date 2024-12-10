import { AnimatedGhostLink } from "@/components/AnimatedLink";
import { DottedLine, DottedLineFlexContainer } from "@/components/DottedLine";
import { ProjectCarousel } from "@/components/projectCarousel";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
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
