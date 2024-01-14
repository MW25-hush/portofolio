"use client";

import Image from "next/image";
import morasilatCover from "../public/images/morasilatCover.png";
import { Button } from "./molecules/button";
import { useRouter } from "next/navigation";

function Card() {
  const { push } = useRouter();
  return (
    <div className="mb-4 grid grid-cols-4 rounded-2xl bg-accent-lightGray py-2 shadow-lg  lg:grid-cols-6 lg:px-4 lg:py-8">
      <div className=" col-span-4 mb-4 text-center lg:col-span-2 lg:mb-0 lg:self-center lg:text-left">
        <h1 className="text-[2rem] font-bold">Morasilat</h1>
        <p className="mx-auto max-w-[60%] md:max-w-[40%] lg:max-w-[80%] lg:mx-0">
          Official application for digital transmission of documents throughout
          the Kabul University.
        </p>
        <div className="mx-auto mt-4 max-w-[60%] lg:max-w-[80%]  lg:mx-0 lg:w-full">
          <Button
            label="Case Study"
            type="button"
            intent={"primary"}
            width={"full"}
            size={"large"}
            handleClick={() => push("/projects/morasilat")}
          />
          <div className="mt-4 flex space-x-4">
            <Button
              label="Live Demo"
              type="button"
              intent={"secondary"}
              width={"full"}
            />
            <Button
              label="Source Code"
              type="button"
              intent={"tertiary"}
              width={"full"}
              handleClick={() =>
                push("https://github.com/MW25-hush/Murasilat_v2.0")
              }
            />
          </div>
        </div>
      </div>
      <div className="col-span-4 ml-2">
        <Image src={morasilatCover} alt=""  />
      </div>
    </div>
  );
}

export default Card;
