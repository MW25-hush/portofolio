"use client";

import Image from "next/image";
import clinicCover from "../../public/images/clinic/clinicCover.png";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function Clinic() {
  return (
    <div className="mb-4 flex grid-cols-6 flex-col items-center lg:grid   ">
      <div className="order-2 col-span-2 flex h-full w-full flex-col justify-center  bg-[#17AACF] px-4 lg:order-none">
        <h1 className=" text-[2.5rem] font-bold text-white">
          Dental Clinic DBMS
        </h1>
        <p className="pt-2 text-[1.125rem] text-white md:w-[55ch] lg:w-full">
          A database management system for a dental clinic using Next Js and
          Firebase
        </p>
      </div>
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
