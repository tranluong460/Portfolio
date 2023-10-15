"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { links } from "@/data";
import { useActiveSectionContext } from "@/context/activeSectionContext";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-50 relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="fixed left-1/2 border border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] bottom-0 sm:top-6 w-full sm:w-[30rem] h-[4.5rem] sm:h-[3.25rem] rounded-none sm:rounded-full border-white dark:border-black/40 bg-white dark:bg-gray-950 bg-opacity-80 dark:bg-opacity-75"
      />

      <nav className="fixed left-1/2 -translate-x-1/2 h-12 sm:h-0 py-2 sm:py-0 bottom-[1rem] sm:top-[1.7rem]">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.name}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center justify-center relative"
            >
              <Link
                href={link.href}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className="group flex w-full items-center justify-center p-3 transition hover:text-gray-950 dark:hover:text-gray-300 text-gray-950 dark:text-gray-500"
              >
                {link.icon}

                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="rounded-full absolute inset-0 -z-10 bg-gray-200 dark:bg-gray-800"
                  />
                )}

                <div className="absolute pt-14 top-0 hidden md:group-hover:flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800/80 relative flex text-primary items-center justify-center p-2.5 rounded-xl w-24">
                    <div className="text-[12px] leading-none font-semibold capitalize">
                      {link.name}
                    </div>

                    <div className="border-solid border-b-white dark:border-b-gray-800/80 border-b-8 border-x-transparent border-x-[6px] border-t-0 absolute -top-2" />
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
