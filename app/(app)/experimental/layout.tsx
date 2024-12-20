import { client } from "@/sanity/lib/client";
import { EXPERIMENTAL_BLOCKS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

const options = { next: { revalidate: 5 } };

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const experiments = await client.fetch(
    EXPERIMENTAL_BLOCKS_QUERY,
    {},
    options
  );

  return (
    <div className="flex gap-12 w-full h-full">
      <div className="w-60">
        <ul>
          {experiments.map((experiment) => (
            <li key={experiment._id}>
              <Link
                href={`/experimental/${experiment.slug!.current}`}
                className="text-sm"
              >
                {experiment.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {children}
    </div>
  );
}
