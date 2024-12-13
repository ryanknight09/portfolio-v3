import { Education } from "@/components/about/Education";
import { Experience } from "@/components/about/Experience";
import { Hero } from "@/components/about/Hero";
import { Connect } from "@/components/Connect";
import { Stack } from "@/components/home/Stack";
import { client } from "@/sanity/lib/client";
import { EXPERIENCE_QUERY, TECHNOLOGY_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 10 } };

export default async function Page() {
  const experiences = await client.fetch(EXPERIENCE_QUERY, {}, options);
  const stack = await client.fetch(TECHNOLOGY_QUERY, {}, options);

  return (
    <div className="flex flex-col gap-12 w-full">
      <Hero />
      <Experience experiences={experiences} />
      <Stack stack={stack} />
      <Education />
      <Connect />
    </div>
  );
}
