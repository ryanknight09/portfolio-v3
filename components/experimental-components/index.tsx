import { DatePicker } from "./date-picker/DatePicker";
import { TreeExample } from "./tree/TreeExample";

interface BlockKeys {
  [key: string]: React.ReactNode;
}

export const experimentalBlocks: BlockKeys = {
  "recursive-tree": <TreeExample />,
  "date-picker": <DatePicker />,
};
