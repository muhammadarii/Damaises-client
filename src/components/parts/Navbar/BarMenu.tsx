"use client";

import Link from "next/link";
import { useState } from "react";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const menu = [
  { name: "Stay", link: "/stay" },
  { name: "Dining", link: "/dining" },
  { name: "Relax", link: "/relax" },
  { name: "Discover", link: "/discover" },
];

const BarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
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

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed w-screen h-screen bg-black/30 top-0 left-0 z-40"
            />

            <motion.div
              variants={{
                hidden: { x: "-100%" },
                visible: {
                  x: "0%",
                  transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] }, // bezier for easeInOut
                },
                exit: {
                  x: "-100%",
                  transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute h-screen w-2/6 top-0 left-0 bg-[#eae5df] text-[#903C02] flex flex-col z-50"
            >
              <h1 className="text-4xl text-center p-4 carattere tracking-wide">
                <Link onClick={() => setIsOpen(false)} href="/">
                  Damaises
                </Link>
              </h1>
              <div className="flex flex-col items-start pl-10 pt-20">
                <h1>MENU</h1>
                <div className="flex flex-col gap-5 items-start mt-8">
                  {menu.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                    >
                      <Link
                        href={item.link}
                        className="hover:text-[#a57452] duration-500 text-6xl carattere tracking-widest"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BarMenu;
