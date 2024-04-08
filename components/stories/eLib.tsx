"use client";

import Image from "next/image";
import eLib from "../../public/images/eLib/eLibCover.png";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function ELib() {
  return (
    <div className="mb-4 grid grid-cols-6 items-center  shadow-lg  ">
      <div className="col-span-4 ">
        <Image src={eLib} alt="" className="  object-cover" />
      </div>
      <div className="col-span-2 flex h-full flex-col  justify-center bg-[#79CDF6] px-4">
        <h1 className=" text-[2.5rem] font-bold text-gray-950">E-Library</h1>
        <p className="pt-2 text-gray-950">
          The design of a mobile application for computer science faculty
          library.
        </p>
        <div className="group flex w-fit items-center space-x-2 pt-8">
          <Link
            className="text-[1.5rem] font-semibold text-gray-950 group-hover:text-gray-200 "
            href={"/projects/eLib"}
          >
            Case Study
          </Link>
          <FaChevronRight className="text-gray-950 group-hover:text-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default ELib;
