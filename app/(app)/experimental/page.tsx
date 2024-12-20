import { DottedLine } from "@/components/DottedLine";
import { ExperimentalBlockComponent } from "@/components/experimental-components/ExperimentalBlocks";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { EXPERIMENTAL_BLOCKS_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import { Fragment } from "react";

const options = { next: { revalidate: 5 } };

export default async function Components() {
  const experiments = await client.fetch(
    EXPERIMENTAL_BLOCKS_QUERY,
    {},
    options
  );

  return (
    <div className="flex flex-col gap-24 w-full max-w-4xl h-full items-center">
      {experiments.map((experiment) => (
        <Fragment key={experiment._id}>
          <ExperimentalBlockComponent block={experiment} />
          <DottedLine />
        </Fragment>
      ))}
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const experiments = await client.fetch(
    EXPERIMENTAL_BLOCKS_QUERY,
    {},
    options
  );

  if (!experiments) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: "Custom Built Components",
    description: "Components custom built for use, practice, and experiments.",
    openGraph: {
      images: [
        {
          url: urlFor(experiments[0].mainImage).url(),
        },
      ],
    },
  };
}
