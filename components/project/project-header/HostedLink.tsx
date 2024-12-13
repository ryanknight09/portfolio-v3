import { cn } from "@/lib/utils";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const HostedLink = ({ hostedHref }: { hostedHref: string | null }) => (
  <div
    className={cn(
      hostedHref &&
        "flex gap-6 items-center border border-primary/50 rounded-2xl px-4 py-1.5"
    )}
  >
    {hostedHref && (
      <Link href={hostedHref} target="_blank">
        <OpenInNewWindowIcon className="h-6 w-auto" />
      </Link>
    )}
    {hostedHref && (
      <p className="text-primary font-semibold">
        * See description for hosting issue.
      </p>
    )}
  </div>
);
