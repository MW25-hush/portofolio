"use client";
import Image from "next/image";
import Contact from "@/components/organisms/contact";
import kabulUni from "../../public/images/KabulUni.png";
import dsic from "../../public/images/DSIC.png";
import { FcGoogle } from "react-icons/fc";

import Navbar from "@/components/organisms/navbar";
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
    <>
      <div className="col-start-1 col-end-5 mt-16 lg:col-start-2 lg:col-end-12">
        <div className="flex space-x-8 ">
          <div>
            <h1 className="mb-[1.5rem] text-[2.5rem] font-bold">About</h1>
            <ul className="list-disc space-y-4 text-[1.25rem] marker:text-gray-400">
              <li>
                Hi, I’m Mohammad Mehdi Wahid a passionate UI/UX Designer and
                Front-end Developer with a mastery of Next.js, dedicated to
                transforming innovative ideas into visually stunning and
                user-centric digital experiences. As a proud founding member of
                the Digital Solution and Innovation Center (DSIC) at Kabul
                University, I am committed to revolutionizing governmental
                organizations across Afghanistan through digital solutions.
              </li>
              <li>
                During my internship, I collaborated closely with esteemed
                professors to conceptualize and execute Morasilat, an
                application poised to replace the outdated paper-based systems
                currently in use. Through meticulous design and development,
                Morasilat offers a seamless transition to a modern, efficient,
                and accessible platform.
              </li>
            </ul>
          </div>
          <Image
            src="/images/photo.jpg"
            alt="photo"
            width={300}
            height={300}
            className="rounded"
          />
        </div>
        <div className="mt-[3rem] space-y-[1rem] ">
          <h1 className="pb-[1rem] text-[2.5rem] font-bold ">My Journey</h1>
          <section className="mb-[0.5rem] space-y-[0.5rem] ">
            <div className="flex items-center justify-between ">
              <div className="flex items-center space-x-2">
                <Image
                  src={kabulUni}
                  alt="kabulUni"
                  className="w-14 object-cover"
                />
                <h1 className="text-[1.5rem] font-bold">Kabul University</h1>
              </div>
              <p className="text-gray-500">(2019-2023)</p>
            </div>
            <ul className="list-inside list-disc pt-2 marker:text-gray-400">
              <li>
                I achieved my bachelor degree from Kabul University with a GPA
                of 3.7 . My courses were heavily concentrated on software
                engineering.
              </li>
            </ul>
          </section>
          <section className="mb-[0.5rem] space-y-[0.5rem]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 ">
                <FcGoogle size={48} />
                <h1 className="ml-2 mr-3 text-[1.5rem] font-bold">
                  Google UX Professional Certificate
                </h1>
              </div>
              <p className="text-gray-500">(6 months)</p>
            </div>
            <ul className="list-inside list-disc pt-2 marker:text-gray-400">
              <li>
                During my third year I slowly started to find a passion for
                UI/UX after a year of experience with front-end development.
              </li>
              <li>
                I want to sketch my own ideas, craft feasible solutions and
                bring them to life.
              </li>
              <li>
                I took the Google UX Certificate program which helped me
                immensely in my goals.
              </li>
            </ul>
          </section>
          <section className="mb-[0.5rem] space-y-[0.5rem]">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src={dsic}
                  alt="digital solution and innovation center"
                  className="w-32 object-cover"
                />
                <h1 className="text-[1.5rem] font-bold ">
                  Digital Solution & Innovation Center
                </h1>
              </div>
              <p className="ml-2">(9 months) Internship</p>
            </div>
            <ul className="list-inside list-disc marker:text-gray-400">
              <li>
                Digital Solution and Innovation Center is an organization within
                the Kabul University, which it’s sole purpose is to digitalize
                Afghanistan.
              </li>
              <li>I have the honor to be one of it’s founding members.</li>
              <li>
                I had an internship where I did volunteer work for the
                university.
              </li>
            </ul>
          </section>
        </div>

        <section id="carousel" className="mt-4 ">
          <h1 className="text-[2.5rem] font-bold ">Certificates</h1>

          {/*  */}
          <div
            key={carousel.number}
            className={`${carousel.state} flex items-center justify-center space-x-4`}
          >
            <BiChevronLeft
              size={48}
              className="rounded-full border"
              onClick={() =>
                setCarousel((prev) => ({
                  state: "rightAnimation",
                  number: prev.number !== 0 ? prev.number - 1 : prev.number,
                }))
              }
            />
            <Link href={carouselArray[carousel.number].href} target="_blank">
              <Image
                src={`/certificates/${carouselArray[carousel.number].src}`}
                alt=""
                height={650}
                width={650}
                className="transition-transform duration-500 ease-out hover:scale-105"
              />
            </Link>
            <BiChevronRight
              size={48}
              className="rounded-full border"
              onClick={() =>
                setCarousel((prev) => ({
                  state: "leftAnimation",
                  number:
                    prev.number !== carouselArray.length - 1
                      ? prev.number + 1
                      : prev.number,
                }))
              }
            />
          </div>
        </section>
      </div>

      <Contact />
    </>
  );
}

export default About;
