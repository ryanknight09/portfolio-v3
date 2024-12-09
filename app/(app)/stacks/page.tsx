import { Separator } from "@/components/ui/separator";
import { client } from "@/sanity/lib/client";
import { TECHNOLOGY_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

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
          {stack.map(({ _id, slug, title, tag, description }) => (
            <div
              key={_id}
              className="bg-secondary w-full rounded-md p-6 flex flex-col gap-3"
            >
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
              <Separator
                orientation="vertical"
                className="h-6 bg-white/20 ml-4"
              />
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
