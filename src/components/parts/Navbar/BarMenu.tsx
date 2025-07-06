"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

const menu = [
  {
    name: "Stay",
    link: "/stay",
  },
  {
    name: "Dining",
    link: "/dining",
  },
  {
    name: "Relax",
    link: "/relax",
  },
  {
    name: "Discover",
    link: "/discover",
  },
];

const BarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="flex flex-row gap-5 items-center z-50">
      <HiOutlineBars3CenterLeft
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 cursor-pointer"
      />
      <div className="border-l h-6" />
      <div className="flex flex-row gap-5">
        {menu.map((item) => (
          <Link href={item.link} key={item.name} className="hover:text-white">
            {item.name}
          </Link>
        ))}
      </div>
      {isOpen && (
        <div className="absolute h-screen w-2/6 top-0 left-0 bg-[#eae5df] text-[#903C02] flex flex-col">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute w-screen h-screen bg-black/20 backdrop-blur-sm -z-10"
          />
          <h1 className="text-4xl text-center p-4 carattere tracking-wide">
            <Link onClick={() => setIsOpen(false)} href="/">
              Damaises
            </Link>
          </h1>
          <div className="flex flex-col items-start pl-10 pt-20">
            <h1>MENU</h1>
            <div className="flex flex-col gap-5 items-start mt-8">
              {menu.map((item) => (
                <Link
                  href={item.link}
                  key={item.name}
                  className="hover:text-[#a57452] duration-500 text-6xl carattere tracking-widest"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BarMenu;
