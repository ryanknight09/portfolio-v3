import { AnimatedLink } from "../AnimatedLink";
import { DottedLine, DottedLineFlexContainer } from "../DottedLine";

export const Stack = () => (
  <section className="md:pt-12 flex gap-12 flex-col overflow-x-hidden">
    <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
      Stack
    </h1>
    <div className="text-muted-foreground text-sm overflow-auto"></div>
    <DottedLineFlexContainer>
      <DottedLine className="max-w-3xl" />
      <AnimatedLink className="w-full md:max-w-max" href="stacks">
        View All Stack
      </AnimatedLink>
    </DottedLineFlexContainer>
  </section>
);
