import { PartyPopper } from "lucide-react";

export const ContactFormSuccess = () => (
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
