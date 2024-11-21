import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { House } from "lucide-react";
import Link from "next/link";

const paths = [
  { path: "Home", url: "/" },
  { path: "About", url: "/about" },
  { path: "Projects", url: "/projects" },
  { path: "Posts", url: "/posts" },
  { path: "Contact", url: "/contact" },
];

export const DesktopMenu = () => {
  return (
    <div className="grid gap-6">
      {paths.map(({ path, url }) => (
        <Link
          key={path}
          className={cn(buttonVariants({ variant: "navigation" }), "group")}
          href={url}
        >
          <House className="w-5 h-5 group-hover:scale-150 transition-transform" />
          {path}
        </Link>
      ))}
    </div>
  );
};
