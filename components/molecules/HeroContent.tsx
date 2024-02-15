"use client";

import mainIcon from "../../public/darkTheme/mainIconsdark.svg";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utlis/motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-40 flex w-full flex-row  items-center justify-center px-20"
    >
      <div className="m-auto flex h-full w-full flex-col justify-center gap-5  text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box border border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9]"
        >
          {/* <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" /> */}
          {/* add sparkles icon */}
          <h1 className="Welcome-text text-whit px-2 text-[13px] ">
            UI/UX Designer - Front-end Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-6 flex h-auto w-auto max-w-[600px] flex-col gap-6 text-5xl font-bold text-white"
        >
          <span>
            Bridging Code and Creativity as a
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              React Alchemist & UI/UX{" "}
            </span>
            Maestro
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[600px] text-lg text-gray-400"
        >
          Hello, I&apos;m Mohammad Mehdi Wahid. I Sketch my own ideas, craft my
          own solutions and bring them to life with code magic!
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className=" hidden h-full w-full items-center justify-center md:flex"
      >
        <Image src={mainIcon} alt="work icons" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
