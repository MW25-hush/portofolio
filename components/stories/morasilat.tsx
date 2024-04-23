"use client";

import Image from "next/image";
import morasilatCover from "../../public/images/morasilat/morasilatCover.png";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";

function Morasilat() {
  return (
    <div className="mb-4 flex grid-cols-6 flex-col items-center lg:grid   ">
      <div className="order-1 col-span-4 lg:order-none ">
        <Image
          src={morasilatCover}
          alt=""
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div
        className="order-2  col-span-2 flex h-full w-full flex-col justify-center  bg-[#8DB2C3]
      px-4 lg:order-none lg:px-10"
      >
        <h1 className="pb-4 text-[2.5rem] font-bold">Morasilat</h1>
        <p className="pb-8 text-[1.125rem]  md:w-[55ch] lg:w-full">
          <span className="font-bold">Official</span> application for digital
          transmission of documents throughout the{" "}
          <span className="font-bold">Kabul University</span>.
        </p>
        <div className="space-y-4">
          <div>
            <Link
              target="_blank"
              href={"https://github.com/Mehdi-UX-Dev/Murasilat_V2.0"}
              className="flex w-fit gap-4   transition-all  duration-200 ease-in-out hover:rounded-full hover:bg-gray-800 hover:p-4 hover:text-white"
            >
              <LuGithub size="40" />
              <p className="text-[1.5rem]">Source Code</p>
            </Link>
          </div>
          <div>
            <Link
              href={"https://www.youtube.com/watch?v=i0unxiBXC90"}
              target="_blank"
              className="flex w-fit gap-4 transition-all  duration-200 ease-in-out  hover:rounded-full hover:bg-red-600 hover:px-8 hover:py-4 hover:text-white"
            >
              <FiYoutube size="40" />
              <p className="text-[1.5rem]">Demo</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Morasilat;
