import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const HostedLink = ({
  hostedHref,
  hostingIssue,
}: {
  hostedHref: string | null;
  hostingIssue: boolean | null;
}) => {
  if (!hostedHref) return null;

  return (
    <Link
      href={hostedHref}
      target="_blank"
      className="flex items-center gap-2 bg-secondary rounded-md px-2 py-1 text-xs font-semibold"
    >
      <span>Live</span> <OpenInNewWindowIcon className="h-3.5 w-auto" />
      {hostingIssue && <span className="text-primary">* See description</span>}
    </Link>
  );
};
