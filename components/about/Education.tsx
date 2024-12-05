import { DottedLine } from "../DottedLine";

export const Education = () => (
  <section className="md:pt-12 flex gap-12 flex-col overflow-x-hidden">
    <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
      Education
    </h1>
    {/* <div className="text-muted-foreground text-sm overflow-auto">
      <p className="break-word max-w-lg">
        Based in Spokane Washington, I&apos;m a front-end developer passionate
        about building web apps that users love. When I&apos;m not coding, you
        can usually find me making music. I love exploring new ways to combine
        my technical skills with my creativity.
      </p>
    </div> */}
    <DottedLine className="max-w-3xl" />
  </section>
);
