import { AnimatedLink } from "@/components/AnimatedLink";
import { MapPin } from "lucide-react";
import { DottedLine, DottedLineFlexContainer } from "../DottedLine";

export const Hero = () => (
  <section className="md:pt-12 flex gap-12 flex-col overflow-x-hidden">
    <h1 className="text-4xl md:text-5xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
      Hello Everyone! Im Ryan.
    </h1>
    <div className="text-muted-foreground text-sm overflow-auto">
      <p className="break-word max-w-lg">
        A passionate web designer with a knack for turning ideas into visually
        stunning, user-friendly websites.
      </p>
    </div>
    <DottedLineFlexContainer>
      <DottedLine>
        <div className="flex gap-2 justify-start">
          <MapPin className="text-primary w-4 h-4" />
          <p className="text-muted-foreground text-sm text-nowrap ">
            Spokane WA, United States
          </p>
        </div>
      </DottedLine>
      <AnimatedLink className="w-full md:max-w-max" href="about">
        More About Me
      </AnimatedLink>
    </DottedLineFlexContainer>
  </section>
);
