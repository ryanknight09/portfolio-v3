"use client";

import { cn } from "@/lib/utils";
import { type Path } from "@/types/navigationItem";
import {
  CircleUser,
  FlaskConical,
  FolderGit2,
  House,
  Layers,
  Mail,
  Newspaper,
  type LucideProps,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Fragment,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";

interface IconKeys {
  [key: string]: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const iconMap: IconKeys = {
  home: House,
  about: CircleUser,
  projects: FolderGit2,
  stacks: Layers,
  posts: Newspaper,
  contact: Mail,
  experimental: FlaskConical,
};

interface Props {
  paths: Path[];
}

export const DesktopMenu = ({ paths }: Props) => {
  const pathname = usePathname().replace(/^\/+/, "");

  return (
    <ul className="grid gap-3 overflow-auto no-scrollbar mb-12">
      {paths.map((path) => {
        const isCurrentPath = pathname === path.url.replace(/^\/+/, "");
        const Icon = iconMap[path.name];

        return (
          <Fragment key={path.name}>
            <li>
              {path.children ? (
                <div className="capitalize h-10 text-secondary-foreground flex items-center gap-3">
                  <Icon className="w-4 h-4" />
                  <span>{path.name}</span>
                </div>
              ) : (
                <Link
                  key={path.name}
                  className={cn(
                    "flex items-center gap-3 capitalize h-10 cursor-pointer hover:text-primary px-3 rounded-md",
                    isCurrentPath &&
                      "bg-secondary hover:text-secondary-foreground text-secondary-foreground"
                  )}
                  href={path.url}
                >
                  <Icon className="w-4 h-4" />
                  <span>{path.name}</span>
                </Link>
              )}
            </li>
            {path.children && path.children.length > 0 && (
              <ul className="grid gap-4">
                {path.children.map((child) => (
                  <li key={child.name}>
                    <Link
                      className="capitalize ml-8 h-10 text-sm text-muted-foreground cursor-pointer hover:text-primary"
                      href={child.url}
                    >
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};
