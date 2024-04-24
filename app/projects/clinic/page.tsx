"use client";
import Image from "next/image";

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

      <div className="mt-20 flex justify-center">
        <Image src="/images/clinic/gif.gif" width="1000" height={400} alt="" />
      </div>
    </div>
  );
}

export default Clinic;
