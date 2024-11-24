import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { type ButtonHTMLAttributes } from "react";
import { Button } from "./ui/button";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const AnimatedButton = (props: Props) => (
  <Button
    variant="outline"
    {...props}
    className={cn(
      props.className,
      "relative group text-muted-foreground hover:bg-transparent border-secondary"
    )}
  >
    <span className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
      {props.children}
    </span>
    <ArrowRight className="relative z-10 text-muted-foreground group-hover:text-primary transition-transform duration-200 ease-in transform group-hover:translate-x-2" />
    <span className="absolute inset-0 bg-secondary transform scale-0 group-hover:scale-100 transition-all duration-300 rounded-md" />
  </Button>
);
