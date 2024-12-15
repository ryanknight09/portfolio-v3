import { cn } from "@/lib/utils";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const HostedLink = ({
  hostedHref,
  hostingIssue,
}: {
  hostedHref: string | null;
  hostingIssue: boolean | null;
}) => (
  <div
    className={cn(
      hostingIssue &&
        "flex gap-6 items-center border border-primary/50 rounded-2xl px-4 py-1.5"
    )}
  >
    {hostedHref && (
      <Link href={hostedHref} target="_blank">
        <OpenInNewWindowIcon className="h-6 w-auto" />
      </Link>
    )}
    {hostingIssue && (
      <p className="text-primary font-semibold">* See description.</p>
    )}
  </div>
);
