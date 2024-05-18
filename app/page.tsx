"use client";

import Image from "next/image";
import Morasilat from "../components/stories/morasilat";
import myPhoto from "../public/images/myPhoto.jpg";
import Clinic from "@/components/stories/dentalClinic";
import ElectronicAf from "@/components/stories/electronicAf";
import MovieTime from "@/components/stories/movie";

const icons = [
  "figma",
  "html",
  "css",
  "ts",
  "js",
  "react",
  "nextjs",
  "redux",
  "firebase",
  "tailwind",
  "jest",
];

export default function Home() {
  return (
    <div className="pt-[172px]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="order-2 max-w-[80ch] lg:order-none">
            <p className="text-[2rem] font-bold text-[#4B5563]">Hello,</p>
            <h1 className=" pb-4 text-center text-[2.5rem]  leading-[1.25] md:text-[3rem] lg:text-left lg:text-[4rem] ">
              I&apos;m Mehdi Wahid.{" "}
              <span className="font-bold">A Front-End Engineer </span>
            </h1>
            <p className="max-w-prose text-[1.5rem]">
              Focus on user experience | Proficient in Next.js, TypeScript,
              Tailwind CSS | I build to optimize work!
            </p>
          </div>
          <div className="order-1 lg:order-none">
            <Image
              src={myPhoto}
              alt="photo"
              className=" border-primary w-[300px]   rounded-full border object-cover    "
            />
          </div>
        </div>
        <div className="animationOffset  mt-20  lg:flex lg:items-center ">
          <h1 className=" pb-4 text-center text-[1.5rem] font-bold lg:pb-0 lg:text-left lg:font-semibold ">
            Tech Stack
          </h1>
          <div className=" border-accent-gray lg:border-tertiary mx-auto w-11/12   border-b lg:ml-4 lg:mr-8 lg:h-10 lg:w-0 lg:border-r"></div>
          <div className="  flex flex-wrap  justify-center gap-4 pt-8 lg:pt-0   ">
            {icons.map((icon, index) => (
              <Image
                key={icon}
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt="icons"
                className="animationOffset cursor-pointer  transition-transform duration-200  ease-in-out"
                height={50}
                width={55}
                title={icon}
                style={{ animationDelay: `${index * 0.5}s` }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* projects section  */}
      <div className="mx-4 mb-20 mt-[200px] max-w-6xl space-y-40 xl:mx-auto">
        <Morasilat />
        <Clinic />
        <ElectronicAf />
        <MovieTime />
      </div>
    </div>
  );
}
