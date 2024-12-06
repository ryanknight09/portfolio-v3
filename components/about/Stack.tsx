import { AnimatedLink } from "../AnimatedLink";
import { DottedLine, DottedLineFlexContainer } from "../DottedLine";

export const Stack = () => (
  <section className="md:pt-12 flex gap-12 flex-col overflow-x-hidden">
    <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
      Stack
    </h1>
    <div className="text-muted-foreground text-sm overflow-auto">
      <p className="break-word max-w-lg text-base">
        Based in Spokane Washington, I&apos;m a front-end developer passionate
        about building web apps that users love. When I&apos;m not coding, you
        can usually find me making music. I love exploring new ways to combine
        my technical skills with my creativity.
      </p>
    </div>
    <DottedLineFlexContainer>
      <DottedLine className="max-w-3xl" />
      <AnimatedLink className="w-full md:max-w-max" href="stacks">
        View All Stack
      </AnimatedLink>
    </DottedLineFlexContainer>
  </section>
);
