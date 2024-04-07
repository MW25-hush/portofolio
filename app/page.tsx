"use client";

import Image from "next/image";
import Morasilat from "../components/stories/morasilat";
import myPhoto from "../public/images/myPhoto.jpg";
import ELib from "@/components/stories/eLib";
import Clinic from "@/components/stories/dentalClinic";
import ElectronicAf from "@/components/stories/electronicAf";
import MovieTime from "@/components/stories/movie";
import { Button } from "@/components/molecules/button";

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
    <div className="pt-20">
      <div className="mx-auto max-w-6xl">
        <div className=" animationMy  flex flex-col items-center gap-4 lg:flex-row   ">
          <div className="order-2 lg:order-none">
            <h1 className="  text-center text-[2.5rem] font-bold leading-[1.25] md:text-[3rem] lg:text-left ">
              Front-End React Developer{" "}
              <span className="block lg:inline ">UI/UX Designer</span>
            </h1>

            <p className="px-4 pt-5 text-center text-gray-600 md:pt-5 md:text-[1.25rem] lg:px-0 lg:text-left">
              Hi, I&apos;m Mohammad Mehdi Wahid. I specialize in sketching
              creative ideas and crafting elegant solutions, bringing the prduct
              to life through mastery in React and NextJs to help people enhance
              their work processes.
            </p>
          </div>
          <div className="order-1 lg:order-none">
            <Image
              src={myPhoto}
              alt="photo"
              className=" w-[300px] rounded-full   border border-primary object-cover lg:w-[800px]   "
            />
          </div>
        </div>
        <div className="animationOffset  mt-20  lg:flex lg:items-center ">
          <h1 className=" pb-4 text-center text-[1.5rem] font-bold lg:pb-0 lg:text-left lg:font-semibold ">
            Tech Stack
          </h1>
          <div className=" mx-auto w-11/12 border-b border-accent-gray   lg:ml-4 lg:mr-8 lg:h-10 lg:w-0 lg:border-r lg:border-tertiary"></div>
          <div className="  flex flex-wrap  justify-center gap-4 pt-8 lg:pt-0   ">
            {icons.map((icon, index) => (
              <Image
                key={icon}
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt="icons"
                className="animationOffset cursor-pointer  transition-transform duration-200  ease-in-out hover:-translate-y-6"
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
      <div className="   ">
        <Morasilat />
        {/* <ELib />
        <Clinic />
        <ElectronicAf />
        <MovieTime /> */}
      </div>
    </div>
  );
}
