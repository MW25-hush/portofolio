"use client";

import Image from "next/image";
import morasilatCover from "../../public/images/morasilat/morasilatCover.png";
import { Button } from "../molecules/button";
import { useRouter } from "next/navigation";
import { FaChevronRight, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";

function Morasilat() {
  const { push } = useRouter();
  return (
    <div className=" rounded-2xl   shadow-lg  ">
      <div className="">
        <h1 className=" text-[2rem] font-bold">Morasilat</h1>
        <p className=" ">
          Official application for digital transmission of documents throughout
          the Kabul University.
        </p>
        <div className="mx-auto mt-4 max-w-[60%] lg:mx-0  lg:w-full lg:max-w-[80%]">
          <Button
            label="Case Study"
            type="button"
            intent={"primary"}
            width={"full"}
            size={"large"}
            handleClick={() => push("/projects/morasilat")}
            Icon={FaChevronRight}
          />
        </div>
      </div>
      <div className="col-span-4 ml-2">
        <Image src={morasilatCover} alt="" className="rounded-2xl" />
      </div>
    </div>
  );
}

export default Morasilat;
