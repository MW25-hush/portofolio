"use client";

import Image from "next/image";
import morasilatCover from "../../public/images/morasilat/morasilatCover.png";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function Morasilat() {
  return (
    <div className="mb-4 grid grid-cols-6 items-center   ">
      <div className="col-span-2 flex h-full flex-col  justify-center bg-[#3F72AB] px-4">
        <h1 className=" text-[2.5rem] font-bold text-white">Morasilat</h1>
        <p className="pt-2 text-[1.125rem] text-white">
          <span className="font-bold">Official</span> application for digital
          transmission of documents throughout the{" "}
          <span className="font-bold">Kabul University</span>.
        </p>
        <div className="group flex w-fit items-center space-x-2 pt-8">
          <Link
            className="text-[1.5rem] font-semibold text-gray-200 group-hover:text-gray-400 "
            href={"/projects/morasilat"}
          >
            Case Study
          </Link>
          <FaChevronRight className="text-gray-200 group-hover:text-gray-400" />
        </div>
      </div>
      <div className="col-span-4 ">
        <Image src={morasilatCover} alt="" className="  object-cover" />
      </div>
    </div>
  );
}

export default Morasilat;
