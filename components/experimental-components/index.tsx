import { TreeExample } from "./tree/TreeExample";

export const experimentalComponents = [<TreeExample key="tree" />];

interface BlockKeys {
  [key: string]: React.ReactNode;
}

export const experimentalBlocks: BlockKeys = {
  "recursive-tree": <TreeExample />,
};
