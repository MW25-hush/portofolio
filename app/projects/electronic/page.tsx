"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFigma } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";

function Page() {
  return (
    <div className="animationMy px-4 lg:px-16 2xl:mx-auto 2xl:max-w-[100rem]  ">
      <div className="flex  items-center justify-center gap-8  pt-32">
        <Image
          src="/images/electronic/logo.png"
          alt="Morasilat"
          width={200}
          height={200}
        />
        <div className="">
          <h1 className="text-[2.5rem] font-bold">Electonics.AF</h1>
          <p className="w-[26ch] text-[1.25rem] text-gray-600">
            An online store for electronic suppliances in Afghanistan
          </p>
        </div>
      </div>

      <div className="flex  flex-col justify-between gap-12  pt-28 lg:flex-row">
        <div className="">
          <h1 className="text-[2rem] font-bold">Overview</h1>
          <p className="max-w-prose text-[1.5rem] lg:w-[45ch] ">
            Electronics.AF is an online store for electronic suppliances in
            Afghanistan. This website right now only services laptops.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-[2rem] font-bold">My Role</h1>
            <p className="text-[1.5rem]">UX/UI Designer, Front-end developer</p>
          </div>
          <div>
            <h1 className=" text-[2rem] font-bold">Duration</h1>
            <p className="text-[1.5rem]">5 months</p>
          </div>
          <div>
            <h1 className="text-[2rem] font-bold">Tools & Technologies</h1>
            <p className="max-w-prose text-[1.5rem] lg:w-[35ch] ">
              Paper and Pencil, Figma, Adobe Illustrator, React, Redux, Tailwind
              CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
