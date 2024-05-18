"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  FaChevronRight,
  FaExternalLinkAlt,
  FaInfoCircle,
} from "react-icons/fa";
import movieCover from "@/public/images/movieDB/movieCover.png";
import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";

function MovieTime() {
  return (
    <div className="mb-4 flex flex-col items-center lg:grid lg:grid-cols-6    ">
      <div className="relative order-2  col-span-2 flex h-full w-full flex-col justify-center bg-[#B275F0]  px-4 lg:order-none lg:px-10">
        <FaInfoCircle size="24" className="absolute left-4 top-4" />

        <h1 className="pb-4 text-[2.5rem] font-bold text-gray-950">
          Movie Time
        </h1>
        <p className="pb-8 text-[1.125rem] text-gray-950">
          Movie Time lets you explore movies and Tv shows
        </p>
        <div className="space-y-4">
          <div>
            <Link
              target="_blank"
              href={"https://github.com/Mehdi-UX-Dev/Movie-Databse"}
              className="flex w-fit gap-4   transition-all  duration-200 ease-in-out hover:rounded-full hover:bg-gray-800 hover:px-8 hover:py-4 hover:text-white"
            >
              <LuGithub size="40" />
              <p className="text-[1.5rem]">Source Code</p>
            </Link>
          </div>
          <div>
            <Link
              href={"https://movie-timeapp.vercel.app/"}
              target="_blank"
              className="flex w-fit items-center gap-4 transition-all  duration-200 ease-in-out  hover:rounded-full hover:bg-gray-800 hover:px-8 hover:py-4 hover:text-white"
            >
              <FaExternalLinkAlt size="32" />
              <p className="text-[1.5rem]">Website</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-4 ">
        <Image
          src={movieCover}
          alt=""
          className="object-cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default MovieTime;
