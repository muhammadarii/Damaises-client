"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import BarMenu from "./BarMenu";
import Brand from "./Brand";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-screen transition-all duration-700 ${
        scrolled
          ? "backdrop-blur-sm text-black"
          : "bg-transparent text-[#eae5df]"
      }`}
    >
      <div className="relative flex flex-row w-full items-center justify-between p-6">
        {/* Bar & Menu */}
        <BarMenu />

        {/* Logo */}
        <Brand />

        {/* Book Now */}
        <Button>Book Now</Button>
      </div>
    </nav>
  );
};

export default Navbar;
