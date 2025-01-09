import { type FormState } from "@/types/FormState";
import { LoadingButton } from "../LoadingButton";

interface Props {
  isPending: boolean;
  state: FormState;
}

export const ContactFormFooter = ({ isPending, state }: Props) => (
  <div className="flex flex-col space-y-4">
    {state.message && (
      <p
        className={`text-sm ${!state.success ? "text-red-500" : "text-primary"}`}
      >
        {state.message}
      </p>
    )}
    <div className="flex justify-end">
      <LoadingButton
        label={"Send"}
        loading={isPending}
        className="w-full h-12"
      />
    </div>
  </div>
);
