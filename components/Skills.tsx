"use client";

import React from "react";

import { motion } from "framer-motion";

import { useSection } from "@/hooks";
import { skills } from "@/data";

const Skills = () => {
  const { ref } = useSection("Skills");

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[70rem] text-center scroll-mt-28 mb-28 sm:mb-40"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-5 text-lg text-gray-800">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="max-w-[20rem] p-3 rounded-xl bg-white dark:bg-gray-800/80 dark:text-white/80"
          >
            <div className="text-[28px] font-semibold mb-5 text-center">
              {skill.title}
            </div>

            <div className="flex justify-center flex-wrap gap-3">
              {skill.skills.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  className="hover:scale-105 text-[15px] font-normal border-[1px] border-gray-300 rounded-xl p-3 flex justify-center items-center gap-2"
                >
                  <div className="w-6 h-6">{item.image}</div>
                  {item.name}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
