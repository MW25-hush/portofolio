import Image from "next/image";
import morasilatBanner from "../../../public/images/morasilatHeroSection.png";
import persona from "../../../public/images/persona.jpg";
import wireframe from "../../../public/images/wirefame.jpg";
import wireframe2 from "../../../public/images/wireframe2.jpg";
import dashbboard from "../../../public/images/dashboard.png";
import writePage from "../../../public/images/writeTwo.png";
import archivePage from "../../../public/images/archive.png";

function Morasilat() {
  return (
    <div className="col-start-2 col-end-12">
      <div className="mt-[3rem]">
        <Image src={morasilatBanner} alt="banner" />
      </div>

      <div className="py-[1rem] space-y-[3rem] mt-[5rem]">
        <div className="text-center ">
          <h1 className="text-[2rem] font-bold  ">Project Overview</h1>
          <p className="w-[55ch] mx-auto leading-[140%]">
            Morasilat is a web application designed and developed for Kabul
            University. It is used for transmission of documents within the
            organization. It is a big step in digitalizing the most fundamental
            governmental procedure in Afghanistan.
          </p>
        </div>

        <div>
          <h1 className="text-center text-[2rem] font-bold">My Role</h1>
          <p className="w-[55ch] mx-auto leading-[140%] text-center">
            Throughout this project I had the responsibility of conducting
            research, making prototypes and mockups and developing the front-end
            of the application.
          </p>
        </div>

        <div>
          <h1 className="text-center text-[2rem] font-bold">
            Problem Statement
          </h1>
          <p className="w-[55ch] mx-auto leading-[140%] text-center">
            Afghanistan is a third world country, thus in the technological
            aspect the country has not advanced yet unfortunately. The Morasilat
            application intends to facilitate and digitalize the transmission of
            official documents from one organization to another. The main
            problem with the traditional paper-based system is the amount of
            time and resources that is taken. Considering contemporary digital
            speed and optimization, the traditional paper-based system is way
            aback of time, so with the Morasilat Project we intend to completely
            overturn the traditional and outdated method.
          </p>
        </div>

        <div>
          <h1 className="text-center text-[2rem] font-bold">Solution</h1>
          <p className="w-[55ch] mx-auto leading-[140%] text-center">
            I worked on the project over a span of 6 months. I did research and
            interviews with people of high authority and experts in the
            governmental procedures. I did usability testing several times to
            make the experience for a user as smooth as possible. Right now
            Morasilat is helping hundreds of people by easing the process of
            writing and sending documents.
          </p>
        </div>

        <div>
          <h1 className="text-center text-[2rem] font-bold">User Research</h1>
          <p className="w-[55ch] mx-auto leading-[140%] text-center">
            I used interview as a primary method for my research. I interviewed
            experts on the field of document transmitting and what I did get
            from there was a big frustration for me due to the fact there was no
            centralized and standard procedure. Every respective organization
            had changed the procedure a little bit to their own comfort, so
            after some time we managed to make a consensus in the way the
            documents are processed and transmitted.
          </p>
        </div>
      </div>

      <div className="mt-[5rem]">
        <h1 className="text-[2rem] font-bold    ">Persona</h1>
        <div>
          <Image src={persona} alt="persona" className=" object-cover " />
        </div>
      </div>

      <div className="mt-[5rem]">
        <h1 className="text-[2rem] font-bold -">Paper Wireframes</h1>
        <div className="flex space-x-4 mt-[1.5rem] ">
          <Image
            src={wireframe}
            alt="wireframe"
            height={800}
            width={600}
            className="object-cover border border-black"
          />
          <Image
            src={wireframe2}
            alt="wireframeTwo"
            height={800}
            width={600}
            className="object-cover border border-black"
          />
        </div>
      </div>

      <div className="mt-[5rem]">
        <h1 className="text-[2rem] font-bold mb-[1.5rem] ">Hi-fi Mockups</h1>
        <div className="space-y-4 ">
          <Image
            src={dashbboard}
            alt="wireframe"
            className="border border-black p-4 object-cover"
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
          />
        </div>
      </div>

      <div className="text-center mt-[5rem] mb-[3rem] ">
        <h1 className="text-[2rem] font-bold  ">What I&apos;ve learned</h1>
        <p className="w-[55ch] mx-auto leading-[140%]">
          Morasilat was my first real world project which right now it is used
          by hundreds of users. I implemented industry level standards such as
          design thinking process and lean agile development method to work on
          such a massive project.
        </p>
      </div>
    </div>
  );
}

export default Morasilat;
