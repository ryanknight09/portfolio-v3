import { Separator } from "@/components/ui/separator";
import { client } from "@/sanity/lib/client";
import { TECHNOLOGY_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

const options = { next: { revalidate: 10 } };

export default async function Page() {
  const stack = await client.fetch(TECHNOLOGY_QUERY, {}, options);

  return (
    <div className="flex flex-col gap-12 w-full">
      <section className="md:pt-12 flex gap-12 flex-col">
        <h1 className="text-4xl md:text-5xl lg:max-w-xl break-words">
          Tools I&apos;ve used... A lot
        </h1>
      </section>
      <section className="md:pt-12 flex gap-12 flex-col">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
          {stack.map(({ _id, slug, title, tag, description, href }) => (
            <Link
              href={href || ""}
              target="_blank"
              key={_id}
              className="relative bg-secondary w-full rounded-md p-6 flex flex-col gap-3 hover:bg-accent hover:shadow-[inset_0_0_60px_rgba(0,50,100,0.50)] shadow-primary transition-all duration-300"
            >
              <div className="w-full h-full absolute top-0 left-0 rounded-md animate-pulse hover:ring-2 hover:ring-primary ring-inset" />
              <div className="flex items-center gap-6">
                <Image
                  alt="stack image"
                  src={`/svg/${slug?.current}.svg`}
                  width={0}
                  height={0}
                  sizes="100%"
                  className="aspect-square h-16 w-auto"
                />
                <div>
                  <p className="text-lg">{title}</p>
                  <p className="text-sm text-muted-foreground">{tag}</p>
                </div>
              </div>
              <Separator
                orientation="vertical"
                className="h-6 bg-white/20 ml-4"
              />
              <p className="text-muted-foreground text-sm">{description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
