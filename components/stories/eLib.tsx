"use client";

import Image from "next/image";
import eLib from "../../public/images/eLib/eLibCover.png";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function ELib() {
  return (
    <div className=" flex grid-cols-6 flex-col items-center lg:grid ">
      <div className="col-span-4  ">
        <Image
          src={eLib}
          alt=""
          className="  object-cover"
          placeholder="blur"
        />
      </div>
      <div className="col-span-2 flex h-full w-full flex-col  justify-center bg-[#79CDF6] px-4 lg:px-10">
        <h1 className="pb-4 text-[2.5rem] font-bold text-gray-950">
          E-Library
        </h1>
        <p className="pb-8 text-lg text-gray-950 md:w-[55ch] lg:w-full">
          The design of a mobile application for computer science faculty
          library.
        </p>
        <div className="group flex w-fit items-center gap-2 pb-2 pt-8 lg:pb-0 lg:pt-0">
          <Link
            className="text-[1.5rem] font-semibold italic text-gray-950
            group-hover:text-gray-200 "
            href={"/projects/eLib"}
          >
            Read More
          </Link>
          <FaChevronRight className="text-gray-950 group-hover:text-gray-200" />
        </div>
      </div>
    </div>
  );
}

export default ELib;
