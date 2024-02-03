import Image from "next/image";
import Morasilat from "../components/stories/morasilat";
import myPhoto from "../public/images/myPhoto.jpg";
import ELib from "@/components/stories/eLib";
import Clinic from "@/components/stories/dentalClinic";
import ElectronicAf from "@/components/stories/electronicAf";
import MovieTime from "@/components/stories/movie";

const icons = [
  "figma",
  "html",
  "css",
  "ts",
  "js",
  "react",
  "nextjs",
  "firebase",
  "tailwind",
  "jest",
];

export default function Home() {
  return (
    <>
      <div className="animationMy col-start-1 col-end-5 mt-16 h-[100vh]  lg:col-start-3 lg:col-end-11">
        <div className="grid grid-cols-4 gap-4 lg:grid-cols-8  lg:items-center lg:gap-0 ">
          <div className="order-2 col-span-4 mx-2 space-y-2 text-center lg:order-none  lg:mx-0 lg:flex  lg:flex-col lg:gap-[1rem] lg:space-y-0 lg:text-left">
            <h1 className="md: mx-auto max-w-[80%] text-[1.5rem] font-bold md:max-w-[60%] lg:mx-0 lg:max-w-full lg:text-[2rem]">
              Bridging Code and Creativity as a React Alchemist & UI/UX Maestro
            </h1>
            <p className=" mx-auto max-w-[80%] md:max-w-[60%] lg:mx-0  lg:max-w-full lg:text-[1.25rem]">
              Hello, I&apos;m Mohammad Mehdi Wahid. A passionate creator weaving
              Digital magic with pixels and code.
            </p>
          </div>
          <div className="order-1 col-span-4 mx-auto mt-2 lg:order-none ">
            <Image
              src={myPhoto}
              alt="photo"
              className=" w-[250px]   rounded-full border border-primary object-cover  lg:w-[300px] "
            />
          </div>
        </div>
        <div className=" mx-2 mt-16  items-center   lg:mx-0 lg:flex ">
          <h1 className=" text-center text-[1.5rem] font-bold lg:text-left lg:font-semibold ">
            Tech Stack
          </h1>
          <div className=" mx-auto mb-2  mt-4 w-1/2 border-b border-accent-gray lg:ml-4 lg:mr-8 lg:h-10 lg:w-0 lg:border-r lg:border-tertiary"></div>
          <div className="   mx-auto flex max-w-[80%] flex-wrap  justify-center gap-4 space-y-2 lg:mx-0 lg:max-w-full  ">
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
      {/* projects section  */}
      <div className=" mt- col-start-1 col-end-5 mx-2 lg:col-start-2 lg:col-end-12 lg:mx-0  ">
        <h1 className="mb-[1.5rem] text-center text-[1.5rem] font-bold lg:ml-2 lg:text-left">
          Projects
        </h1>
        <Morasilat />
        <ELib />
        <Clinic />
        <ElectronicAf />
        <MovieTime />
      </div>
    </>
  );
}
