import { components } from "@/sanity/portableTextComponents";
import { type BlockContent } from "@/sanity/types";
import { PortableText } from "next-sanity";

export const ProjectBody = ({ body }: { body: BlockContent }) => {
  if (!body) return null;

  return (
    <section className="md:pt-12 flex gap-12 flex-col lg:px-12">
      <div className="prose max-w-none">
        <PortableText value={body} components={components} />
      </div>
    </section>
  );
};
