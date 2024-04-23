"use client";

import Morasilat from "../components/stories/morasilat";
import ELib from "@/components/stories/eLib";
import Clinic from "@/components/stories/dentalClinic";
import ElectronicAf from "@/components/stories/electronicAf";
import MovieTime from "@/components/stories/movie";

export default function Home() {
  return (
    <div className="pt-[172px]">
      <div className="mx-auto max-w-6xl">
        <p className="text-[2rem] font-bold text-gray-600">Hello,</p>
        <h1 className="pb-4 text-[3rem]  ">
          I&apos;m Mohammad Mehdi Wahid.
          <span className="text-[4rem] font-bold">A UX Engineer</span>.
        </h1>
        <p className="max-w-prose text-[2rem]">
          I sketch ideas, craft elegant and feasible solutions that help people
          enhance their work processes and quality of work.
        </p>
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
