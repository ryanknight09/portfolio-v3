import Image from "next/image";
import Link from "next/link";

export const GithubLink = ({ githubHref }: { githubHref: string | null }) => {
  if (!githubHref) return null;

  return (
    <Link href={githubHref} target="_blank">
      <Image
        alt="github link"
        src={`/svg/github.svg`}
        width={0}
        height={0}
        sizes="100%"
        className="aspect-square h-6 w-auto"
      />
    </Link>
  );
};
