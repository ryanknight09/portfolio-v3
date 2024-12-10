import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { type AnchorHTMLAttributes } from "react";
import { buttonVariants } from "./ui/button";

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

export const AnimatedLink = (props: Props) => (
  <Link
    href={props.href || ""}
    className={cn(
      buttonVariants({
        variant: "ghost",
        className: cn(
          props.className,
          "relative group text-muted-foreground hover:bg-transparent group-hover:border-background hover:border-background border-muted-foreground transition-colors duration-100 delay-100"
        ),
      })
    )}
  >
    <span className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-200">
      {props.children}
    </span>
    <ArrowRight className="relative z-10 text-muted-foreground group-hover:text-primary transition-transform duration-100 ease-in transform group-hover:translate-x-2" />
    <span className="absolute inset-0 bg-secondary transform scale-0 group-hover:scale-100 transition-all duration-175 rounded-md" />
  </Link>
);

export const AnimatedGhostLink = (props: Props) => (
  <Link
    href={props.href || ""}
    className={cn(
      buttonVariants({
        variant: "ghost",
        className: cn(
          props.className,
          "relative group text-muted-foreground hover:bg-transparent hover:text-primary border-muted-foreground transition-colors duration-200 delay-200"
        ),
      })
    )}
  >
    <ArrowLeft className="relative z-10 transition-transform duration-200 ease-in transform group-hover:-translate-x-1" />
    {props.children}
  </Link>
);
