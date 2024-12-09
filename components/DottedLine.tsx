import { cn } from "@/lib/utils";
import React from "react";

export const DottedLineFlexContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="flex items-center flex-col md:flex-row justify-between overflow-x-hidden gap-12">
    {children}
  </div>
);

export const DottedLine = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "flex gap-6 overflow-hidden items-center justify-start max-w-4xl w-full",
      className
    )}
  >
    {children}
    <div className="flex-1 border-dotted-custom h-1" />
  </div>
);
