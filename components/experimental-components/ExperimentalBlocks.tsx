import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { components } from "@/sanity/portableTextComponents";
import { type ExperimentalBlock } from "@/sanity/types";
import { PortableText } from "next-sanity";
import { experimentalBlocks } from ".";
import { GithubLink } from "../project/project-header/GithubLink";

interface Props {
  block: ExperimentalBlock;
}

export const ExperimentalBlockComponent = ({ block }: Props) => {
  return (
    <section
      key={block._id}
      className="flex flex-col items-center w-full gap-12 h-full"
    >
      <div className="flex flex-col gap-2 w-full">
        <p className="text-3xl font-semibold">{block.title}</p>
        <p className="text-muted-foreground inline-block">
          {block.description}
        </p>
        <GithubLink githubHref={block.href} />
      </div>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          {experimentalBlocks[block.slug.current]}
        </TabsContent>
        <TabsContent value="code">
          {block.body ? (
            <div className="prose max-w-none">
              <PortableText value={block.body} components={components} />
            </div>
          ) : null}
        </TabsContent>
      </Tabs>
    </section>
  );
};
