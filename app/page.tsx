"use client";

import Morasilat from "../components/stories/morasilat";
import ELib from "@/components/stories/eLib";
import Clinic from "@/components/stories/dentalClinic";
import ElectronicAf from "@/components/stories/electronicAf";
import MovieTime from "@/components/stories/movie";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="pt-[172px]">
      <div className="mx-16  max-w-6xl lg:mx-auto">
        <p className="text-[2rem] font-bold text-gray-600">Hello,</p>
        <h1 className=" pb-4 text-[3rem]">
          I&apos;m Mohammad Mehdi Wahid.
          <span className="text-[4rem] font-bold">A UX Engineer</span>.
        </h1>
        <p className="max-w-prose text-[2rem]">
          I sketch ideas, craft elegant and feasible solutions that help people
          enhance their work processes and quality of work.
        </p>

        <div className="flex flex-col items-center pt-10 md:flex-row md:gap-8 ">
          <Link
            className="rounded-full bg-gray-950 p-6  text-lg font-bold text-white hover:bg-gray-700"
            href="mailto:mehdiuxdevfusion@gmail.com"
          >
            Send me a message
          </Link>
          <div className="mx-4 hidden h-14 border-r border-black"></div>
          <div className="flex items-center gap-4 pt-8 md:pt-0">
            <Link href={"https://www.linkedin.com/in/mohammad-mehdi-wahid/"}>
              <CiLinkedin size={40} />
            </Link>
            <Link href={"https://dribbble.com/M_W2525"}>
              <FaDribbble size={32} />
            </Link>
          </div>
        </div>
      </div>
      {/* projects section  */}
      <div className="mx-4 mb-20 mt-[200px] max-w-6xl space-y-40 xl:mx-auto">
        <Morasilat />
        <ELib />
        <Clinic />
        <ElectronicAf />
        <MovieTime />
      </div>
    </div>
  );
}
