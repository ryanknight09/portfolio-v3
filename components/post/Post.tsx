import { Author } from "@/components/Author";
import { components } from "@/sanity/portableTextComponents";
import { type POST_QUERYResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import { PostCategories } from "./PostCategories";
import { PostImage } from "./PostImage";
import { PostPublishedAt } from "./PostPublishedAt";

type Props = NonNullable<POST_QUERYResult>;

export const Post = ({
  title,
  author,
  mainImage,
  body,
  publishedAt,
  categories,
}: Props) => {
  return (
    <article className="mx-auto grid gap-y-12 max-w-6xl">
      <header className="flex flex-col gap-4 items-start">
        <div className="flex gap-4 items-center">
          <PostCategories categories={categories} />
          <PostPublishedAt publishedAt={publishedAt} />
        </div>
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold text-pretty">
          {title}
        </h1>
        <Author author={author} />
      </header>
      <PostImage image={mainImage} title={title} />
      {body ? (
        <div className="prose max-w-none">
          <PortableText value={body} components={components} />
        </div>
      ) : null}
    </article>
  );
};
