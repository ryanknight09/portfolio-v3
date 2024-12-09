// "use client";

// import { contactAction } from "@/app/actions/contactAction";
// import { FormInput } from "@/components/form/FormInput";
// import { FormTextArea } from "@/components/form/FormTextArea";
// import { Button } from "@/components/ui/button";
// import { Form } from "@/components/ui/form";
// import { type ContactFormValues, contactFormResolver } from "@/schemas/contact";
// import { useActionState } from "react";
// import { useFormStatus } from "react-dom";
// import { useForm } from "react-hook-form";

// function SubmitButton() {
//   const { pending } = useFormStatus();

//   return (
//     <Button type="submit" size="lg" disabled={pending}>
//       {pending ? "Sending..." : "Send Message"}
//     </Button>
//   );
// }

// export function ContactForm() {
//   const methods = useForm<ContactFormValues>({
//     resolver: contactFormResolver,
//     defaultValues: {
//       name: "",
//       email: "",
//       message: "",
//     },
//   });

//   const [state, formAction] = useActionState(contactAction, {});

//   async function onSubmit(values: ContactFormValues) {
//     await formAction(values);

//     if (state.status === "success") {
//       methods.reset();
//     }
//   }

//   return (
//     <Form {...methods}>
//       <form
//         onSubmit={methods.handleSubmit(onSubmit)}
//         className="w-full space-y-8"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <FormInput label="Name" name="name" placeholder="Your name" />
//           <FormInput
//             label="Email"
//             name="email"
//             type="email"
//             placeholder="your.email@example.com"
//           />
//         </div>
//         <FormTextArea
//           label="Message"
//           name="message"
//           placeholder="Your message..."
//           className="resize-none min-h-[200px]"
//         />
//         <div className="flex flex-col space-y-4">
//           {state.message && (
//             <p
//               className={`text-sm ${
//                 state.status === "error" ? "text-red-500" : "text-green-500"
//               }`}
//             >
//               {state.message}
//             </p>
//           )}
//           <div className="flex justify-end">
//             <SubmitButton />
//           </div>
//         </div>
//       </form>
//     </Form>
//   );
// }
