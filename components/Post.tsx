import { Author } from "@/components/Author";
import { urlFor } from "@/sanity/lib/image";
import { components } from "@/sanity/portableTextComponents";
import { type POST_QUERYResult } from "@/sanity/types";
import dayjs from "dayjs";
import { Clock } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { Badge } from "./ui/badge";

type Props = NonNullable<POST_QUERYResult>;

export function Post(props: Props) {
  const { title, author, mainImage, body, publishedAt, categories } = props;

  return (
    <article className="mx-auto grid gap-y-12 max-w-6xl">
      <header className="flex flex-col gap-4 items-start">
        <div className="flex gap-4 items-center">
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
          {publishedAt ? (
            <div className="flex items-center gap-2">
              <Clock className="text-primary w-4 h-4" />
              <p className="text-sm text-muted-foreground">
                {dayjs(publishedAt).format("D MMMM YYYY")}
              </p>
            </div>
          ) : null}
        </div>
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold text-pretty">
          {title}
        </h1>
        <Author author={author} />
      </header>
      {mainImage ? (
        <figure className="flex flex-col gap-2 items-start">
          <Image
            src={urlFor(mainImage).url()}
            width={0}
            height={0}
            sizes="100%"
            alt={mainImage.alt || title || ""}
            className="rounded-sm w-full"
          />
        </figure>
      ) : null}
      {body ? (
        <div className="prose max-w-none">
          <PortableText value={body} components={components} />
        </div>
      ) : null}
    </article>
  );
}
