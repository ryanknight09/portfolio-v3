// "use server";

// import { type ContactFormValues } from "@/schemas/contact";
// import { type FormState } from "@/types/FormState";

// export async function contactAction(
//   prevState: FormState,
//   formData: ContactFormValues
// ): Promise<FormState> {
//   try {
//     // Add a small delay to simulate server processing
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     // TODO: Add your email sending logic here
//     // For example, using resend, sendgrid, or other email service
//     console.log("Form submitted:", formData);

//     return {
//       message: "success",
//       isError: false,
//     };
//   } catch (error) {
//     return {
//       status: error instanceof Error ? error.message : "Something went wrong",
//       isError: true,
//     };
//   }
// }
