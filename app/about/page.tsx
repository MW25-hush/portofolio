"use client";
import Image from "next/image";
import Contact from "@/components/organisms/Footer";
import kabulUni from "../../public/images/KabulUni.png";
import dsic from "../../public/images/DSIC.png";
import { FcGoogle } from "react-icons/fc";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

const carouselArray: { src: string; href: string }[] = [
  {
    src: "1.jpg",
    href: "https://www.coursera.org/account/accomplishments/verify/26GQUBDNMFY2",
  },
  { src: "2.jpg", href: "https://coursera.org/verify/RHQNBPJX2SU4" },

  { src: "3.jpg", href: "https://coursera.org/verify/X4CS7QAYQVMP" },
  { src: "4.jpg", href: "https://coursera.org/verify/DKDDQN8RDNPJ" },
  { src: "5.jpg", href: "https://coursera.org/verify/9H5FJJMFWJYH" },
  { src: "6.jpg", href: "https://coursera.org/verify/2KTMTDZ2E82J" },
  { src: "7.jpg", href: "https://coursera.org/verify/SL6TQNHVCBQJ" },
  {
    src: "Udemy.jpg",
    href: "https://www.udemy.com/certificate/UC-4f10b11f-b6a3-40ee-95b0-7cf6ad93b7b1/",
  },
  { src: "badgeCertificate.jpg", href: "https://www.credly.com/go/hq46IVro" },
];

function About() {
  const [carousel, setCarousel] = useState<{
    state: "rightAnimation" | "leftAnimation";
    number: number;
  }>({
    state: "leftAnimation",
    number: 0,
  });

  return (
    <div>
      <div className="mx-4 lg:mx-0">
        <div className="mt-20 flex flex-col space-y-12 lg:flex-row lg:space-x-8 ">
          <div className="space-y-4">
            <h1 className=" text-[2.5rem] font-bold">
              Hi, Im Mohammad Mehdi Wahid.
            </h1>
            <p className="text-[1.5rem] leading-[1.75]">
              {" "}
              I&apos;m UI/UX Designer and Front-end Developer with a mastery of
              Next.js, dedicated to transforming innovative ideas into visually
              stunning and user-centric digital experiences. As a proud founding
              member of the{" "}
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
            className="aspect-[10/7] w-full rounded object-cover "
          />
        </div>
        <div className="mt-[6rem] space-y-[1rem] ">
          <h1 className="pb-[1rem] text-[2.5rem] font-bold ">My Journey</h1>
          <Image
            src={"/images/Kabul Uni.png"}
            height={1000}
            width={1000}
            className=""
            alt=""
          />
          <Image
            src={"/images/google ux.png"}
            height={1000}
            width={1000}
            alt=""
            className=""
          />
          <Image
            className=""
            src={"/images/dsicCover.png"}
            height={1000}
            width={1000}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
