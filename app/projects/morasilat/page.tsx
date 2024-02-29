import Image from "next/image";
import archivePage from "../../../public/images/morasilat/archive.png";

function Morasilat() {
  return (
    <div className="animationMy col-start-2 col-end-12 ">
      <section className=" h-[85vh]">
        <div className="flex h-3/4 items-center justify-center space-x-10">
          <Image
            src="/images/Morasilat.png"
            alt="Morasilat"
            width={200}
            height={200}
          />
          <div>
            <h3 className="text-[2.5rem] font-bold">Morasilat</h3>
            <p className="w-[26ch] text-[1.25rem] text-gray-400">
              Official document transmission app for Kabul University
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-gray-500">Mohammad Mehdi Wahid, Bahir Hakimi</p>
          <div className="h-5 border-r-2 border-black"></div>
          <p className="font-bold text-cyan-600 ">August 2023 - Dec 2023</p>
        </div>
      </section>

      <div>
        <iframe
          src="https://www.youtube.com/embed/i0unxiBXC90"
          className="mx-auto mt-[3rem] h-[600px] w-11/12 border border-black"
        >
          Your browser does not support this format
        </iframe>
      </div>

      <section className=" mx-auto  mt-[5rem] max-w-5xl space-y-[3rem] py-[1rem]">
        <div className=" flex">
          <div>
            <h1 className="text-[2rem] font-bold">Introduction</h1>
            <div className=" w-10 border-b-4 border-black"></div>
            <p className="w-[55ch] pt-4 leading-[140%]">
              Morasilat is a web application designed and developed for Kabul
              University. It is used for transmission of documents within the
              organization. It is a big step in digitalizing the most
              fundamental governmental procedure in Afghanistan.
            </p>
          </div>

          <div>
            <h1 className=" text-[2rem] font-bold">My Role</h1>
            <div className=" w-10 border-b-4 border-black"></div>

            <p className=" w-[55ch] pt-4 leading-[140%]">
              Throughout this project I had the responsibility of conducting
              research, making prototypes and mockups and developing the
              front-end of the application.
            </p>
          </div>
        </div>

        <div className="flex">
          <div>
            <h1 className=" text-[2rem] font-bold">Problem Statement</h1>
            <div className=" w-10 border-b-4 border-black"></div>

            <p className="w-[55ch] pt-4 leading-[140%]">
              Afghanistan is a third world country, thus in the technological
              aspect the country has not advanced yet unfortunately. The
              Morasilat application intends to facilitate and digitalize the
              transmission of official documents from one organization to
              another. The main problem with the traditional paper-based system
              is the amount of time and resources that is taken. Considering
              contemporary digital speed and optimization, the traditional
              paper-based system is way aback of time, so with the Morasilat
              Project we intend to completely overturn the traditional and
              outdated method.
            </p>
          </div>

          <div className="">
            <h1 className="text-[2rem] font-bold">Solution</h1>
            <div className=" w-10 border-b-4 border-black"></div>

            <p className="w-[55ch] pt-4 leading-[140%]">
              I worked on the project over a span of 6 months. I did research
              and interviews with people of high authority and experts in the
              governmental procedures. I did usability testing several times to
              make the experience for a user as smooth as possible. Right now
              Morasilat is helping hundreds of people by easing the process of
              writing and sending documents.
            </p>
          </div>
        </div>

        <div className="">
          <h1 className=" text-[2rem] font-bold">User Research</h1>
          <div className=" w-10 border-b-4 border-black"></div>

          <p className="w-[55ch] pt-4 leading-[140%]">
            I used interview as a primary method for my research. I interviewed
            experts on the field of document transmitting and what I did get
            from there was a big frustration for me due to the fact there was no
            centralized and standard procedure. Every respective organization
            had changed the procedure a little bit to their own comfort, so
            after some time we managed to make a consensus in the way the
            documents are processed and transmitted.
          </p>
        </div>
      </section>

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

      <div className="mx-auto mb-[3rem] mt-[5rem] max-w-5xl  ">
        <h1 className="text-[2rem] font-bold  ">What I&apos;ve learned</h1>
        <p className=" w-[55ch] leading-[140%]">
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
