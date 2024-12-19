import { DottedLine } from "@/components/DottedLine";
import { experimentalComponents } from "@/components/experiments-components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Built Components",
  description: "Components custom built for use, practice, and experiments.",
};

export default function Components() {
  return (
    <div className="flex flex-col gap-24 w-full">
      {experimentalComponents.map((component) => (
        <>
          {component}
          <DottedLine />
        </>
      ))}
    </div>
  );
}
