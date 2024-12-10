"use client";

import { contactAction } from "@/app/actions/contactAction";
import { FormInput } from "@/components/form/FormInput";
import { FormTextArea } from "@/components/form/FormTextArea";
import { Form } from "@/components/ui/form";
import { useActionLifeCycle } from "@/hooks/useActionLifeCycle";
import { contactSchema } from "@/schemas/contactSchema";
import { PartyPopper } from "lucide-react";
import { LoadingButton } from "../LoadingButton";

export function ContactForm() {
  const { runAction, state, isPending, form, formRef } = useActionLifeCycle({
    action: contactAction,
    schema: contactSchema,
    defaultFormValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  if (state.message === "success")
    return (
      <div className="flex items-center space-x-4 rounded-md border border-primary p-8 max-w-3xl">
        <PartyPopper />
        <div className="flex-1 space-y-1">
          <p className="text-xl leading-none">Thanks!</p>
          <p className="text-muted-foreground">
            I&apos;ll get back to you as soon as I can!
          </p>
        </div>
      </div>
    );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(runAction)}
        ref={formRef}
        className="flex flex-col gap-2 max-w-3xl"
      >
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
        <div className="flex flex-col space-y-4">
          {state.message && (
            <p
              className={`text-sm ${
                state.isError ? "text-red-500" : "text-primary"
              }`}
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
      </form>
    </Form>
  );
}
