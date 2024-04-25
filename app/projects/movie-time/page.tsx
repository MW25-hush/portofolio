"use client";
import Image from "next/image";

function MovieTime() {
  return (
    <div className="animationMy px-4 lg:px-16 2xl:mx-auto 2xl:max-w-[100rem]  ">
      <div className="flex  items-center justify-center gap-12  pt-32">
        <Image
          src="/images/movieDB/logo.png"
          alt="Morasilat"
          width={500}
          height={200}
        />
      </div>
      <div className="flex  flex-col justify-between gap-12  pt-28 lg:flex-row">
        <div className="">
          <h1 className="text-[2rem] font-bold">Overview</h1>
          <p className="max-w-prose text-[1.5rem] lg:w-[45ch] ">
            Movie-Time is a website to search for movies and tv, shows
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-[2rem] font-bold">My Role</h1>
            <p className="text-[1.5rem]">UI Designer, Front-end developer</p>
          </div>
          <div>
            <h1 className=" text-[2rem] font-bold">Duration</h1>
            <p className="text-[1.5rem]">2 months</p>
          </div>
          <div>
            <h1 className="text-[2rem] font-bold">Tools & Technologies</h1>
            <p className="max-w-prose text-[1.5rem] lg:w-[35ch] ">
              Figma,Next JS, Redux, Tailwind CSS
            </p>
          </div>
        </div>
      </div>
      <div className="mt-40 flex justify-center ">
        <video
          controls
          preload="none"
          className="w-full rounded-xl"
          poster="/images/movieDB/movieCover.png"
        >
          <source src="/images/movieDB/demo.mp4" type="video/mp4" />
          your browser does not support this video
        </video>
      </div>

      <div className="mt-40 ">
        <h1 className="mb-10 text-[4rem]">Final Mockup</h1>
        <Image
          src="/images/movieDB/movieCover.png"
          width={500}
          height={500}
          className="w-full rounded-xl object-cover"
          alt="mockup"
        />
      </div>
    </div>
  );
}

export default MovieTime;
