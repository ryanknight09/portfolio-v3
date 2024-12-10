import { ContactForm } from "@/components/contact/ContactForm";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-24 w-full">
      <section className="md:pt-12 flex gap-12 flex-col">
        <h1 className="text-4xl md:text-5xl max-w-64 md:max-w-sm lg:max-w-xl break-words">
          Get in Touch!
        </h1>
      </section>
      <section className="md:pt-10flex gap-12 flex-col">
        <Link
          href={"https://www.linkedin.com/in/ryan-knight09/"}
          className="flex items-center gap-2 text-muted-foreground"
          target="_blank"
        >
          <Image
            src={"/svg/linkedin.svg"}
            alt={"linkedin"}
            width={32}
            height={32}
          />
          Linkedin
        </Link>
      </section>
      <section className="flex gap-12 flex-col">
        <ContactForm />
      </section>
    </div>
  );
}
