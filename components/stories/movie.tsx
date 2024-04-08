"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import movieCover from "@/public/images/movieDB/movieCover.png";
import Image from "next/image";
import Link from "next/link";

function MovieTime() {
  return (
    <div className="mb-4 grid grid-cols-6 items-center   ">
      <div className="col-span-2 flex h-full flex-col  justify-center bg-[#B275F0] px-4">
        <h1 className=" text-[2.5rem] font-bold text-gray-950">Movie Time</h1>
        <p className="pt-2 text-[1.125rem] text-gray-950">
          Movie Time lets you explore movies and Tv shows
        </p>
        <div className="group flex w-fit items-center space-x-2 pt-8">
          <Link
            className="text-[1.5rem] font-semibold text-gray-950 group-hover:text-gray-100 "
            href={"/projects/movie-time"}
          >
            Case Study
          </Link>
          <FaChevronRight className="text-gray-950 group-hover:text-gray-100" />
        </div>
      </div>
      <div className="col-span-4 ">
        <Image src={movieCover} alt="" className="  object-cover" />
      </div>
    </div>
  );
}

export default MovieTime;
