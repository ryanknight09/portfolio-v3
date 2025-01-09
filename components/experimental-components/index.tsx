import { DatePickerExample } from "./date-picker/DatePickerExample";
import { ServerActionForm } from "./server-action/ServerActionForm";
import { TreeExample } from "./tree/TreeExample";

interface BlockKeys {
  [key: string]: React.ReactNode;
}

export const experimentalBlocks: BlockKeys = {
  "recursive-tree": <TreeExample />,
  "date-picker": <DatePickerExample />,
  "server-action-form": <ServerActionForm />,
};
