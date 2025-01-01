import { ExperimentalBlockComponent } from "@/components/experimental-components/ExperimentalBlocks";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { EXPERIMENTAL_BLOCK_QUERY } from "@/sanity/lib/queries";
import { type Metadata } from "next";
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const block = await client.fetch(
    EXPERIMENTAL_BLOCK_QUERY,
    await params,
    options
  );

  if (!block) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const imageUrl = urlFor(block.mainImage || "").url();

  return {
    title: `${block.title} - Ryan Knight's Blog`,
    description:
      block.description ||
      "Checkout this insightful component example by Ryan Knight.",
    openGraph: {
      title: `${block.title} - Ryan Knight's Blog`,
      description:
        block.description ||
        "Checkout this insightful component example by Ryan Knight.",
      url: `https://ryanknight.io/experimental/${block.slug}`,
      siteName: "Ryan Knight",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: block.mainImage?.alt || block.title || "",
        },
      ],
    },
  };
}
