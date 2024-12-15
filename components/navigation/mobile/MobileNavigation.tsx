"use client";

// import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MenuButton } from "./MenuButton";
import { MobileMenu } from "./MobileMenu";

export const MobileNavigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrollingDown = latest > scrollY.getPrevious()!;
    setHidden(isScrollingDown && !open);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 md:hidden bg-background z-50"
    >
      <div className="flex items-center justify-between p-6">
        <div className="flex gap-4 items-center">
          <Image
            alt="me"
            src="/images/me.jpg"
            width={48}
            height={48}
            className="aspect-square rounded-md object-cover"
          />
          <div className="bg-primary-accent rounded-l-xl rounded-r-xl px-3 py-1 flex items-center justify-center">
            <div className="w-1 h-1 bg-primary aspect-square rounded-2xl mr-2" />
            <p className="text-sm text-primary font-medium">@ QIR</p>
          </div>
        </div>
        <MenuButton isOpen={open} onClick={() => setOpen(!open)} />
      </div>
      <MobileMenu activeMenu={open} onNavChange={() => setOpen(false)} />
    </motion.nav>
  );
};
