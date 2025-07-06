"use client";

import Navbar from "@/components/parts/Navbar";
import { useEffect } from "react";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="overflow-hidden">
      <Navbar />
      {children}
    </main>
  );
};

export default AppWrapper;
