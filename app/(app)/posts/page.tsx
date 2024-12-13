import { PostCard } from "@/components/post/PostCard";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts - Ryan Knight's Web Development Insights",
  description:
    "Read Ryan Knight's articles and insights about web development, design, and technology.",
};

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <div className="grid grid-cols-1 gap-6 overflow-y-auto">
      <section className="md:pt-12 flex gap-12 flex-col">
        <h1 className="text-4xl md:text-5xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
          Posts
        </h1>
      </section>
      <div className="py-12 grid gap-12 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 max-w-7xl">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}
