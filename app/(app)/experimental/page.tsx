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

  const imageUrl = urlFor(experiments[0].mainImage).url();

  return {
    title: "Custom Built Components",
    description: "Components custom built for use, practice, and experiments.",
    openGraph: {
      title: `${experiments[0].title} - Ryan Knight's Blog`,
      description:
        experiments[0].description ||
        "Read this insightful article about web development and design on Ryan Knight's blog.",
      url: "https://ryanknight.io/experimental",
      siteName: "Ryan Knight's Blog",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: experiments[0].mainImage?.alt || experiments[0].title || "",
        },
      ],
    },
  };
}
