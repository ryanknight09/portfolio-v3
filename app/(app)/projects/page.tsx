import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const projects = await client.fetch(PROJECTS_QUERY, {}, options);

  return (
    <div className="flex flex-col gap-24 w-full">
      <ProjectsGrid projects={projects} />
    </div>
  );
}
