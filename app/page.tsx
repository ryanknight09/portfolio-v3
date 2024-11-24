import { AnimatedButton } from "@/components/AnimatedButton";
import { MapPin } from "lucide-react";

export default async function Page() {
  return (
    <>
      <section className="md:py-12 flex gap-12 flex-col overflow-x-hidden">
        <div>
          <h1 className="text-4xl md:text-5xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
            Hello Everyone! Im Ryan.
          </h1>
        </div>
        <div className="text-muted-foreground text-sm overflow-auto">
          <p className="break-word">
            A passionate web designer with a knack for turning ideas into
            visually stunning, user-friendly websites.
          </p>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-6 justify-between overflow-x-hidden">
          <div className="flex gap-6 overflow-hidden items-center justify-start max-w-4xl w-full">
            <div className="flex gap-6 max-w-max">
              <div className="flex gap-2 justify-start">
                <MapPin className="text-primary w-4 h-4" />
                <p className="text-muted-foreground text-sm text-nowrap ">
                  Spokane WA, United States
                </p>
              </div>
            </div>
            <div className="flex-1 border-dotted-custom h-1" />
          </div>

          <AnimatedButton className="w-full md:max-w-max">
            More About Me
          </AnimatedButton>
        </div>
      </section>
    </>
  );
}
