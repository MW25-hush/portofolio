"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utlis/motion";
import { PiSparkleFill } from "react-icons/pi";

const SkillText = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box border border-[#7042f88b] px-[7px] py-[8px] opacity-[0.9]"
      >
        <PiSparkleFill className="mr-[10px] h-5 w-5 text-[#b49bff]" />
        <h1 className="Welcome-text text-[14px]">Next Js Enthusiast</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mb-[15px] mt-[10px] text-center text-[30px] font-medium text-white"
      >
        Making apps with modern technologies
      </motion.div>
    </div>
  );
};

export default SkillText;
