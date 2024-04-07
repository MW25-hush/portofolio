"use client";

import Image from "next/image";
import morasilatCover from "../../public/images/morasilat/morasilatCover.png";
import { Button } from "../molecules/button";
import { useRouter } from "next/navigation";
import { FaChevronRight, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import Link from "next/link";

function Morasilat() {
  const { push } = useRouter();
  return (
    <div className="mb-4 grid grid-cols-6 items-center   rounded-2xl shadow-lg  ">
      <div className="col-span-2 flex h-full flex-col  justify-center bg-[#3F72AB] px-4">
        <h1 className=" text-[2.5rem] font-bold text-white">Morasilat</h1>
        <p className="pt-2 text-white">
          Official application for digital transmission of documents throughout
          the <span className="font-bold">Kabul University</span>.
        </p>
        <div className="flex items-center space-x-2 pt-8 ">
          {/* <Button
            label="Case Study"
            type="button"
            intent={"tertiary"}
            width={"full"}
            size={"large"}
            handleClick={() => push("/projects/morasilat")}
            Icon={FaChevronRight}
          /> */}
          <Link
            className="text-[1.5rem] font-semibold text-gray-950"
            href={"/projects/morasilat"}
          >
            Case Study
          </Link>
          <FaChevronRight />
        </div>
      </div>
      <div className="col-span-4 ">
        <Image src={morasilatCover} alt="" className="  object-cover" />
      </div>
    </div>
  );
}

export default Morasilat;
