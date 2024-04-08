"use client";

import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import electronicAF from "@/public/images/electronic/electronicCover.png";
import Link from "next/link";

function ElectronicAf() {
  return (
    <div className="mb-4 flex grid-cols-6 flex-col items-center lg:grid  ">
      <div className="col-span-4 ">
        <Image src={electronicAF} alt="" className=" h-[500px] object-cover" />
      </div>
      <div className="col-span-2 flex h-full w-full flex-col  justify-center bg-[#899FDC] px-4">
        <h1 className="text-[2.5rem] font-bold text-gray-950">Electronic.AF</h1>
        <p className="pt-2 text-gray-950">
          Online store for electronic suppliances in Afghanistan.
        </p>
        <div className="lg:pb-0` group flex w-fit items-center space-x-2 pb-2 pt-8">
          <Link
            className="text-[1.5rem] font-semibold text-gray-950 group-hover:text-gray-200 "
            href={"/projects/electronic"}
          >
            Case Study
          </Link>
          <FaChevronRight className="text-gray-950 group-hover:text-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default ElectronicAf;
