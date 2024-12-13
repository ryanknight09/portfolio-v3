import { type POSTS_QUERYResult } from "@/sanity/types";
import Link from "next/link";
import { PostCategories } from "./PostCategories";
import { PostImage } from "./PostImage";
import { PostPublishedAt } from "./PostPublishedAt";

type Props = POSTS_QUERYResult[0];

export function PostCard(props: Props) {
  const { title, mainImage, publishedAt, description, categories } = props;

  return (
    <Link
      className="relative bg-secondary hover:bg-accent rounded-md p-6 hover:shadow-[inset_0_0_40px_rgba(0,50,100,0.35)] shadow-primary transition-all duration-300"
      href={`/posts/${props.slug!.current}`}
    >
      <div className="w-full h-full absolute top-0 left-0 rounded-md animate-pulse hover:ring-2 hover:ring-primary ring-inset" />
      <article className="grid gap-4 grid-cols-1">
        <PostImage image={mainImage} title={title} />
        <PostCategories categories={categories} />
        <h3 className="text font-semibold line-clamp-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        <PostPublishedAt publishedAt={publishedAt} />
      </article>
    </Link>
  );
}
