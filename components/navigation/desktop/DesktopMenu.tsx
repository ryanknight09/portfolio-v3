"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type NavigationItem } from "@/types/navigationItem";
import {
  CircleUser,
  FolderGit2,
  House,
  Layers,
  Mail,
  Newspaper,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const paths: NavigationItem[] = [
  { name: "home", url: "/", icon: House },
  { name: "about", url: "/about", icon: CircleUser },
  { name: "projects", url: "/projects", icon: FolderGit2 },
  { name: "stacks", url: "/stacks", icon: Layers },
  { name: "posts", url: "/posts", icon: Newspaper },
  { name: "contact", url: "/contact", icon: Mail },
];

export const DesktopMenu = () => {
  const pathname = usePathname().replace(/^\/+/, "");

  return (
    <div className="grid gap-4">
      {paths.map((path) => {
        const isCurrentPath = pathname === path.url.replace(/^\/+/, "");

        return (
          <Link
            key={path.name}
            className={cn(
              buttonVariants({ variant: "navigation" }),
              isCurrentPath &&
                "bg-secondary hover:text-secondary-foreground text-secondary-foreground hover:bg-secondary/80",
              "group capitalize h-12"
            )}
            href={path.url}
          >
            <path.icon
              className={cn(
                !isCurrentPath && "group-hover:scale-150 transition-transform",
                "w-5 h-5"
              )}
            />
            {path.name}
          </Link>
        );
      })}
    </div>
  );
};
