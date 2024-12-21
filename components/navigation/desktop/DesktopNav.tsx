import { type Path } from "@/types/navigationItem";
import Image from "next/image";
import { DesktopMenu } from "./DesktopMenu";

interface Props {
  paths: Path[];
}

export const DesktopNav = ({ paths }: Props) => {
  return (
    <nav className="hidden md:block sticky top-0 min-w-fit h-screen md:no-scrollbar overflow-auto">
      <div className="flex flex-col gap-12 p-6 xl:p-12 w-auto border-r">
        <div className="flex flex-col gap-6">
          <div className="relative w-40 h-40 xl:w-[192px] xl:h-[192px]">
            <Image
              alt="me"
              src="/images/me.jpg"
              sizes="max-width: 192px"
              fill
              priority
              className="aspect-square rounded-md object-cover"
            />
          </div>
          <div className="bg-primary-accent rounded-l-xl rounded-r-xl px-3 py-1 flex items-center justify-center">
            <div className="w-2 h-2 bg-primary aspect-square rounded-2xl mr-2" />
            <p className="text-sm text-primary font-medium">
              <span className="hidden xl:inline-block">Working&nbsp;</span>@ QIR
            </p>
          </div>
        </div>
        <DesktopMenu paths={paths} />
      </div>
    </nav>
  );
};
