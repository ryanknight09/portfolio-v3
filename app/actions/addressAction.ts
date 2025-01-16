"use server";

import { addressSchema } from "@/schemas/addressSchema";
import { type FormState } from "@/types/FormState";
import { handleInvalidForm } from "@/utils/invalidFormValues";

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
