import { type FormState } from "@/types/FormState";
import { type SafeParseError } from "zod";

interface NewProps<T> {
  parsed: SafeParseError<T>;
  message?: string;
}

export const handleInvalidForm = <T>({
  parsed,
  message = "Invalid form data",
}: NewProps<T>): FormState => {
  return {
    success: false,
    message,
    errors: parsed.error.issues.map((issue) => issue.message),
  };
};
