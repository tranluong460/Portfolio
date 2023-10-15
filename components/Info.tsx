"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { HiDownload } from "react-icons/hi";
import {
  BsArrowRight,
  BsFacebook,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";

import { useSection } from "@/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";

const Info = () => {
  const { ref } = useSection("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="max-w-[50rem] text-center scroll-mt-[100rem] mb-28 sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/avatar.JPG"
              alt="Tran Van Luong"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-3 px-4 text-xl !leading-[1.5] sm:text-4xl text-justify"
      >
        Xin chào! Tôi là <span className="italic">Trần Văn Lương</span>, một
        <span className="font-semibold"> Frontend Developer </span>với
        <span className="font-semibold"> 2 năm kinh nghiệm</span>. Tôi thích lập
        trình, tôi luôn tìm kiếm cơ hội để tạo ra các trải nghiệm
        <span className="font-semibold"> trực quan </span>và
        <span className="font-semibold"> hấp dẫn </span>cho người dùng.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-md font-medium"
      >
        <div className="flex justify-center items-center gap-3">
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Liên hệ với tôi
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            href="#"
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          >
            Tải CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://www.facebook.com/tranvanluong9703/"
            target="_blank"
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          >
            <BsFacebook />
          </Link>

          <Link
            href="https://www.instagram.com/tvl.03.alone/"
            target="_blank"
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          >
            <BsInstagram />
          </Link>

          <Link
            href="https://www.github.com/tranluong460/"
            target="_blank"
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          >
            <BsGithub />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Info;
