"use client";

import { cn } from "@/lib/utils";
import { type TreeNode } from "@/types/TreeNode";
import { useState } from "react";
import { Directory } from "./Directory";
import { File } from "./File";
interface Props<T> {
  treeNode: TreeNode<T>;
  isRoot: boolean;
  onNodeHover?: (node: TreeNode<T> | null) => void;
}

export const Tree = <T,>({
  treeNode,
  isRoot,
  onNodeHover = () => null,
}: Props<T>) => {
  const [open, setOpen] = useState(false);

  if (!treeNode.isDirectory)
    return <File treeNode={treeNode} onNodeHover={onNodeHover} />;

  const onDirectoryClick = () => setOpen(!open);

  return (
    <div className="flex flex-col gap-4">
      <Directory
        treeNode={treeNode}
        open={open}
        isRoot={isRoot}
        onClick={onDirectoryClick}
      />
      {(open || isRoot) &&
        treeNode.children?.map((child) => (
          <div key={child.name} className={cn(!isRoot && "pl-8")}>
            <Tree treeNode={child} isRoot={false} onNodeHover={onNodeHover} />
          </div>
        ))}
    </div>
  );
};
