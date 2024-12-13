import { Project } from "@/components/project/Project";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
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

  const imagesGallery =
    project.imagesGallery?.map((gal) => urlFor(gal).url()) ?? [];

  return <Project project={project} imagesGallery={imagesGallery} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await client.fetch(PROJECT_QUERY, await params);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} - Ryan Knight's Portfolio`,
    description:
      "Explore this web development project in Ryan Knight's portfolio, showcasing innovative solutions and technical expertise.",
  };
}
