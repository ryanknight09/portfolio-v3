import { Stacks } from "@/components/stacks/Stacks";
import { client } from "@/sanity/lib/client";
import { TECHNOLOGY_QUERY } from "@/sanity/lib/queries";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack - Ryan Knight's Development Tools",
  description:
    "Discover the technologies and tools Ryan Knight uses to build modern web applications.",
};

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const stack = await client.fetch(TECHNOLOGY_QUERY, {}, options);

  return (
    <div className="flex flex-col gap-12 w-full">
      <section className="md:pt-12 flex gap-12 flex-col">
        <h1 className="text-4xl md:text-5xl lg:max-w-xl break-words">
          Tools I&apos;ve used... A lot
        </h1>
      </section>
      <Stacks stack={stack} />
    </div>
  );
}
