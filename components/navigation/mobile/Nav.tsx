import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type NavigationItem } from "@/types/navigationItem";
import { motion } from "framer-motion";
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
import { perspective } from "./NavAnimation";

const paths: NavigationItem[] = [
  { name: "home", url: "/", icon: House },
  { name: "about", url: "/about", icon: CircleUser },
  { name: "projects", url: "/projects", icon: FolderGit2 },
  { name: "stacks", url: "/stacks", icon: Layers },
  { name: "posts", url: "/posts", icon: Newspaper },
  { name: "contact", url: "/contact", icon: Mail },
];

interface Props {
  onNavChange: () => void;
}

export const Nav = ({ onNavChange }: Props) => {
  const pathname = usePathname().replace(/^\/+/, "");

  return (
    <div className="flex flex-col items-center py-28 h-full gap-12 px-16">
      {paths.map((path, index) => {
        const isCurrentPath = pathname === path.url.replace(/^\/+/, "");

        return (
          <div key={path.name} className="w-full">
            <motion.div
              custom={index}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link
                onClick={onNavChange}
                className={cn(
                  buttonVariants({ variant: "navigation" }),
                  "group capitalize h-12 w-full bg-secondary hover:scale-110 transition-transform max-w-md",
                  isCurrentPath &&
                    "bg-primary hover:text-secondary-foreground text-secondary-foreground hover:bg-primary/80"
                )}
                href={path.url}
              >
                <path.icon
                  className={cn(
                    !isCurrentPath &&
                      "group-hover:scale-150 transition-transform",
                    "w-5 h-5"
                  )}
                />
                {path.name}
              </Link>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
