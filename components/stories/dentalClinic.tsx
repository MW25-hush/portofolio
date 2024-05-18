"use client";

import Image from "next/image";
import clinicCover from "../../public/images/clinic/clinicCover.png";
import { LuAsterisk } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { FaX } from "react-icons/fa6";

function Clinic() {
  const [info, showInfo] = useState(false);

  return (
    <div className="relative mb-4 flex flex-col items-center lg:grid lg:grid-cols-6   ">
      <FaInfoCircle
        size="24"
        className="absolute left-4 top-4 cursor-pointer hover:scale-110"
        onClick={() => showInfo(true)}
      />

      {info ? (
        <AnimatePresence>
          <motion.div
            key="info"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="relative order-2 col-span-2 h-full w-full border bg-white shadow-md lg:order-none lg:px-4 lg:py-10"
          >
            <FaX
              className="absolute right-4 top-4 cursor-pointer"
              onClick={() => showInfo(false)}
            />
            <h1 className="mt-4 text-center text-[1.5rem] font-bold">
              Dental Clinic
            </h1>
            <h2 className="mt-4">Tech Stack :</h2>
            <p className="text-[1.5rem]">
              Figma, Adobe Illustrator, NextJS, Tailwind CSS, Context API
            </p>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="order-2 col-span-2 flex h-full w-full flex-col justify-center  bg-[#17AACF] px-4 lg:order-none lg:px-10"
        >
          <h1 className=" pb-4 text-[2.5rem] font-bold ">Dental Clinic DBMS</h1>
          <p className="pb-8 text-[1.125rem] md:w-[55ch] lg:w-full">
            A database management system for a dental clinic using Next Js and
            Firebase
          </p>
          <div className="flex">
            <LuAsterisk />
            <p>Protected by NDA(Non Disclosure Agreement).</p>
          </div>
        </motion.div>
      )}

      <div className="col-span-4 ">
        <Image
          src={clinicCover}
          alt="cover"
          className="  object-cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default Clinic;
