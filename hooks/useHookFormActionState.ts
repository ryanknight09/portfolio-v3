import { type FormState } from "@/types/FormState";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useRef } from "react";
import { useForm } from "react-hook-form";
import { type z, type ZodType } from "zod";

const initialState = {
  success: false,
  message: "",
};

interface Props<T extends ZodType<any, any, any> = ZodType<any, any, any>> {
  action: (prevState: FormState, data: FormData) => Promise<FormState>;
  schema: T;
  defaultFormValues: z.infer<T>;
}

export const useHookFormActionState = <T extends ZodType<any, any, any>>({
  action,
  schema,
  defaultFormValues,
}: Props<T>) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, actionFn, isPending] = useActionState(action, initialState);

  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...defaultFormValues,
    },
  });

  /* 
    Need startTransition so that the async context can be picked up by useActionState.
    without it you will not get the isPending indication amongst other errors.
  */
  const runAction = () =>
    startTransition(() => {
      actionFn(new FormData(formRef.current!));
    });

  return { runAction, isPending, state, form, formRef };
};
