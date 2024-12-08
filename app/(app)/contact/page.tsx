import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full gap-12">
      <div className="w-full max-w-3xl flex flex-col gap-12">
        <h1 className="text-xl md:text-2xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
          Get in Touch
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}
