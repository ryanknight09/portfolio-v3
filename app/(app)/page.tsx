import { AnimatedButton } from "@/components/AnimatedButton";
import { ProjectCard } from "@/components/ProjectCard";
import { MapPin } from "lucide-react";

export default async function Page() {
  return (
    <div className="flex flex-col gap-24">
      <section className="md:pt-12 flex gap-12 flex-col overflow-x-hidden">
        <h1 className="text-4xl md:text-5xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
          Hello Everyone! Im Ryan.
        </h1>
        <div className="text-muted-foreground text-sm overflow-auto">
          <p className="break-word max-w-lg">
            A passionate web designer with a knack for turning ideas into
            visually stunning, user-friendly websites.
          </p>
        </div>
        <div className="flex items-center flex-col md:flex-row justify-between overflow-x-hidden gap-12">
          <div className="flex gap-6 overflow-hidden items-center justify-start max-w-4xl w-full">
            <div className="flex gap-6 max-w-max">
              <div className="flex gap-2 justify-start">
                <MapPin className="text-primary w-4 h-4" />
                <p className="text-muted-foreground text-sm text-nowrap ">
                  Spokane WA, United States
                </p>
              </div>
            </div>
            <div className="flex-1 border-dotted-custom h-1" />
          </div>
          <AnimatedButton className="w-full md:max-w-max">
            More About Me
          </AnimatedButton>
        </div>
      </section>
      <section className="flex gap-12 flex-col overflow-x-hidden">
        <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
          Recent Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-8">
          <ProjectCard
            pic="project-stock.avif"
            tag="Full Stack"
            title="A Micro Lending Application"
          />
          <ProjectCard
            pic="project-stock2.avif"
            tag="Front End"
            title="Searchable English Dictionary"
          />
          <ProjectCard
            pic="project-stock3.avif"
            classname="hidden 3xl:flex"
            tag="Front End"
            title="A Clone of the Spotify Home Page"
          />
        </div>
        <div className="flex items-center flex-col md:flex-row justify-between overflow-x-hidden gap-12">
          <div className="flex gap-6 overflow-hidden items-center justify-start max-w-4xl w-full">
            {/* <div className="flex gap-6 max-w-max">
              <div className="flex gap-2 justify-start">
                <MapPin className="text-primary w-4 h-4" />
                <p className="text-muted-foreground text-sm text-nowrap ">
                  Spokane WA, United States
                </p>
              </div>
            </div> */}
            <div className="flex-1 border-dotted-custom h-1" />
          </div>
          <AnimatedButton className="w-full md:max-w-max">
            View All Projects
          </AnimatedButton>
        </div>
      </section>
    </div>
  );
}
