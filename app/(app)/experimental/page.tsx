import { DottedLine } from "@/components/DottedLine";
import { experimentalBlocks } from "@/components/experimental-components";
import { GithubLink } from "@/components/project/project-header/GithubLink";
import { client } from "@/sanity/lib/client";
import { EXPERIMENTAL_BLOCKS_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Built Components",
  description: "Components custom built for use, practice, and experiments.",
};

const options = { next: { revalidate: 60 } };

export default async function Components() {
  const experiments = await client.fetch(
    EXPERIMENTAL_BLOCKS_QUERY,
    {},
    options
  );

  return (
    <div className="flex flex-col gap-24 w-full">
      {experiments.map((experiment) => (
        <div className="grid gap-6" key={experiment._id}>
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-semibold">{experiment.title}</p>
            <p className="text-muted-foreground inline-block">
              {experiment.description}
            </p>
            <GithubLink githubHref={experiment.href} />
          </div>
          {experimentalBlocks[experiment.slug.current]}
          <DottedLine />
        </div>
      ))}
    </div>
  );
}
