import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { MenuButton } from "./MenuButton";

export const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <MenuButton isOpen={open} onClick={() => setOpen(!open)} />
      </SheetTrigger>
      <SheetContent side="left" className="w-full">
        <VisuallyHidden.Root>
          <SheetHeader>
            <SheetTitle />
          </SheetHeader>
        </VisuallyHidden.Root>
        <div className="grid gap-4 py-4">test</div>
      </SheetContent>
    </Sheet>
  );
};
