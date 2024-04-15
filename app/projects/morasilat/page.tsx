"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFigma } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";

function Morasilat() {
  return (
    <div className="animationMy px-4 lg:px-16 2xl:mx-auto 2xl:max-w-[100rem]  ">
      <div className="flex justify-center pt-32">
        <Image
          src="/images/Morasilat.png"
          alt="Morasilat"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 pt-10 md:flex-row ">
        <div className="flex items-center   gap-4 hover:rounded-full hover:bg-red-500 hover:px-4 hover:py-2 hover:text-white">
          <FiYoutube size="32" />
          <Link href="https://youtu.be/i0unxiBXC90" className="text-[1.5rem]">
            Demo
          </Link>
        </div>

        <div className="flex items-center gap-4 hover:rounded-full hover:bg-gray-950   hover:px-4 hover:py-2 hover:text-white ">
          <RiGithubLine size="32" />
          <Link
            href="https://github.com/Mehdi-UX-Dev/Murasilat_V2.0"
            className="text-[1.5rem]"
          >
            Source Code
          </Link>
        </div>

        <div className="hover: flex items-center gap-4 hover:rounded-full hover:bg-yellow-200 hover:px-4 hover:py-2 ">
          <FaFigma size="32" />
          <Link
            className="text-[1.5rem]"
            href="https://www.figma.com/proto/8vlqCoQtKdcnrDMHURHHcf/Morasilat?page-id=107%3A321&type=design&node-id=496-748&viewport=180%2C309%2C0.13&t=HminhZjB3XUljiyY-1&scaling=scale-down&starting-point-node-id=779%3A755&show-proto-sidebar=1&mode=design"
          >
            Prototype
          </Link>
        </div>
      </div>
      <div className="flex  flex-col justify-between gap-12  pt-28 lg:flex-row">
        <div className="">
          <h1 className="text-[2rem] font-bold">Overview</h1>
          <p className="max-w-prose text-[1.5rem] ">
            Morasilat is a web application designed and developed application
            for Kabul University. It is used for transmission of documents
            within the organization. It is a big step in digitalizing the most
            fundamental governmental procedure in Afghanistan.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-[2rem] font-bold">My Role</h1>
            <p className="text-[1.5rem]">UX/UI Designer, Front-end developer</p>
          </div>
          <div>
            <h1 className=" text-[2rem] font-bold">Duration</h1>
            <p className="text-[1.5rem]">6 months</p>
          </div>
          <div>
            <h1 className="text-[2rem] font-bold">Tools & Technologies</h1>
            <p className="max-w-prose text-[1.5rem] ">
              Paper and Pencil, Figma, Adobe Illustrator, NextJs, Redux,
              TailwindCSS
            </p>
          </div>
        </div>
      </div>

      <section className=" pt-[100px]  lg:pt-[200px]">
        <h1 className="pb-10 text-[2.5rem] md:pb-20  md:text-[5rem] ">
          Design Process
        </h1>
        <div className="flex justify-center">
          <Image
            src="/images/morasilat/design process.png"
            alt=""
            width={1000}
            height={1000}
            className=" object-cover"
          />
        </div>
      </section>

      <section className="pt-[100px] lg:pt-[200px]">
        <h1 className=" pb-10 text-[2.5rem] md:pb-20 md:text-[5rem]">Define</h1>
        <div className="space-y-20 rounded-xl bg-gray-100 py-20">
          <Image
            src="/images/morasilat/5w.png"
            alt=""
            className="mx-auto"
            height={1000}
            width={1000}
          />
          <Image
            src="/images/morasilat/problem statement.png"
            alt=""
            className="mx-auto mt-4 rounded-[2rem]"
            height={1000}
            width={1000}
          />
        </div>
      </section>

      <section className="pt-[100px] lg:pt-[200px]">
        <h1 className="pb-10 text-[2.5rem] md:pb-20  md:text-[5rem] ">
          Empathize
        </h1>
        <div className=" space-y-20 bg-gray-100 py-20">
          <Image
            src="/images/morasilat/userstories.png"
            alt="persona"
            className="mx-auto  rounded-lg border object-cover"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/morasilat/personaOne.png"
            alt="persona"
            className="mx-auto  rounded-lg border object-cover"
            width={1000}
            height={1000}
          />{" "}
          <Image
            src="/images/morasilat/personaTwo.png"
            alt="persona"
            className="mx-auto rounded-lg border object-cover"
            width={1000}
            height={1000}
          />{" "}
          <Image
            src="/images/morasilat/personaThree.png"
            alt="persona"
            className="mx-auto rounded-lg border object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="pt-[100px] lg:pt-[200px]">
        <h1 className="pb-10 text-[2.5rem] md:pb-20 md:text-[5rem]">Ideate</h1>
        <div className="space-y-20 bg-gray-100 py-20 ">
          <Image
            src="/images/morasilat/paperWireframe.jpg"
            alt="wireframe"
            height={1000}
            width={1000}
            className="mx-auto rounded-lg border object-cover"
          />
          <Image
            src="/images/morasilat/userflow.png"
            alt="wireframe"
            height={1000}
            width={1000}
            className="mx-auto rounded-lg border object-cover"
          />
        </div>
      </section>

      <section className="pt-[100px] lg:pt-[200px]">
        <h1 className="pb-10 text-[2.5rem] md:pb-20  md:text-[5rem] ">
          Style Guide
        </h1>
        <div className="bg-gray-100 py-20 ">
          <Image
            src="/images/morasilat/styleGuide.png"
            alt="Design System"
            width={1000}
            height={1000}
            className="mx-auto rounded-lg border object-cover"
          />
        </div>
      </section>

      <section className="pt-[100px] lg:pt-[200px]">
        <h1 className="pb-10 text-[2.5rem] md:pb-20  md:text-[5rem]">
          Prototype
        </h1>
        <div className="bg-gray-100 py-20 ">
          <Image
            src="/images/morasilat/prototype.png"
            alt="Design System"
            width={1000}
            height={1000}
            className="mx-auto rounded-lg border object-cover"
          />
        </div>
      </section>

      <section id="research" className="pt-28">
        <div className="flex flex-col justify-between pb-20 text-center md:text-left xl:flex-row">
          <h1 className="pb-10 text-[2.5rem] md:pb-20  md:text-[5rem] ">
            Research
          </h1>
          <p className="pt-2 text-[1.5rem] md:w-[55ch]">
            We took on a mission that was to fix and redesign an existing
            application which was incomplete in functionality. The main focus
            was to make the make the application{" "}
            <span className="font-bold">USEFUL.</span>
          </p>
        </div>
        <div className=" space-y-20 bg-gray-100 py-20">
          <Image
            src="/images/morasilat/issue 1.png"
            alt="solution"
            height={1000}
            width={1000}
            className="mx-auto rounded-lg border object-cover"
          />{" "}
          <Image
            src="/images/morasilat/issue 2.png"
            alt="solution"
            height={1000}
            width={1000}
            className="mx-auto rounded-lg border object-cover"
          />{" "}
          <Image
            src="/images/morasilat/enhance 1.png"
            alt="solution"
            height={1000}
            width={1000}
            className="mx-auto rounded-lg border object-cover"
          />
        </div>
      </section>
      <div className=" mb-[3rem] mt-[100px] flex flex-col md:mt-[200px] md:flex-row md:justify-between  ">
        <h1 className="pb-10 text-[2.5rem] md:pb-20  md:text-[5rem] ">
          Next Steps
        </h1>
        <p className=" text-[1.5rem] leading-[140%] md:w-[55ch]">
          Morasilat was my first real world project which right now it is used
          by hundreds of users. I implemented industry level standards such as
          design thinking process,Atomic Design System,Next Js Enterprise Grade
          Boilerplate,Storybook, lean agile development method to work on such a
          massive project. Currently it is used by the whole Kabul University in
          a testing environment in order to be full implemented.
        </p>
      </div>
    </div>
  );
}

export default Morasilat;
