import { ExperimentalBlockComponent } from "@/components/experimental-components/ExperimentalBlocks";
import { client } from "@/sanity/lib/client";
import { EXPERIMENTAL_BLOCK_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

const options = { next: { revalidate: 60 } };

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const block = await client.fetch(
    EXPERIMENTAL_BLOCK_QUERY,
    await params,
    options
  );

  if (!block) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-24 w-full max-w-4xl h-full items-center">
      <ExperimentalBlockComponent block={block} />
    </div>
  );
}
