import { type TreeNode } from "@/types/TreeNode";
import { FileIcon } from "lucide-react";

interface Props<T> {
  treeNode: TreeNode<T>;
  onNodeHover?: (node: TreeNode<T> | null) => void;
}

export const File = <T,>({ treeNode, onNodeHover = () => null }: Props<T>) => (
  <div
    onMouseEnter={() => onNodeHover(treeNode)}
    onMouseLeave={() => onNodeHover(null)}
    className="flex items-center gap-2 cursor-pointer hover:text-primary"
  >
    <FileIcon className="h-4 w-auto" /> {treeNode.name}
  </div>
);
