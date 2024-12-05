import { type TECHNOLOGY_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { AnimatedButton } from "../AnimatedButton";
import { DottedLine, DottedLineFlexContainer } from "../DottedLine";

interface Props {
  stack: TECHNOLOGY_QUERYResult;
}

export const Stack = ({ stack }: Props) => {
  const filteredStack = stack.filter((el) => {
    if (el.slug?.current)
      return ["next-js", "typescript", "tailwind"].includes(el.slug.current);
  });

  return (
    <section className="flex gap-12 flex-col">
      <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
        Stack
      </h1>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredStack.map(({ _id, slug, title, tag }) => (
          <li key={_id} className="bg-secondary w-full rounded-md p-4">
            <div className="flex items-center gap-6">
              <div>
                <Image
                  alt="stack image"
                  src={`/svg/${slug?.current}.svg`}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="aspect-square w-full h-14"
                />
              </div>
              <div>
                <p className="text-lg">{title}</p>
                <p className="text-sm text-muted-foreground">{tag}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <DottedLineFlexContainer>
        <DottedLine />
        <AnimatedButton className="w-full md:max-w-max">
          View All Stack
        </AnimatedButton>
      </DottedLineFlexContainer>
    </section>
  );
};
