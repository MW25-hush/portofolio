import Image from "next/image";

function Page() {
  return (
    <div className="col-start-2 col-end-12">
      <section className="h-[85vh]">
        <div className="flex h-3/4 items-center justify-center space-x-10">
          <Image
            src="/images/electronic/logo.png"
            alt="Morasilat"
            width={200}
            height={200}
          />
          <div>
            <h3 className="text-[2.5rem] font-bold">Electronic.AF</h3>
            <p className="w-[46ch] text-[1.25rem] text-gray-400">
              An online store for electronic suppliances in Afghanistan
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-gray-500">Mohammad Mehdi Wahid</p>
          <div className="h-5 border-r-2 border-black"></div>
          <p className="font-bold text-cyan-600 ">April 2022 - August 2022</p>
        </div>
      </section>

      <section className="mx-auto mt-[5rem] max-w-5xl  space-y-[3rem] py-[1rem] ">
        <div className="flex space-x-4">
          <div>
            <h1 className="text-[2rem] font-bold  ">Project Overview</h1>
            <div className=" w-10 border-b-4 border-black"></div>

            <p className="w-[55ch] pt-2 leading-[140%]">
              Electronics.AF is an online store for electronic suppliances in
              Afghanistan. This website right now only services laptops.
            </p>
          </div>

          <div>
            <h1 className=" text-[2rem] font-bold">My Role</h1>
            <div className=" w-10 border-b-4 border-black"></div>
            <p className=" w-[55ch] pt-2 leading-[140%]">
              Throughout this project I had the responsibility of conducting
              research, making prototypes and hi-fi design and then developing
              it using React Js.
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <div>
            <h1 className=" text-[2rem] font-bold">Problem Statement</h1>
            <div className=" w-10 border-b-4 border-black"></div>

            <p className=" w-[55ch] pt-2 leading-[140%]">
              We Wanted to develop an online website for selling electronics
              such as laptops, mobile phones and so on, which is not so much
              popular right now in Afghanistan.
            </p>
          </div>

          <div>
            <h1 className=" text-[2rem] font-bold">Solution</h1>
            <div className=" w-10 border-b-4 border-black"></div>

            <p className=" w-[55ch] pt-2 leading-[140%]">
              I worked on this project for over a few months, first I designed
              the application by making the first steps: Sketching, wireframing,
              prototyping. I completely put my focus on what the client needed
              and made my work user-centeric.
            </p>
          </div>
        </div>

        <div>
          <h1 className=" text-[2rem] font-bold">User Research</h1>
          <div className=" w-10 border-b-4 border-black"></div>

          <p className=" w-[55ch]  pt-2 leading-[140%]">
            I used competitive audit as my primary research method for this
            project.
          </p>
        </div>
      </section>

      <div className="mx-auto mt-[5rem] max-w-5xl space-y-2">
        <h1 className="text-[2rem] font-bold">Persona</h1>

        <Image
          src="/images/electronic/persona.png"
          alt="persona"
          className=" rounded-lg border  object-cover  "
          width={1000}
          height={1000}
        />
      </div>

      <div className="mx-auto mt-[5rem] max-w-5xl">
        <h1 className=" text-[2rem] font-bold">Digital Wireframes</h1>
        <div className="mt-[1.5rem] flex flex-col space-y-4 ">
          <Image
            src="/images/clinic/frame 4.png"
            alt="wireframe"
            className="bject-cover rounded-lg border"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/clinic/frame 5.png"
            alt="wireframe"
            className="bject-cover rounded-lg border"
            width={1000}
            height={1000}
          />
        </div>

        {/* <h1 className=" text-[2rem] font-bold">User Journey Map</h1>

        <div className="mt-[1.5rem] flex space-x-4 ">
          <Image
            src="/images/eLib/userJourney.jpg"
            alt="user journey"
            className="rounded-lg border object-cover"
            width={1000}
            height={1000}
          />
        </div> */}
      </div>

      <section className="mx-auto mb-4 mt-[5rem] max-w-5xl">
        <h1 className="mb-[1.5rem] text-[2rem] font-bold ">Hi-fi Mockups</h1>
        <div className=" flex flex-col space-y-4">
          <Image
            src="/images/electronic/HomePage.png"
            alt="Hi-fi Mockup"
            className="object-cover"
            height={1000}
            width={1000}
          />{" "}
          <Image
            src="/images/electronic/login.png"
            alt="Hi-fi Mockup"
            className="object-cover"
            height={1000}
            width={1000}
          />
        </div>
      </section>
    </div>
  );
}

export default Page;
