import { Post } from "@/components/post/Post";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const options = { next: { revalidate: 60 } };

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const post = await client.fetch(POST_QUERY, await params, options);

  if (!post) {
    notFound();
  }

  return (
    <div className="container md:pt-12 flex gap-6 md:px-6 justify-center lg:px-12">
      <Post {...post} />
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await client.fetch(POST_QUERY, await params, options);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const imageUrl = urlFor(post.mainImage || "").url();

  return {
    title: `${post.title} - Ryan Knight's Blog`,
    description:
      post.description ||
      "Read this insightful article about web development and design on Ryan Knight's blog.",
    openGraph: {
      title: `${post.title} - Ryan Knight's Blog`,
      description:
        post.description ||
        "Read this insightful article about web development and design on Ryan Knight's blog.",
      url: `https://ryanknight.io/posts/${post.slug}`,
      siteName: "Ryan Knight's Blog",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt || post.title || "",
        },
      ],
    },
  };
}
