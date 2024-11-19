import { Title } from "@/components/Title";
import { client } from "@/sanity/lib/client";
import { EXPERIENCE_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function Page() {
  const work = await client.fetch(EXPERIENCE_QUERY, {});

  console.log(work[0].technologies[0].slug?.current);

  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Layer Cake Home Page</Title>
      <Image
        className="dark:invert"
        src={`/svg/${work[0].technologies[0].slug?.current}.svg`}
        alt="Vercel logomark"
        width={100}
        height={100}
      />
    </section>
  );
}
