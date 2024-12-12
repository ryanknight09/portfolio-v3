import { Connect } from "@/components/Connect";
import { Hero } from "@/components/home/Hero";
import { PlacesWorked } from "@/components/home/PlacesWorked";
import { Projects } from "@/components/home/Projects";
import { Stack } from "@/components/home/Stack";
import { client } from "@/sanity/lib/client";
import {
  EXPERIENCE_QUERY,
  TECHNOLOGY_QUERY,
  TOP_TWO_PROJECTS_QUERY,
} from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const experiences = await client.fetch(EXPERIENCE_QUERY, {}, options);
  const topProjects = await client.fetch(TOP_TWO_PROJECTS_QUERY, {}, options);
  const stack = await client.fetch(TECHNOLOGY_QUERY, {}, options);

  return (
    <div className="flex flex-col gap-24 w-full">
      <Hero />
      <Projects projects={topProjects} />
      <PlacesWorked experiences={experiences} />
      <Stack stack={stack} />
      <Connect />
    </div>
  );
}
