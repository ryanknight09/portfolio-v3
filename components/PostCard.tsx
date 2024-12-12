import { urlFor } from "@/sanity/lib/image";
import { type POSTS_QUERYResult } from "@/sanity/types";
import dayjs from "dayjs";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
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
        {mainImage ? (
          <Image
            src={urlFor(mainImage).url()}
            width={0}
            height={0}
            sizes="100%"
            alt={mainImage.alt || title || ""}
            className="rounded-sm border w-full"
          />
        ) : null}
        <div className="flex items-center flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              variant="outline"
              className="border-primary rounded-md px-2 max-w-max"
              key={category._id}
            >
              {category.title}
            </Badge>
          ))}
        </div>
        <h3 className="text font-semibold line-clamp-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>
        {publishedAt ? (
          <div className="flex items-center gap-2">
            <Clock className="text-primary w-4 h-4" />
            <p className="text-sm text-muted-foreground">
              {dayjs(publishedAt).format("D MMMM YYYY")}
            </p>
          </div>
        ) : null}
      </article>
    </Link>
  );
}
