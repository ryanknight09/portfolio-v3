import { PostCard } from "@/components/PostCard";
import { Title } from "@/components/Title";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <div className=" container mx-auto grid grid-cols-1 gap-6 p-12 overflow-y-auto">
      <Title>Post Index</Title>
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}
