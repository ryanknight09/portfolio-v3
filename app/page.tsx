import { Title } from "@/components/Title";

export default async function Page() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Layer Cake Home Page</Title>
      {/* <Image
        className="dark:invert"
        src={`/svg/${work[0].technologies[0].slug?.current}.svg`}
        alt="Vercel logomark"
        width={100}
        height={100}
      /> */}
    </section>
  );
}
