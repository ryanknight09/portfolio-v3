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
      "relative group text-muted-foreground hover:bg-transparent group-hover:border-background hover:border-background border-muted-foreground transition-colors duration-100 delay-100"
    )}
  >
    <span className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-200">
      {props.children}
    </span>
    <ArrowRight className="relative z-10 text-muted-foreground group-hover:text-primary transition-transform duration-100 ease-in transform group-hover:translate-x-2" />
    <span className="absolute inset-0 bg-secondary transform scale-0 group-hover:scale-100 transition-all duration-175 rounded-md" />
  </Button>
);
