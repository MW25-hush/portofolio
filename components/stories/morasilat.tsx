"use client";

import Image from "next/image";
import morasilatCover from "../../public/images/morasilat/morasilatCover.png";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

function Morasilat() {
  return (
    <div className="mb-4 flex grid-cols-6 flex-col items-center lg:grid">
      <div className="order-2 col-span-2  flex h-full w-full flex-col justify-center bg-[#8db2c3] px-4 py-8 lg:order-none lg:px-10 lg:py-0">
        <h1 className="pb-4 text-[2.5rem] font-bold ">Morasilat</h1>
        <p className="pb-8 text-[1.125rem] md:w-[55ch] lg:w-full">
          <span className="font-bold">Official</span> application for digital
          transmission of documents throughout the{" "}
          <span className="font-bold">Kabul University</span>.
        </p>
        <div className="group flex w-fit items-center gap-2  ">
          <Link
            className="text-[1.5rem] font-semibold italic group-hover:text-white  "
            href={"/projects/morasilat"}
          >
            Read More
          </Link>
          <FaChevronRight className="group-hover:text-white" />
        </div>
      </div>
      <div className="order-1 col-span-4 lg:order-none ">
        <Image
          src={morasilatCover}
          alt=""
          className="object-cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default Morasilat;
