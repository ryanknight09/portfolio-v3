import { Footer } from "@/components/Footer";
import { DesktopNav } from "@/components/navigation/desktop/DesktopNav";
import { MobileNavigation } from "@/components/navigation/mobile/MobileNavigation";
import { client } from "@/sanity/lib/client";
import { EXPERIMENTAL_BLOCKS_QUERY } from "@/sanity/lib/queries";
import { type Path } from "@/types/navigationItem";

const paths: Path[] = [
  { url: "/", name: "home" },
  { url: "/about", name: "about" },
  { url: "/projects", name: "projects" },
  { url: "/stacks", name: "stacks" },
  { url: "/posts", name: "posts" },
  { url: "/contact", name: "contact" },
];

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

  const experimentPath = {
    name: "experimental",
    url: "/experimental",
    children: experiments.map((experiment) => ({
      name: experiment.title,
      url: `/experimental/${experiment.slug!.current}`,
    })),
  };

  const pathsWithSlugs = [...paths, experimentPath];

  return (
    <div>
      <div className="min-h-screen w-auto flex flex-col gap-3">
        <MobileNavigation paths={pathsWithSlugs} />
        <div className="flex flex-col h-full md:flex-row w-full relative">
          <DesktopNav paths={pathsWithSlugs} />
          <main className="py-12 px-6 md:p-6 xl:p-12 mx-auto h-auto w-full flex items-center flex-col overflow-x-hidden">
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
