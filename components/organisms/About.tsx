import Image from "next/image";
import React from "react";
import kabulUni from "@/public/images/KabulUni-Remove.png";
import badge from "@/public/badge.png";

function About() {
  return (
    <section className="">
      <h1 className="mx-auto max-w-fit bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text  text-[40px] font-semibold text-transparent ">
        My Journey
      </h1>

      <div className="">
        <div className="space-y- mx-auto max-w-4xl pt-5 text-[1.25rem] text-white  ">
          <div className=" mx-10 block rounded-2xl  bg-[#1e293b] px-2 py-5 ">
            <p className="text-center text-[1.25rem] font-bold ">
              BCs (Bachelor of Computer Science)
            </p>
            <p className="pl-8 text-gray-400">Sep 2019 - Nov 2023</p>
            <ul className="list-disc pl-14">
              <li>Graduated with a 3.75 GPA</li>
              <li>Best Student Award</li>
            </ul>
          </div>

          <div className="relative flex h-48 items-center justify-center overflow-hidden ">
            <div className="top- absolute h-48 w-[2px] border border-orange-500"></div>
            <div className="z-20 flex h-10 w-36 items-center justify-center rounded-full border border-orange-500 bg-[#0e1821] px-4 py-2">
              <Image src={kabulUni} alt="" width={30} />
            </div>
          </div>
          <div className="mx-10 block rounded-2xl  bg-[#1e293b] px-2 py-5">
            {/* During my internship, I collaborated closely with esteemed
            professors to conceptualize and execute Morasilat, an application
            poised to replace the outdated paper-based systems currently in use.
            Through meticulous design and development, Morasilat offers a
            seamless transition to a modern, efficient, and accessible platform. */}

            <p className="text-center text-[1.25rem] font-bold">
              Google UX Professional Certificate(UI/UX)
            </p>
            <p className="pl-8 text-gray-400">May 2023 - Jan 2024</p>

            <ul className="list-disc pl-14">
              <li>Researched and designed 2 big projects </li>
              <li>
                Learnt and implemented Desgin Thinking Process methodology
              </li>
              <li>
                Learnt UX Research, Wireframing, prototyping, usability testing
              </li>
            </ul>
          </div>
          <div className="relative flex h-48 items-center justify-center overflow-hidden ">
            <div className="top- absolute h-48 w-[2px] border border-orange-500"></div>
            <div className="z-20 flex h-10 w-36 items-center justify-center rounded-full border border-orange-500 bg-[#0e1821] px-4 py-2">
              <Image src={badge} alt="" width={30} />
            </div>
          </div>
          <div className="mx-10 block rounded-2xl  bg-[#1e293b] px-2 py-5">
            {/* My skill set extends beyond technical expertise to a genuine love
            for sketching and ideation, ensuring that each project not only
            meets functional requirements but also encapsulates beauty and
            usability. With a knack for bringing concepts to life, I harness the
            magic of Next.js to create dynamic and responsive applications. I
            look forward to contributing my skills and passion to further
            elevate the digital landscape, fostering innovation and efficiency
            in every project */}
            <p className="text-center text-[1.25rem] font-bold">
              DSIC(Digital Solution and Innovation Center for Kabul University)
            </p>
            <p className="pl-8 text-gray-400">April 2023 - Nov 2023</p>

            <ul className="list-disc pl-14">
              <li>Honored to be one of the founding members.</li>
              <li>
                During my internship I was assigned to be a front-end lead.
              </li>
              <li>
                I designed and developed Morasilat an application for Kabul
                University.
              </li>
              <li>I mentored junior Students on ReactJs and NextJs.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
