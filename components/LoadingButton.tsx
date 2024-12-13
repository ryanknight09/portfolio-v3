"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Send } from "lucide-react";

interface Props {
  className?: string;
  label: string;
  loading: boolean;
}

const iconClass =
  "relative z-10 group-hover:text-primary transition-transform duration-100 ease-in transform group-hover:translate-x-2";

export const LoadingButton = ({ label, loading, className }: Props) => (
  <Button
    disabled={loading}
    type="submit"
    className={cn(
      className,
      "relative group hover:bg-transparent group-hover:border-background hover:border-background border-muted-foreground transition-colors duration-100 delay-100"
    )}
  >
    <span className="relative z-10 group-hover:text-primary transition-colors duration-200">
      {loading ? "Sending..." : label}
    </span>
    {loading ? (
      <ReloadIcon className={cn(iconClass, "animate-spin")} />
    ) : (
      <Send className={iconClass} />
    )}
    <span className="absolute inset-0 bg-secondary transform scale-0 group-hover:scale-100 transition-all duration-175 rounded-md" />
  </Button>
);
