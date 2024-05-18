"use client";

import React from "react";
import {
  FaChevronRight,
  FaExternalLinkAlt,
  FaInfoCircle,
} from "react-icons/fa";
import Image from "next/image";
import electronicAF from "@/public/images/electronic/electronicCover.png";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";

function ElectronicAf() {
  return (
    <div className="mb-4 flex flex-col items-center lg:grid lg:grid-cols-6  ">
      <div className="col-span-4 ">
        <Image
          src={electronicAF}
          alt=""
          className=" h-[500px] object-cover"
          placeholder="blur"
        />
      </div>
      <div className="relative col-span-2 flex h-full w-full flex-col justify-center  bg-[#899FDC] px-4 lg:px-10">
        <FaInfoCircle size="24" className="absolute right-4 top-4" />

        <h1 className="pb-4 text-[2.5rem] font-bold text-gray-950">
          Electronic.AF
        </h1>
        <p className="pb-8 text-gray-950">
          Online store for electronic suppliances in Afghanistan.
        </p>
        <div className="space-y-4">
          <div>
            <Link
              target="_blank"
              href={"https://github.com/BahirHakimy/Electronic.AF"}
              className="flex w-fit gap-4   transition-all  duration-200 ease-in-out hover:rounded-full hover:bg-gray-800 hover:p-4 hover:text-white"
            >
              <LuGithub size="40" />
              <p className="text-[1.5rem]">Source Code</p>
            </Link>
          </div>
          <div>
            <Link
              href={"https://electronic-af.vercel.app/"}
              target="_blank"
              className="flex w-fit items-center gap-4 transition-all  duration-200 ease-in-out  hover:rounded-full hover:bg-gray-800 hover:px-8 hover:py-4 hover:text-white "
            >
              <FaExternalLinkAlt size="32" />
              <p className="text-[1.5rem]">Website</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectronicAf;
