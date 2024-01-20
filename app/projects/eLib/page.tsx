import Image from "next/image";
import heroSection from "../../../public/images/heroElib.png";
import studentPersona from "../../../public/images/eLib/Students Persona.jpg";
import professorPersona from "../../../public/images/eLib/Professor Persona.jpg";
import wireframe from "../../../public/images/eLib/Wireframe.jpg";
import userJourneyMap from "../../../public/images/eLib/userJourney.jpg";
import firstMockup from "../../../public/images/eLib/first.png";
import secondMockup from "../../../public/images/eLib/second.png";
import thirdMockup from "../../../public/images/eLib/third.png";

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
        <div className="flex space-x-4 max-w-max ">
          <Image
            src={professorPersona}
            alt="persona"
            className=" object-cover border border-black  "
            width={600}
          />
          <Image
            src={studentPersona}
            alt="persona"
            className=" object-cover border border-black "
            width={600}
          />
        </div>
      </div>

      <div className="mt-[5rem]">
        <h1 className=" text-[2rem] font-bold">Digital Wireframes</h1>
        <div className="mt-[1.5rem] flex space-x-4 ">
          <Image
            src={wireframe}
            alt="wireframe"
            className="border border-black object-cover"
          />
        </div>

        <h1 className=" text-[2rem] font-bold">User Journey Map</h1>

        <div className="mt-[1.5rem] flex space-x-4 ">
          <Image
            src={userJourneyMap}
            alt="wireframe"
            className="border border-black object-cover"
          />
        </div>
      </div>

      <div className="mt-[5rem]">
        <h1 className="mb-[1.5rem] text-[2rem] font-bold ">Hi-fi Mockups</h1>
        <div className="flex rounded-[1rem] bg-accent-lightGray shadow-lg ">
          <Image src={firstMockup} alt="wireframe" height={400} width={300} />
          <Image src={secondMockup} alt="wireframe" height={400} width={300} />
          <Image
            src={thirdMockup}
            alt="wireframe"
            className="object-cover"
            height={400}
            width={300}
          />
        </div>
      </div>

      <div className="mb-[3rem] mt-[5rem] text-center ">
        <h1 className="text-[2rem] font-bold  ">What I&apos;ve learned</h1>
        <p className="mx-auto w-[55ch] leading-[140%]">
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
