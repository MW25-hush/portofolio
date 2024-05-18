"use client";

import Image from "next/image";
import morasilatCover from "../../public/images/morasilat/morasilatCover.png";
import Link from "next/link";
import { LuAsterisk, LuGithub } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";

function Morasilat() {
  return (
    <div className="mb-4 flex flex-col items-center lg:grid lg:grid-cols-6   ">
      <div className="order-1 col-span-4 lg:order-none ">
        <Image
          src={morasilatCover}
          alt=""
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div
        className="relative order-2 col-span-2 flex h-full w-full flex-col justify-center  bg-[#8DB2C3]
      px-4 lg:order-none lg:px-10"
      >
        <FaInfoCircle size="24" className="absolute right-4 top-4" />
        <h1 className="pb-4 text-[2.5rem] font-bold">Morasilat</h1>
        <p className="pb-8 text-[1.125rem]  md:w-[55ch] lg:w-full">
          <span className="font-bold">Official</span> application for digital
          transmission of documents throughout the{" "}
          <span className="font-bold">Kabul University</span>.
        </p>
        <div className="flex">
          <LuAsterisk />
          <p>Protected by NDA(Non Disclosure Agreement).</p>
        </div>
      </div>
    </div>
  );
}

export default Morasilat;
