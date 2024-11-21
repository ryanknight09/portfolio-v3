"use client";

import { DesktopNav } from "./desktop/DesktopNav";
import { MobileNavigation } from "./mobile/MobileNavigation";

export const Navigation = () => {
  return (
    <>
      <MobileNavigation />
      <DesktopNav />
    </>
  );
};
