import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { type FormState } from "@/types/FormState";
import { AlertCircle } from "lucide-react";

interface Props extends Omit<FormState, "issues" | "fields"> {
  title?: string;
}

export const FormAlert = ({ success, message, title }: Props) => {
  return (
    <Alert variant={success ? "success" : "destructive"}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
