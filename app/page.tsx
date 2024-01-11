import Image from "next/image";
import myPhoto from "../public/images/myPhoto.jpg";
import Card from "@/components/card";

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
      <div className="col-start-3 col-end-11  mt-16">
        <div className="grid grid-cols-8 items-center gap-20">
          <div className="flex flex-col col-span-4 gap-[1.5rem] w-[60ch]">
            <h1 className="text-[2rem] font-bold ">
              Bridging Code and Creativity as a React Alchemist & UI/UX Maestro
            </h1>
            <p className="text-[1.25rem]">
              Hello, I&apos;m Mohammad Mehdi Wahid. A passionate creator weaving
              Digital magic with pixels and code.
            </p>
          </div>
          <div className="col-span-4">
            <Image
              src={"../public/images/myPhoto.jpg"}
              alt="photo"
              className=" rounded-full h-[400px] w-[400px] object-cover border border-primary "
            />
          </div>
        </div>
        <div className="flex items-center mt-16">
          <h1 className="font-semibold ">Tech Stack</h1>
          <div className="border-r border-tertiary h-10 ml-4 mr-8"></div>
          <div className="flex space-x-4">
            {icons.map((icon) => (
              <Image
                key={icon}
                src={`https://skillicons.dev/icons?i=${icon}`}
                alt="icons"
                className="hover:-translate-y-6 transition-transform ease-in-out duration-500"
                height={50}
                width={50}
                title={icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-start-2 lg:col-end-12 mt-20 ">
        <h1 className="text-[1.5rem] font-bold mb-[1.5rem]">Projects</h1>
        <Card />
      </div>
    </>
  );
}
