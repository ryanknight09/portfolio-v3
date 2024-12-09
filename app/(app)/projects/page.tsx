import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

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
