"use client";

import Image from "next/image";
import clinicCover from "../../public/images/clinic/clinicCover.png";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function Clinic() {
  return (
    <div className="flex grid-cols-6 flex-col items-center lg:grid   ">
      <div className="order-2 col-span-2 flex h-full w-full flex-col justify-center bg-[#17AACF] px-4  py-8 lg:order-none lg:px-10 lg:py-0">
        <h1 className=" text-[2.5rem] font-bold ">Dental Clinic DBMS</h1>
        <p className="pt-2 text-[1.125rem]  md:w-[55ch] lg:w-full">
          A database management system for a dental clinic using Next Js and
          Firebase
        </p>
        <div className="group flex w-fit items-center gap-2 pt-2">
          <Link
            className="text-[1.5rem] font-semibold italic group-hover:text-white "
            href={"/projects/clinic"}
          >
            Read More
          </Link>
          <FaChevronRight className="group-hover:text-white" />
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
