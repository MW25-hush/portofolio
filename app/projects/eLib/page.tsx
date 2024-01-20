import Image from "next/image";
import heroSection from "../../../public/images/heroElib.png";
import studentPersona from '../../../public/images/eLib/Students Persona.jpg'
import professorPersona from '../../../public/images/eLib/Professor Persona.jpg'



function page() {
  return (
    <div className="col-start-2 col-end-12">
      <div className="mt-[3rem]">
        <Image src={heroSection} alt="banner" />
      </div>

      <div className="mt-[5rem] space-y-[3rem] py-[1rem]">
        <div className="text-center ">
          <h1 className="text-[2rem] font-bold  ">Project Overview</h1>
          <p className="mx-auto w-[55ch] leading-[140%]">
            E-Library is a electronic library that facilitates searching for
            course materials, books and projects for C.S faculty students. At
            the beginning it was only designed for the C.S faculty but through
            the research, it was optimized to be used through all the Kabul
            University.
          </p>
        </div>

        <div>
          <h1 className="text-center text-[2rem] font-bold">My Role</h1>
          <p className="mx-auto w-[55ch] text-center leading-[140%]">
            Throughout this project I had the responsibility of conducting
            research, making prototypes and mockups.
          </p>
        </div>

        <div>
          <h1 className="text-center text-[2rem] font-bold">
            Problem Statement
          </h1>
          <p className="mx-auto w-[55ch] text-center leading-[140%]">
            C.S faculty did not have an online platform in which the courses
            would be shared, books were to shared and made available to the
            students and projects of previous students were observable.
          </p>
        </div>

        <div>
          <h1 className="text-center text-[2rem] font-bold">Solution</h1>
          <p className="mx-auto w-[55ch] text-center leading-[140%]">
            I worked on a span of 2 months over this project. I did UX research
            of type: survey for students, focus group with the professor and
            dean of the faculty. Thus I designed a mobile application to make
            the recourses even more reachable. Today smartphones has taken more
            space in the industry so it is important to be able to access the
            materials on the mobile too.
          </p>
        </div>

        <div>
          <h1 className="text-center text-[2rem] font-bold">User Research</h1>
          <p className="mx-auto w-[55ch] text-center leading-[140%]">
            I used interview and focus group as the primary methods for my
            research. I used interviews for students and focus group and
            usability testing with the professors of the faculty. I nearly
            interviewed 20 students, did1 focus group session and several
            usability testing with the professors. I learned about the pain
            points the users are facing and acted towards them to make the
            application more usable and efficient.
          </p>
        </div>
      </div>

      <div className="mt-[5rem]">
        <h1 className="text-[2rem] font-bold    ">Persona</h1>
        <div>
          <Image src={professorPersona} alt="persona" className=" object-cover " />
          <Image src={studentPersona} alt="persona" className=" object-cover " />
        </div>
      </div>

      <div className="mt-[5rem]">
        <h1 className="- text-[2rem] font-bold">Paper Wireframes</h1>
        <div className="mt-[1.5rem] flex space-x-4 ">
          {/* <Image
            src={wireframe}
            alt="wireframe"
            height={800}
            width={600}
            className="border border-black object-cover"
          />
          <Image
            src={wireframe2}
            alt="wireframeTwo"
            height={800}
            width={600}
            className="border border-black object-cover"
          /> */}
        </div>
      </div>

      <div className="mt-[5rem]">
        <h1 className="mb-[1.5rem] text-[2rem] font-bold ">Hi-fi Mockups</h1>
        <div className="space-y-4 ">
          {/* <Image
            src={dashbboard}
            alt="wireframe"
            className="border border-black object-cover p-4"
          />
          <Image
            src={writePage}
            alt="wireframe"
            className="border border-black p-4"
          />
          <Image
            src={archivePage}
            alt="wireframe"
            className="border border-black p-4"
          /> */}
        </div>
      </div>

      <div className="mb-[3rem] mt-[5rem] text-center ">
        <h1 className="text-[2rem] font-bold  ">What I&apos;ve learned</h1>
        <p className="mx-auto w-[55ch] leading-[140%]">
          Morasilat was my first real world project which right now it is used
          by hundreds of users. I implemented industry level standards such as
          design thinking process and lean agile development method to work on
          such a massive project.
        </p>
      </div>
    </div>
  );
}

export default page;
