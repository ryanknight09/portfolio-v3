"use client";

import { type TreeNode } from "@/types/TreeNode";
import { Cloud, CloudOff } from "lucide-react";
import { useState } from "react";
import { Tree } from "./Tree";
import { type MockData, mockTree } from "./mockTree";

export const TreeExample = () => {
  const [node, setNode] = useState<TreeNode<MockData> | null>(null);

  const onNodeHover = (node: TreeNode<MockData> | null) => {
    setNode(node);
  };

  return (
    <div className="grid gap-6">
      <FileInfo node={node} />
      <div className="p-4 bg-secondary h-96 rounded-md overflow-hidden">
        <div className="overflow-auto h-full">
          <Tree treeNode={mockTree} isRoot onNodeHover={onNodeHover} />
        </div>
      </div>
    </div>
  );
};

const FileInfo = ({ node }: { node: TreeNode<MockData> | null }) => (
  <div className="flex flex-col gap-2 p-4 border border-primary rounded-md ">
    <div className="flex items-center gap-2 justify-between">
      <span>Synced</span>
      {node ? (
        node?.isSynced ? (
          <Cloud className="text-blue-500" />
        ) : (
          <CloudOff className="text-red-500" />
        )
      ) : (
        "—"
      )}
    </div>
    <div className="flex items-center gap-2 justify-between">
      <span>Size</span> {node?.size || "—"}
    </div>
    <div className="flex items-center gap-2 justify-between">
      <span>Modified</span> {node?.lastModified?.toLocaleString() || "—"}
    </div>
  </div>
);
