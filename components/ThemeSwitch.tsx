"use client";

import React from "react";

import { BsMoonStars, BsSun } from "react-icons/bs";

import { useTheme } from "@/context/themeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed max-sm:top-5 bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950
      `}
    >
      {theme === "light" ? <BsSun /> : <BsMoonStars />}
    </button>
  );
};

export default ThemeSwitch;
