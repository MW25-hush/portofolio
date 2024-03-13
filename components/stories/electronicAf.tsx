"use client";

import React from "react";
import { Button } from "../molecules/button";
import { FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { RiGithubLine } from "react-icons/ri";
import Image from "next/image";
import electronicAF from "@/public/images/electronic/HomePage.png";

function ElectronicAf() {
  const { push } = useRouter();
  return (
    <div className="mb-4 grid grid-cols-4 rounded-2xl bg-accent-lightGray py-2 shadow-lg  lg:grid-cols-6 lg:px-4 lg:py-8">
      <div className=" col-span-4 mb-4 text-center lg:col-span-2 lg:mb-0 lg:self-center lg:text-left">
        <h1 className="text-[2rem] font-bold">Electronic.AF</h1>
        <p className="mx-auto max-w-[60%] md:max-w-[40%] lg:mx-0 lg:max-w-[80%]">
          Online store for electronic suppliances in Afghanistan
        </p>
        <div className="mx-auto mt-4 max-w-[60%] lg:mx-0  lg:w-full lg:max-w-[80%]">
          <Button
            label="Case Study"
            type="button"
            intent={"primary"}
            width={"full"}
            size={"large"}
            handleClick={() => push("/projects/electronic")}
            Icon={FaChevronRight}
          />
          {/* <div className="mt-4 flex space-x-4">
            <Button
              label="Live Demo"
              type="button"
              intent={"secondary"}
              width={"full"}
              Icon={FaExternalLinkAlt}
              handleClick={() => push("https://electronic-af.vercel.app")}
            />
            <Button
              label="Source Code"
              type="button"
              intent={"tertiary"}
              width={"full"}
              handleClick={() =>
                push("https://github.com/Mehdi-UX-Dev/Electronic.AF")
              }
              Icon={RiGithubLine}
            />
          </div> */}
        </div>
      </div>
      <div className="col-span-4 ml-2">
        <Image src={electronicAF} alt="" />
      </div>
    </div>
  );
}

export default ElectronicAf;
