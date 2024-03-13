"use client";

import { Button } from "../molecules/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import eLib from "../../public/images/eLib/eLibCover.png";
import { FaChevronRight, FaExternalLinkAlt, FaLock } from "react-icons/fa";

function ELib() {
  const { push } = useRouter();
  return (
    <div className="relative mb-4 grid grid-cols-4 rounded-2xl bg-accent-lightGray py-2 shadow-lg  lg:grid-cols-6 lg:px-4 lg:py-8">
      <FaLock className="absolute left-2 top-2 text-gray-300" size={48} />

      <div className=" col-span-4 mb-4 text-center lg:col-span-2 lg:mb-0 lg:self-center lg:text-left">
        <h1 className="text-[2rem] font-bold">E-Library</h1>
        <p className="mx-auto max-w-[60%] md:max-w-[40%] lg:mx-0 lg:max-w-[80%]">
          The design of a mobile application for computer science faculty
          library.
        </p>
        <div className="mx-auto mt-4 max-w-[60%] lg:mx-0  lg:w-full lg:max-w-[80%]">
          <Button
            label="Case Study"
            type="button"
            intent={"primary"}
            width={"full"}
            size={"large"}
            handleClick={() => push("/projects/eLib")}
            Icon={FaChevronRight}
          />
        </div>
      </div>
      <div className="col-span-4 ml-2">
        <Image src={eLib} alt="" />
      </div>
    </div>
  );
}

export default ELib;
