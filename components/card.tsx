import Image from "next/image";
import morasilatCover from "../public/images/morasilatCover.png";
import { Button } from "./molecules/button";

function Card() {
  return (
    <div className="grid grid-cols-6 bg-accent-lightGray rounded-2xl shadow-lg px-4 py-8 mb-4">
      <div className="col-span-2 self-center">
        <h1 className="text-[2rem] font-bold">Morasilat</h1>
        <p className="w-[40ch]">
          Official application for digital transmission of documents throughout
          the Kabul University.
        </p>
        <div className="mt-4">
        <Button
          label="Case Study"
          type="button"
          intent={"primary"}
          width={"full"}
          size={"large"}
        />
        <div className="flex space-x-4 mt-4">
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
          />
        </div>
        </div>
      </div>
      <div className="col-span-4 ml-2">
        <Image src={morasilatCover} alt="" />
      </div>
    </div>
  );
}

export default Card;
