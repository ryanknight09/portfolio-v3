import { client } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

const options = { next: { revalidate: 60 } };

export default async function ProjectPage({ params }: Props) {
  const project = await client.fetch(PROJECT_QUERY, await params, options);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-24">
      <h1>{project.title}</h1>
    </div>
  );
}
