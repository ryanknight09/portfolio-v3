// import { client } from "@/sanity/lib/client";
// import { POST_QUERY } from "@/sanity/lib/queries";
// import { notFound } from "next/navigation";

// const options = { next: { revalidate: 60 } };

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  //   const post = await client.fetch(POST_QUERY, await params, options);

  //   if (!post) {
  //     notFound();
  //   }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      a project {(await params).slug}
    </main>
  );
}
