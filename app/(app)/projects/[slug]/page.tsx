import { AnimatedGhostLink } from "@/components/AnimatedLink";
import { DottedLine, DottedLineFlexContainer } from "@/components/DottedLine";
import { ProjectCarousel } from "@/components/projectCarousel";
import { cn } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { components } from "@/sanity/portableTextComponents";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { Lock } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
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
        <div className="flex items-center gap-12">
          <h1 className="text-4xl md:text-5xl lg:max-w-xl break-words">
            {project.title}
          </h1>
          <div className="flex gap-6 items-center">
            {project.isPrivate && (
              <div
                className={
                  "flex gap-6 items-center border border-primary/50 rounded-2xl px-4 py-1.5"
                }
              >
                <Lock className="h-6 w-auto" />
                <p className="text-primary font-semibold">
                  * Private repository
                </p>
              </div>
            )}
            {project.githubHref && (
              <Link href={project.githubHref} target="_blank">
                <Image
                  alt="github link"
                  src={`/svg/github.svg`}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="aspect-square h-6 w-auto"
                />
              </Link>
            )}
            <div
              className={cn(
                project.hostingIssue &&
                  "flex gap-6 items-center border border-primary/50 rounded-2xl px-4 py-1.5"
              )}
            >
              {project.hostedHref && (
                <Link href={project.hostedHref} target="_blank">
                  <OpenInNewWindowIcon className="h-6 w-auto" />
                </Link>
              )}
              {project.hostingIssue && (
                <p className="text-primary font-semibold">
                  * See description for hosting issue.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="md:pt-12 flex gap-12 flex-col">
        {<ProjectCarousel images={images} />}
      </section>
      <section className="md:pt-12 flex gap-12 flex-col">
        <div className=" hidden md:flex justify-center items-center rounded-md bg-transparent shadow-[inset_0_0_120px_rgba(0,50,100,0.50)] h-72 lg:h-96">
          <div className="md:flex md:justify-around items-center p-12 w-full flex-wrap">
            {project.technologies.map((tech) => (
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
