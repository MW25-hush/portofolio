"use client";

import Image from "next/image";
import morasilatCover from "../../public/images/morasilat/morasilatCover.png";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function Morasilat() {
  return (
    <div className="mb-4 flex grid-cols-6 flex-col items-center lg:grid   ">
      <div className="order-2  col-span-2 flex h-full w-full flex-col justify-center  bg-[#3F72AB] px-4 lg:order-none">
        <h1 className=" text-[2.5rem] font-bold text-white">Morasilat</h1>
        <p className="pt-2 text-[1.125rem] text-white md:w-[55ch] lg:w-full">
          <span className="font-bold">Official</span> application for digital
          transmission of documents throughout the{" "}
          <span className="font-bold">Kabul University</span>.
        </p>
        <div className="group flex w-fit items-center space-x-2 pb-4 pt-8 lg:pb-0">
          <Link
            className="text-[1.5rem] font-semibold text-gray-200 group-hover:text-gray-400 "
            href={"/projects/morasilat"}
          >
            Case Study
          </Link>
          <FaChevronRight className="text-gray-200 group-hover:text-gray-400" />
        </div>
      </div>
      <div className="order-1 col-span-4 lg:order-none ">
        <Image src={morasilatCover} alt="" className="  object-cover" />
      </div>
    </div>
  );
}

export default Morasilat;
