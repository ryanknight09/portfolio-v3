import { Education } from "@/components/about/Education";
import { Experience } from "@/components/about/Experience";
import { Hero } from "@/components/about/Hero";
import { Connect } from "@/components/Connect";
import { Stack } from "@/components/home/Stack";
import { client } from "@/sanity/lib/client";
import { EXPERIENCE_QUERY, TECHNOLOGY_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ryan Knight - Web Developer & Designer",
  description:
    "Learn about Ryan Knight's journey, skills, and experiences in web development and design.",
};

const options = { next: { revalidate: 60 } };

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
