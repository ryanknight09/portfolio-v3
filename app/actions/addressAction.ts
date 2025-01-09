"use server";

import { type FormState } from "@/types/FormState";
import { handleInvalidForm } from "@/utils/invalidFormValues";
import { z } from "zod";

const addressSchema = z.object({
  streetAddress: z.string().min(1, "Street address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "ZIP code must be at least 5 characters"),
  country: z.string().min(1, "Country is required"),
});

export async function addressAction(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const raw = Object.fromEntries(formData);
  const parsed = addressSchema.safeParse(raw);

  if (!parsed.success) {
    return handleInvalidForm({ parsed });
  }

  try {
    console.log("Address submitted:", parsed.data);

    return {
      success: true,
      message: "Address saved successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
