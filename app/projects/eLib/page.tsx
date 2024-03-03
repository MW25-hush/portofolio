import Image from "next/image";

function page() {
  return (
    <div className="col-start-2 col-end-12">
      <section className=" h-[85vh]">
        <div className="flex h-3/4 items-center justify-center space-x-10">
          <Image
            src="/images/eLib/logo.png"
            alt="Morasilat"
            width={200}
            height={200}
          />
          <div>
            <h3 className="text-[2.5rem] font-bold">
              E-Lib For Kabul University
            </h3>
            <p className="w-[26ch] text-[1.25rem] text-gray-400">
              Mobile App Version of E-Lib for Kabul University
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-gray-500">Mohammad Mehdi Wahid</p>
          <div className="h-5 border-r-2 border-black"></div>
          <p className="font-bold text-cyan-600 ">May 2023 - August 2023</p>
        </div>
      </section>

      <section className="mx-auto mt-[5rem] max-w-5xl  space-y-[3rem] py-[1rem] ">
        <div className="flex space-x-4">
          <div>
            <h1 className="text-[2rem] font-bold  ">Project Overview</h1>
            <div className=" w-10 border-b-4 border-black"></div>

            <p className="w-[55ch] pt-2 leading-[140%]">
              E-Library is a electronic library that facilitates searching for
              course materials, books and projects for C.S faculty students. At
              the beginning it was only designed for the C.S faculty but through
              the research, it was optimized to be used through all the Kabul
              University.
            </p>
          </div>

          <div>
            <h1 className=" text-[2rem] font-bold">My Role</h1>
            <div className=" w-10 border-b-4 border-black"></div>
            <p className=" w-[55ch] pt-2 leading-[140%]">
              Throughout this project I had the responsibility of conducting
              research, making prototypes a.
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <div>
            <h1 className=" text-[2rem] font-bold">Problem Statement</h1>
            <div className=" w-10 border-b-4 border-black"></div>

            <p className=" w-[55ch] pt-2 leading-[140%]">
              C.S faculty did not have an online platform in which the courses
              would be shared, books were to shared and made available to the
              students and projects of previous students were observable.
            </p>
          </div>

          <div>
            <h1 className=" text-[2rem] font-bold">Solution</h1>
            <div className=" w-10 border-b-4 border-black"></div>

            <p className=" w-[55ch] pt-2 leading-[140%]">
              I worked on a span of 2 months over this project. I did UX
              research of type: survey for students, focus group with the
              professor and dean of the faculty. Thus I designed a mobile
              application to make the recourses even more reachable. Today
              smartphones has taken more space in the industry so it is
              important to be able to access the materials on the mobile too.
            </p>
          </div>
        </div>

        <div>
          <h1 className=" text-[2rem] font-bold">User Research</h1>
          <div className=" w-10 border-b-4 border-black"></div>

          <p className=" w-[55ch]  pt-2 leading-[140%]">
            I used interview and focus group as the primary methods for my
            research. I used interviews for students and focus group and
            usability testing with the professors of the faculty. I nearly
            interviewed 20 students, did1 focus group session and several
            usability testing with the professors. I learned about the pain
            points the users are facing and acted towards them to make the
            application more usable and efficient.
          </p>
        </div>
      </section>

      <div className="mx-auto mt-[5rem] max-w-5xl space-y-2">
        <h1 className="text-[2rem] font-bold    ">Persona</h1>

        <Image
          src="/images/eLib/Professor Persona.jpg"
          alt="persona"
          className=" rounded-lg border  object-cover  "
          width={1000}
          height={1000}
        />
        <Image
          src="/images/eLib/Students Persona.jpg"
          alt="persona"
          className="  rounded-lg border object-cover"
          width={1000}
          height={1000}
        />
      </div>

      <div className="mx-auto mt-[5rem] max-w-5xl">
        <h1 className=" text-[2rem] font-bold">Digital Wireframes</h1>
        <div className="mt-[1.5rem] flex space-x-4 ">
          <Image
            src="/images/eLib/Wireframe.jpg"
            alt="wireframe"
            className="bject-cover rounded-lg border"
            width={1000}
            height={1000}
          />
        </div>

        <h1 className=" text-[2rem] font-bold">User Journey Map</h1>

        <div className="mt-[1.5rem] flex space-x-4 ">
          <Image
            src="/images/eLib/userJourney.jpg"
            alt="user journey"
            className="rounded-lg border object-cover"
            width={1000}
            height={1000}
          />
        </div>
      </div>

      <div className="mx-auto mt-[5rem] max-w-5xl">
        <h1 className="mb-[1.5rem] text-[2rem] font-bold ">Hi-fi Mockups</h1>
        <div className=" flex max-w-fit  rounded-[1rem] bg-accent-lightGray px-5 py-3 shadow-lg">
          <Image
            src="/images/eLib/first.png"
            alt="Hi-fi Mockup"
            className="object-cover"
            height={250}
            width={250}
          />
          <Image
            src="/images/eLib/second.png"
            alt="Hi-fi Mockup"
            height={250}
            width={250}
          />
          <Image
            src="/images/eLib/third.png"
            alt="Hi-fi Mockup"
            className="object-cover"
            height={250}
            width={250}
          />
        </div>
      </div>

      <div className="mx-auto mb-[3rem] mt-[5rem] max-w-5xl ">
        <h1 className="text-[2rem] font-bold  ">What I&apos;ve learned</h1>
        <p className=" w-[55ch] leading-[140%]">
          E-Lib was a real world project where I collaborated with real people
          to find a solution for the pain points that people are facing. I
          applied the industry standard procedures for my project such as the
          most important one:
          <span className="font-semibold">The Design Thinking process</span>
        </p>
      </div>
    </div>
  );
}

export default page;
