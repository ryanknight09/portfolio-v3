import { TreeExample } from "@/components/custom/tree/TreeExample";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Built Components",
  description: "Components custom built for user, practice, and experiments.",
};

export default function Components() {
  return (
    <div className="flex flex-col gap-24 w-full">
      <TreeExample />
    </div>
  );
}
