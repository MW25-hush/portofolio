"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFigma } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";

function MovieTime() {
  return (
    <div className="animationMy px-4 lg:px-16 2xl:mx-auto 2xl:max-w-[100rem]  ">
      <div className="flex  items-center justify-center gap-12  pt-32">
        <Image
          src="/images/movieDB/logo.png"
          alt="Morasilat"
          width={500}
          height={200}
        />
        <div className="">
          <h1 className="text-[2.5rem] font-bold">Movie Time</h1>
          <p className="w-[26ch] text-[1.25rem] text-gray-600">
            An online store for electronic suppliances in Afghanistan
          </p>
        </div>
      </div>

      <div className="flex  flex-col justify-between gap-12  pt-28 lg:flex-row">
        <div className="">
          <h1 className="text-[2rem] font-bold">Overview</h1>
          <p className="max-w-prose text-[1.5rem] lg:w-[45ch] ">
            Electronics.AF is an online store for electronic suppliances in
            Afghanistan. This website right now only services laptops.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-[2rem] font-bold">My Role</h1>
            <p className="text-[1.5rem]">UX/UI Designer, Front-end developer</p>
          </div>
          <div>
            <h1 className=" text-[2rem] font-bold">Duration</h1>
            <p className="text-[1.5rem]">5 months</p>
          </div>
          <div>
            <h1 className="text-[2rem] font-bold">Tools & Technologies</h1>
            <p className="max-w-prose text-[1.5rem] lg:w-[35ch] ">
              Paper and Pencil, Figma, Adobe Illustrator, React, Redux, Tailwind
              CSS
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
            className="object-cover"
          />
        </div>
      </section>

      <section className="pt-[100px] lg:pt-[200px]">
        <h1 className=" pb-10 text-[2.5rem] md:pb-20 md:text-[5rem]">Define</h1>
        <div className="space-y-20 rounded-xl bg-gray-100 py-20">
          <Image
            src="/images/eLib/5w.png"
            alt=""
            className="mx-auto"
            height={1000}
            width={1000}
          />
          <Image
            src="/images/eLib/problem statement.jpg"
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
            src="/images/eLib/professor user story.jpg"
            alt="persona"
            className="mx-auto  rounded-lg border object-cover"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/eLib/student user story.jpg"
            alt="persona"
            className="mx-auto  rounded-lg border object-cover"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/eLib/Professor Persona.jpg"
            alt="persona"
            className="mx-auto  rounded-lg border object-cover"
            width={1000}
            height={1000}
          />{" "}
          <Image
            src="/images/eLib/Students Persona.jpg"
            alt="persona"
            className="mx-auto rounded-lg border object-cover"
            width={1000}
            height={1000}
          />{" "}
        </div>
      </section>

      <section className="pt-[100px] lg:pt-[200px]">
        <h1 className="pb-10 text-[2.5rem] md:pb-20 md:text-[5rem]">Ideate</h1>
        <div className="space-y-20 bg-gray-100 py-20 ">
          <Image
            src="/images/eLib/Big Picture Storyboard.jpg"
            alt="wireframe"
            height={1000}
            width={1000}
            className="mx-auto rounded-lg border object-cover"
          />
          <Image
            src="/images/eLib/Close-up Storyboard.jpg"
            alt="wireframe"
            height={1000}
            width={1000}
            className="mx-auto rounded-lg border object-cover"
          />
          <Image
            src="/images/eLib/Wireframe.jpg"
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
            src="/images/eLib/prototype.png"
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
            src="/images/eLib/UX Research.jpg"
            alt="solution"
            height={1000}
            width={1000}
            className="mx-auto rounded-lg border object-cover"
          />{" "}
          <Image
            src="/images/eLib/affinity.jpg"
            alt="solution"
            height={1000}
            width={1000}
            className="mx-auto rounded-lg border object-cover"
          />{" "}
          <Image
            src="/images/eLib/patten-identification.jpg"
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
          E-Lib was a real world project where I collaborated with real people
          to find a solution for the pain points that people are facing. I I
          would like to develope the appliation do more of the usability testing
          to clear my biases and vision in order to make a good product.
        </p>
      </div>
    </div>
  );
}

export default MovieTime;
