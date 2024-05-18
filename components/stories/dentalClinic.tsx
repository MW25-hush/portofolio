"use client";

import Image from "next/image";
import clinicCover from "../../public/images/clinic/clinicCover.png";
import { LuAsterisk } from "react-icons/lu";
import { FaInfoCircle } from "react-icons/fa";

function Clinic() {
  return (
    <div className="relative mb-4 flex flex-col items-center lg:grid lg:grid-cols-6   ">
      <FaInfoCircle size="24" className="absolute left-4 top-4" />

      <div className="order-2 col-span-2 flex h-full w-full flex-col justify-center  bg-[#17AACF] px-4 lg:order-none lg:px-10">
        <h1 className=" pb-4 text-[2.5rem] font-bold ">Dental Clinic DBMS</h1>
        <p className="pb-8 text-[1.125rem] md:w-[55ch] lg:w-full">
          A database management system for a dental clinic using Next Js and
          Firebase
        </p>
        <div className="flex">
          <LuAsterisk />
          <p>Protected by NDA(Non Disclosure Agreement).</p>
        </div>
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
