import Image from "next/image";
import Card from "@/components/card";
import myPhoto from "../public/images/myPhoto.jpg";

const icons = [
  "figma",
  "html",
  "css",
  "ts",
  "js",
  "react",
  "nextjs",
  "tailwind",
  "jest",
];

export default function Home() {
  return (
    <>
      <div className="col-start-1 col-end-5 mt-16 lg:col-start-3  lg:col-end-11">
        <div className="grid grid-cols-4 items-center lg:grid-cols-8 lg:gap-20">
          <div className="col-span-4 mx-auto flex w-[60ch] flex-col gap-[1.5rem] text-center lg:mx-0 lg:text-left">
            <h1 className="text-[2rem] font-bold ">
              Bridging Code and Creativity as a React Alchemist & UI/UX Maestro
            </h1>
            <p className="text-[1.25rem]">
              Hello, I&apos;m Mohammad Mehdi Wahid. A passionate creator weaving
              Digital magic with pixels and code.
            </p>
          </div>
          <div className="col-span-4 mx-auto mt-2 lg:mx-0">
            <Image
              src={myPhoto}
              alt="photo"
              className=" h-[400px] w-[400px] rounded-full border border-primary object-cover "
            />
          </div>
        </div>
        <div className="mx-2 mt-16  flex items-center">
          <h1 className=" text-center text-[1.5rem] font-bold lg:text-left lg:font-semibold ">
            Tech Stack
          </h1>
          <div className="ml-2 mr-4 h-10 border-r border-tertiary lg:ml-4 lg:mr-8"></div>
          <div className="flex flex-wrap gap-4 space-y-2 ">
            {icons.map((icon) => (
              <Image
                key={icon}
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt="icons"
                className="transition-transform duration-500 ease-in-out hover:-translate-y-6"
                height={50}
                width={50}
                title={icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" col-start-1 col-end-5 mx-2 mt-20 lg:col-start-2 lg:col-end-12 lg:mx-0  ">
        <h1 className="mb-[1.5rem] ml-2 text-[1.5rem] font-bold">Projects</h1>
        <Card />
      </div>
    </>
  );
}
