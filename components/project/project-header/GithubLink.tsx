import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const GithubLink = ({ githubHref }: { githubHref: string | null }) => {
  if (!githubHref) return null;

  return (
    <Link
      href={githubHref}
      target="_blank"
      className="flex items-center gap-2 bg-secondary rounded-md px-2 py-1 text-xs font-semibold max-w-max"
    >
      <span>Github</span> <OpenInNewWindowIcon className="h-3.5 w-auto" />
    </Link>
  );
};
