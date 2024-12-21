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
  onNavChange: () => void;
}

// TODO: Make change Path type and make Nav Recursive.

export const Nav = ({ paths, onNavChange }: Props) => {
  return (
    <ul className="grid gap-1.5 p-6 overflow-auto no-scrollbar mb-12">
      {paths.map((path) => {
        const Icon = iconMap[path.name];

        return (
          <Fragment key={path.name}>
            <li>
              {path.children ? (
                <div className="capitalize h-12 text-secondary-foreground flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <span>{path.name}</span>
                </div>
              ) : (
                <Link
                  onClick={onNavChange}
                  className="capitalize h-12 text-secondary-foreground flex items-center gap-3 cursor-pointer hover:text-primary"
                  href={path.url}
                >
                  <Icon className="w-5 h-5" />
                  <span>{path.name}</span>
                </Link>
              )}
            </li>
            {path.children && path.children.length > 0 && (
              <ul className="grid gap-4">
                {path.children.map((child) => (
                  <li key={child.name}>
                    <Link
                      onClick={onNavChange}
                      className="capitalize ml-8 h-12 text-muted-foreground cursor-pointer hover:text-primary"
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
