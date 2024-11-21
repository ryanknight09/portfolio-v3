import { AnimatedButton } from "@/components/AnimatedButton";
import { DashedArrayBorder } from "@/components/DashedArrayBorder";
import { MapPin } from "lucide-react";

export default async function Page() {
  return (
    <>
      <section className="p-12 flex gap-12 flex-col">
        <h1 className="text-7xl mb-8 font-bold">My Blog Post</h1>
        <div className="text-muted-foreground text-sm overflow-auto">
          <p className="whitespace-normal">
            A passionate web designer with a knack for turning ideas into
            visually stunning, user-friendly websites.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 flex-shrink-0">
            <MapPin className="text-primary w-4 h-4" />
            <p className="text-muted-foreground text-sm text-nowrap flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
              Spokane WA, United States
            </p>
          </div>
          <DashedArrayBorder />
          <AnimatedButton className="flex-shrink-0">
            More About Me
          </AnimatedButton>
        </div>
      </section>
    </>
  );
}
