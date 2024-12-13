import { ProjectsGrid } from "@/components/ProjectsGrid";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ryan's Projects - Web Developer & Designer",
  description:
    "Explore Ryan Knight's projects showcasing skills in web development and design.",
};

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const projects = await client.fetch(PROJECTS_QUERY, {}, options);

  return (
    <div className="flex flex-col gap-12 w-full">
      <section className="md:pt-12 flex gap-12 flex-col">
        <h1 className="text-4xl md:text-5xl lg:max-w-xl break-words">
          Projects
        </h1>
      </section>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
