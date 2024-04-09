"use client";
import Image from "next/image";

import Link from "next/link";

function About() {
  return (
    <div>
      <div className="mx-4 max-w-7xl md:mx-16 2xl:mx-auto ">
        <div className="flex flex-col items-center space-y-12 pt-40 lg:flex-row lg:space-x-8 lg:space-y-0 ">
          <div className="space-y-4">
            <h1 className=" text-[2.5rem] font-bold">
              Hi, Im Mohammad Mehdi Wahid.
            </h1>
            <p className="text-[1.5rem] leading-[1.75]">
              {" "}
              I&apos;m a UI/UX Designer and Front-end Developer with a mastery
              of Next.js, dedicated to transforming innovative ideas into
              visually stunning and user-centric digital experiences. As a proud
              founding member of the{" "}
              <Link
                className="underline"
                href={"https://www.linkedin.com/company/ku-dsic"}
              >
                Digital Solution and Innovation Center (DSIC)
              </Link>{" "}
              at Kabul University, I am committed to revolutionizing
              governmental organizations across Afghanistan through digital
              solutions.
            </p>
          </div>
          <Image
            src="/images/photo.jpg"
            alt="photo"
            width={1000}
            height={1000}
            className="aspect-[10/7] w-full rounded object-cover  "
          />
        </div>
        <div className="mt-20 w-full   space-y-[2rem]  ">
          <h1 className="pb-[1rem]  text-[2.5rem] font-bold ">My Journey</h1>

          <Image
            src={"/images/Kabul Uni.png"}
            height={1000}
            width={1000}
            className=" object-cover lg:max-w-3xl"
            alt=""
          />
          <Image
            src={"/images/google ux.png"}
            height={1000}
            width={1000}
            alt=""
            className="object-cover lg:ml-auto lg:max-w-3xl"
          />
          <Image
            className="lg:max-w-3xl"
            src={"/images/dsicCover.png"}
            height={1000}
            width={1000}
            alt=" "
          />
        </div>

        <div className="mt-20">
          <h1 className="text-[2.5rem]">Other things I like to do ...</h1>

          <h3 className="pb-8 pl-4 text-[1.5rem]">
            ... I love reading books especially about design and programming
          </h3>
          <div className="flex flex-wrap gap-10">
            <Image
              src="/images/books/animation.png"
              height={500}
              width={500}
              alt=""
              className="w-72 rounded-lg object-cover shadow-md"
            />
            <Image
              src="/images/books/atomicdesign.png"
              alt=""
              height={1000}
              width={1000}
              className="w-72 rounded-lg object-cover shadow-md"
            />
            <Image
              src="/images/books/don.png"
              alt=""
              height={1000}
              width={1000}
              className="w-72 rounded-lg object-cover shadow-md"
            />
            <Image
              src="/images/books/practicalUI.png"
              alt=""
              height={1000}
              width={1000}
              className="w-72 rounded-lg object-cover shadow-md"
            />
            <Image
              src="/images/books/refactoringUI.png"
              alt=""
              height={1000}
              width={1000}
              className="w-72 rounded-lg object-cover shadow-md"
            />
            <Image
              src="/images/books/softskills.png"
              alt=""
              height={1000}
              width={1000}
              className="w-72 rounded-lg object-cover shadow-md"
            />
            <Image
              src="/images/books/stevekrug.png"
              alt=""
              height={1000}
              width={1000}
              className="w-72 rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
