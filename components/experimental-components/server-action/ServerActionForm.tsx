"use client";

import { addressAction } from "@/app/actions/addressAction";
import { FormInput } from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useHookFormActionState } from "@/hooks/useHookFormActionState";
import { addressSchema } from "@/schemas/addressSchema";

export const ServerActionForm = () => {
  const { runAction, state, isPending, form, formRef } = useHookFormActionState(
    {
      action: addressAction,
      schema: addressSchema,
      defaultFormValues: {
        state: "",
        streetAddress: "",
        city: "",
        zipCode: "",
        country: "",
      },
    }
  );

  if (state.success) return <p>Success</p>;
  if (isPending) return <p>Pending</p>;

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Address Information</CardTitle>
        <CardDescription>
          Please enter your shipping address details below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(runAction)}
            ref={formRef}
            className="flex gap-4 flex-col"
          >
            <FormInput
              placeholder="123 Main Street"
              name={"streetAddress"}
              label="Street Address"
            />
            <FormInput
              placeholder="Apt 5C"
              name={"apartment"}
              label="Apartment/Suite (Optional)"
            />
            <div className="flex justify-between items-center gap-4">
              <FormInput
                placeholder="Spokane"
                name={"city"}
                label="City"
                className="w-full"
              />
              <FormInput
                placeholder="Washington"
                name={"state"}
                label="State"
                className="w-full"
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <FormInput
                placeholder="99999"
                name={"zipCode"}
                label="ZIP Code"
                className="w-full"
              />
              <FormInput
                placeholder="United State"
                name={"country"}
                label="Country"
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full mt-4">
              Save Address
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
