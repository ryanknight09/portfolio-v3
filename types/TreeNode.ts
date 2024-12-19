export type TreeNode<T> = {
  name: string;
  isDirectory: boolean;
  children?: TreeNode<T>[];
  size?: number;
  lastModified?: Date;
  data?: T;
  isSynced?: boolean;
};
