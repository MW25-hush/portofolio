"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFigma } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";

function Clinic() {
  return (
    <div className="animationMy px-4 lg:px-16 2xl:mx-auto 2xl:max-w-[100rem]  ">
      <div className="flex  items-center justify-center gap-8  pt-32">
        <Image
          src="/images/clinic/logo.jpg"
          alt="Morasilat"
          width={200}
          height={200}
        />
        <div className="">
          <h1 className="text-[2.5rem] font-bold">Dental Clinic DBMS</h1>
          <p className="w-[26ch] text-[1.25rem] text-gray-600">
            A database built with Next JS and Firebase
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 pt-10 md:flex-row ">
        <div className="hover: flex items-center gap-4 px-4 py-2 hover:rounded-full hover:bg-yellow-200 ">
          <FaFigma size="32" />
          <Link
            className="text-[1.5rem]"
            href="https://www.figma.com/proto/KAD0MPFAyeLyCcs1tOY02i/Faculty-Library-Mobile-App?page-id=47%3A107&type=design&node-id=52-189&viewport=201%2C203%2C0.08&t=p0WhrA3F5yeCWiuO-1&scaling=scale-down&starting-point-node-id=52%3A189&mode=design"
          >
            Prototype
          </Link>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 hover:rounded-full hover:bg-gray-950 hover:text-white ">
          <RiGithubLine size="32" />
          <Link
            href="https://github.com/Mehdi-UX-Dev/ClinicDatabase"
            className="text-[1.5rem]"
          >
            Source Code
          </Link>
        </div>
      </div>
      <div className="flex  flex-col justify-between gap-12  pt-28 lg:flex-row">
        <div className="">
          <h1 className="text-[2rem] font-bold">Overview</h1>
          <p className="max-w-prose text-[1.5rem] lg:w-[45ch] ">
            Dental DBMS is an application developed for a clinic which requested
            for an online website where they could save their patients
            information and make appointments.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-[2rem] font-bold">My Role</h1>
            <p className="text-[1.5rem]">UX/UI Designer, Software Developer</p>
          </div>
          <div>
            <h1 className=" text-[2rem] font-bold">Duration</h1>
            <p className="text-[1.5rem]">3 months</p>
          </div>
          <div>
            <h1 className="text-[2rem] font-bold">Tools & Technologies</h1>
            <p className="max-w-prose text-[1.5rem] lg:w-[35ch] ">
              Paper and Pencil, Figma, Adobe Illustrator, Next JS, Firebase,
              Tailwind CSS
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

export default Clinic;
