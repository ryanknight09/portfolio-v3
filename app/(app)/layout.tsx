import { DesktopNav } from "@/components/navigation/desktop/DesktopNav";
import { MobileNavigation } from "@/components/navigation/mobile/MobileNavigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="box-border">
      <div className="min-h-screen w-auto flex flex-col gap-3 relative">
        <MobileNavigation />
        <div className="flex flex-col h-full md:flex-row w-full relative">
          <DesktopNav />
          <main className="py-12 px-6 md:p-6 xl:p-12 mx-auto h-full w-full flex relative items-center flex-col">
            {children}
            <footer className="flex justify-center mt-auto">
              <p>Made with Next.js, Tailwind, Framer-Motion.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
