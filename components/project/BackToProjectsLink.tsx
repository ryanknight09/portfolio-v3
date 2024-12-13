import { AnimatedGhostLink } from "../AnimatedLink";
import { FadeUpDiv } from "../Animation";
import { DottedLine, DottedLineFlexContainer } from "../DottedLine";

export const BackToProjectsLink = () => (
  <FadeUpDiv>
    <DottedLineFlexContainer>
      <DottedLine>
        <AnimatedGhostLink className="w-full md:max-w-max" href="/projects">
          Back to Projects
        </AnimatedGhostLink>
      </DottedLine>
    </DottedLineFlexContainer>
  </FadeUpDiv>
);
