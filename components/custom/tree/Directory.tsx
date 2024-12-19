import { type TreeNode } from "@/types/TreeNode";

import { ChevronDown, ChevronRight } from "lucide-react";

interface props<T> {
  treeNode: TreeNode<T>;
  open: boolean;
  isRoot: boolean;
  onClick: () => void;
}

export const Directory = <T,>({
  treeNode,
  open,
  isRoot,
  onClick,
}: props<T>) => {
  if (isRoot) return null;

  return (
    <div
      className="flex items-center gap-2 cursor-pointer font-bold"
      onClick={onClick}
    >
      {open ? <ChevronDown /> : <ChevronRight />}
      {treeNode.name}
    </div>
  );
};
