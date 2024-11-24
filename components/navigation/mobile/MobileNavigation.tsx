"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import MenuToggle from "./MenuToggle";

export const MobileNavigation = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrollingDown = latest > scrollY.getPrevious()!;

    if (isScrollingDown) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 flex items-center justify-between p-6 md:hidden"
    >
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
      <button>
        <MenuToggle className="w-10 h-10" />
      </button>
    </motion.nav>
  );
};
