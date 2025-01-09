"use server";

import { contactSchema } from "@/schemas/contactSchema";
import { type FormState } from "@/types/FormState";
import { handleInvalidForm } from "@/utils/invalidFormValues";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function contactAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    return handleInvalidForm({ parsed });
  }

  try {
    resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `${parsed.data.name} - ${parsed.data.email} Is Sending You A Message`,
      html: `<p><strong>Email: </strong>${parsed.data.email}</p><p>${parsed.data.message}</p>`,
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
        success: false,
      };
    }

    return {
      message: "Something went wrong",
      success: false,
    };
  }

  return {
    message: "success",
    success: true,
  };
}
