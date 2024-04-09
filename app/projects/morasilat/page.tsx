"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFigma } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";

function Morasilat() {
  return (
    <div className="animationMy mx-auto max-w-[100rem]  ">
      <div className="flex justify-center pt-32">
        <Image
          src="/images/Morasilat.png"
          alt="Morasilat"
          width={200}
          height={200}
        />
      </div>
      <div className="flex justify-center space-x-4 pt-5">
        <div className="flex   items-center space-x-2">
          <FiYoutube size="32" />
          <Link href="https://youtu.be/i0unxiBXC90" className="text-[1.5rem]">
            Demo
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <RiGithubLine size="32" />
          <Link
            href="https://github.com/Mehdi-UX-Dev/Murasilat_V2.0"
            className="text-[1.5rem]"
          >
            Source Code
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <FaFigma size="32" />
          <Link
            className="text-[1.5rem]"
            href="https://www.figma.com/proto/8vlqCoQtKdcnrDMHURHHcf/Morasilat?page-id=107%3A321&type=design&node-id=496-748&viewport=180%2C309%2C0.13&t=HminhZjB3XUljiyY-1&scaling=scale-down&starting-point-node-id=779%3A755&show-proto-sidebar=1&mode=design"
          >
            Prototype
          </Link>
        </div>
      </div>
      <div className="flex justify-between pt-10">
        <div className="space-y-8">
          <div>
            <h1 className="text-[2rem] font-bold">Morasilat</h1>
            <p className="w-[45ch] text-[1.5rem] ">
              Official document transmission application for Kabul University.
            </p>
          </div>

          <div className="">
            <h1 className="text-[2rem] font-bold">Overview</h1>
            <p className="w-[45ch] text-[1.5rem]">
              Morasilat is a web application designed and developed for Kabul
              University. It is used for transmission of documents within the
              organization. It is a big step in digitalizing the most
              fundamental governmental procedure in Afghanistan.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-8">
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
            <p className="w-[45ch] text-[1.5rem]">
              Paper and Pencil, Figma, Adobe Illustrator, NextJs, Redux,
              TailwindCSS
            </p>
          </div>
        </div>
      </div>

      <section className="mx-auto mt-[5rem] max-w-5xl">
        <h1 className="text-[2rem] font-bold">Persona</h1>
        <div>
          <Image
            src="/images/morasilat/personaOne.png"
            alt="persona"
            className=" mt-2 rounded-lg border object-cover"
            width={1000}
            height={1000}
          />{" "}
          <Image
            src="/images/morasilat/personaTwo.png"
            alt="persona"
            className=" mt-2 rounded-lg border object-cover"
            width={1000}
            height={1000}
          />{" "}
          <Image
            src="/images/morasilat/personaThree.png"
            alt="persona"
            className=" mt-2 rounded-lg border object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="mx-auto mt-[5rem] max-w-5xl">
        <div></div>
        <h1 className="- text-[2rem] font-bold">Paper Wireframes</h1>
        <div className="mt-[1.5rem] flex space-x-4 ">
          <Image
            src="/images/morasilat/paperWireframe.jpg"
            alt="wireframe"
            height={1000}
            width={1000}
            className="mt-2 rounded-lg border object-cover"
          />
        </div>
      </section>

      <section className="mx-auto mt-[5rem] max-w-5xl">
        <h1 className="text-[2rem] font-bold">Design System</h1>
        <Image
          src="/images/morasilat/styleGuide.png"
          alt="Design System"
          width={1000}
          height={1000}
          className="mt-2 rounded-lg border object-cover"
        />
      </section>

      <section className="mx-auto mt-[5rem] max-w-5xl">
        <h1 className="mb-[1.5rem] text-[2rem] font-bold ">Hi-fi Mockups</h1>
        <div className="space-y-4 ">
          <Image
            src="/images/morasilat/dashboard.png"
            alt="hi-fi mockup"
            className=" rounded-lg border object-cover p-4"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/morasilat/write.png"
            alt="hi-fi mockup"
            className=" rounded-lg border object-cover p-4"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/morasilat/archive.png"
            alt="hi-fi mockup"
            className=" rounded-lg border object-cover p-4"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section id="research" className="mx-auto mt-[5rem] max-w-5xl">
        <h1 className="text-[2rem] font-bold">Research</h1>
        <div className="w-10 border-b-4 border-black"></div>
        <p className="w-[55ch] pt-2">
          We took on a mission that was to fix and redesign an existing
          application which was incomplete in functionality. The main focus was
          to make the make the application{" "}
          <span className="font-bold">USEFUL.</span>
        </p>

        <Image
          src="/images/morasilat/designProblem.png"
          alt="solution"
          height={1000}
          width={1000}
          className="mt-2 rounded-lg border"
        />
      </section>
      <div className="mx-auto mb-[3rem] mt-[5rem] max-w-5xl  ">
        <h1 className="text-[2rem] font-bold  ">What I&apos;ve learned</h1>
        <p className=" w-[55ch] leading-[140%]">
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
