import { FadeUpDiv } from "@/components/Animation";
import { GithubLink } from "./GithubLink";
import { HostedLink } from "./HostedLink";
import { PrivateRepository } from "./PrivateGitHub";

interface Props {
  title: string;
  isPrivate: boolean | null;
  githubHref: string | null;
  hostedHref: string | null;
  hostingIssue: boolean | null;
}

export const ProjectHeader = ({
  title,
  isPrivate,
  githubHref,
  hostedHref,
  hostingIssue,
}: Props) => {
  return (
    <FadeUpDiv className="flex gap-12 flex-col">
      <div className="flex items-center gap-12">
        <h1 className="text-4xl md:text-5xl lg:max-w-xl break-words">
          {title}
        </h1>
        <div className="flex gap-6 items-center">
          <PrivateRepository isPrivate={isPrivate} />
          <GithubLink githubHref={githubHref} />
          <HostedLink hostedHref={hostedHref} hostingIssue={hostingIssue} />
        </div>
      </div>
    </FadeUpDiv>
  );
};
