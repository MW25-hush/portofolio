"use client";

import { Button } from "../molecules/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import clinicCover from "../../public/images/clinic/clinicCover.png";
import { FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";

function Clinic() {
  const { push } = useRouter();
  return (
    <div className="relative mb-4 grid grid-cols-4 rounded-2xl bg-accent-lightGray py-2 shadow-lg  lg:grid-cols-6 lg:px-4 lg:py-8">
      <FaLock
        className="absolute left-2 top-2 text-gray-300"
        size={48}
        title="Authorized"
      />

      <div className=" col-span-4 mb-4 text-center lg:col-span-2 lg:mb-0 lg:self-center lg:text-left">
        <h1 className="text-[2rem] font-bold">Dental Clinic Database</h1>
        <p className="mx-auto max-w-[60%] md:max-w-[40%] lg:mx-0 lg:max-w-[80%]">
          An application for a Dental Clinic using Next Js and Firebase
        </p>
        <div className="mt-4 flex space-x-4">
          <Button
            label="Live Demo"
            type="button"
            intent={"primary"}
            width={"full"}
            handleClick={() => {
              push("https://mw-database.vercel.app/");
            }}
            Icon={FaExternalLinkAlt}
          />
          <Button
            label="Source Code"
            type="button"
            intent={"tertiary"}
            width={"full"}
            handleClick={() =>
              push("https://github.com/MW25-hush/ClinicDatabase")
            }
            Icon={RiGithubLine}
          />
        </div>
      </div>
      <div className="col-span-4 ml-2">
        <Image src={clinicCover} alt="" />
      </div>
    </div>
  );
}

export default Clinic;
