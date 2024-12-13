import { Footer } from "@/components/Footer";
import { DesktopNav } from "@/components/navigation/desktop/DesktopNav";
import { MobileNavigation } from "@/components/navigation/mobile/MobileNavigation";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="min-h-screen w-auto flex flex-col gap-3 relative">
        <MobileNavigation />
        <div className="flex flex-col h-full md:flex-row w-full relative">
          <DesktopNav />
          <main className="py-12 px-6 md:p-6 xl:p-12 mx-auto h-auto w-full flex items-center flex-col overflow-x-hidden">
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
