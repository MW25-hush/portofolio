"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import movieCover from "@/public/images/movieDB/movieCover.png";
import Image from "next/image";
import Link from "next/link";

function MovieTime() {
  return (
    <div className="mb-4 flex grid-cols-6 flex-col items-center lg:grid    ">
      <div className=" order-2 col-span-2 flex h-full w-full flex-col justify-center  bg-[#B275F0] px-4 lg:order-none">
        <h1 className=" text-[2.5rem] font-bold text-gray-950">Movie Time</h1>
        <p className="pt-2 text-[1.125rem] text-gray-950">
          Movie Time lets you explore movies and Tv shows
        </p>
      </div>
      <div className="col-span-4 ">
        <Image
          src={movieCover}
          alt=""
          className="  object-cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default MovieTime;
