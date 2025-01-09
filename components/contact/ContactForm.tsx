"use client";

import { contactAction } from "@/app/actions/contactAction";
import { FormInput } from "@/components/form/FormInput";
import { FormTextArea } from "@/components/form/FormTextArea";
import { Form } from "@/components/ui/form";
import { useHookFormActionState } from "@/hooks/useHookFormActionState";
import { contactSchema } from "@/schemas/contactSchema";
import { ContactFormFooter } from "./ContactFormFooter";
import { ContactFormSuccess } from "./ContactFormSuccess";

export function ContactForm() {
  const { runAction, state, isPending, form, formRef } = useHookFormActionState(
    {
      action: contactAction,
      schema: contactSchema,
      defaultFormValues: {
        name: "",
        email: "",
        message: "",
      },
    }
  );

  if (state.success) return <ContactFormSuccess />;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(runAction)}
        ref={formRef}
        className="flex flex-col gap-2 max-w-3xl"
      >
        {state.message && !state.success && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <p className="mb-4 text-lg">Send Me an Email</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <FormInput
            name="name"
            placeholder="Your name"
            inputClassName="bg-secondary h-12"
          />
          <FormInput
            name="email"
            type="email"
            placeholder="your.email@example.com"
            inputClassName="bg-secondary h-12"
          />
        </div>
        <FormTextArea
          name="message"
          placeholder="Your message..."
          className="resize-none min-h-[200px] bg-secondary"
        />
        <ContactFormFooter isPending={isPending} state={state} />
      </form>
    </Form>
  );
}
