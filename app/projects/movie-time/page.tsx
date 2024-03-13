"use client";
import { Button } from "@/components/molecules/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";

function Page() {
  const { push } = useRouter();

  return (
    <div className="col-start-2 col-end-12">
      <section className="h-[85vh] ">
        <div className="flex h-3/4 flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-10 ">
            <Image
              src="/images/movieDB/logo.png"
              alt="logo"
              width={400}
              height={400}
            />

            <div>
              <h3 className="text-[2.5rem] font-bold">Movie Time DB</h3>
              <p className="w-[46ch] text-[1.25rem] text-gray-400">
                Explore the world of Tv shows and Movies
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button
              label="Live Demo"
              type="button"
              intent={"tertiary"}
              Icon={FaExternalLinkAlt}
              handleClick={() => push("https://movie-databse.vercel.app/")}
            />
            <Button
              label="Source Code"
              type="button"
              intent={"tertiary"}
              handleClick={() =>
                push("https://github.com/Mehdi-UX-Dev/Movie-Databse")
              }
              Icon={RiGithubLine}
            />
          </div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-gray-500">Mohammad Mehdi Wahid</p>
          <div className="h-5 border-r-2 border-black"></div>
          <p className="font-bold text-cyan-600 ">Feb 2022 - April 2022</p>
        </div>
      </section>

      <section className="mx-auto mt-[5rem] max-w-5xl  space-y-[3rem] py-[1rem] ">
        <div className="flex space-x-4">
          <div>
            <h1 className="text-[2rem] font-bold  ">Project Overview</h1>
            <div className=" w-10 border-b-4 border-black"></div>

            <p className="w-[55ch] pt-2 leading-[140%]">
              Movie Time is a website which lets you explore movies and tv
              shows.
            </p>
          </div>

          <div>
            <h1 className=" text-[2rem] font-bold">My Role</h1>
            <div className=" w-10 border-b-4 border-black"></div>
            <p className=" w-[55ch] pt-2 leading-[140%]">
              Throughout this project I had the responsibility of conducting
              research, making prototypes and hi-fi design and then developing
              it using Next JS.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-[5rem] max-w-5xl space-y-2">
        <h1 className="text-[2rem] font-bold">Persona</h1>

        <Image
          src="/images/movieDB/persona.png"
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
            src="/images/movieDB/Wireframe.png"
            alt="wireframe"
            className="bject-cover rounded-lg border"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/movieDB/WireFrame-Tabet.png"
            alt="wireframe"
            className="bject-cover rounded-lg border"
            width={1000}
            height={1000}
          />
        </div>
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
