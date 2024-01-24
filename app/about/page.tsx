import Image from "next/image";
import myPhoto from "../../public/images/myPhoto.jpg";
import Contact from "@/components/organisms/contact";
import kabulUni from "../../public/images/KabulUni.png";
import dsic from "../../public/images/DSIC.png";
import { FcGoogle } from "react-icons/fc";

function About() {
  return (
    <>
    <div className="col-start-1 col-end-5 mt-16 lg:col-start-2 lg:col-end-12 ">
      <div className="mx-2 grid grid-cols-6">
        <div className="col-span-6 text-center  lg:col-span-3 lg:text-left">
          <h1 className="mb-[1.5rem] text-[2.5rem] font-bold">About</h1>
          <p className="text-[1.25rem] ">
            Hi, I’m Mohammad Mehdi Wahid a UX Engineer. I am capable to both
            design and develop an application. I’m a bachelor of software
            engineering from computer science faculty of Kabul University. I
            also pursued my passion for design and solving user problems with
             Google UX Professional Certificate.
          </p>
          <div className="mt-[3rem] space-y-[1rem]">
            <h1 className="text-[2.5rem] font-bold pb-[1rem] ">My Journey</h1>
            <section className="space-y-[0.5rem] mb-[0.5rem]">
              <div className="flex items-center ">
                <Image
                  src={kabulUni}
                  alt="kabulUni"
                  className="w-14 object-cover"
                />
                <h1 className="ml-2 mr-3 text-[1.5rem] font-bold">
                  Kabul University
                </h1>
                <p>(2019-2023)</p>
              </div>
              <p>
                I achieved my bachelor degree from Kabul University. My courses
                were heavily concentrated on software engineering.
              </p>
            </section>
            <section className="mb-[0.5rem] space-y-[0.5rem]">
              <div className="flex items-center">
                <FcGoogle size={32} />
                <h1 className="ml-2 mr-3 text-[1.5rem] font-bold">
                  Google UX Professional Certificate
                </h1>
                <p>(6 months)</p>
              </div>
              <p>
                During my third year I slowly started to find a passion for
                UI/UX after a year of experience with front-end development. I
                wanted to sketch my own ideas, craft feasible solutions and
                bring them to life. So I took the Google UX Certificate program
                which helped me immensely in my goals.
              </p>
            </section>
            <section className="space-y-[0.5rem] mb-[0.5rem]">
              <div className="flex items-center">
                <Image
                  src={dsic}
                  alt="digital solution and innovation center"
                  className="w-32 object-cover"
                />
                <h1 className="text-[1.5rem] font-bold">
                  Digital Solution & Innovation Center
                </h1>
                <p className="ml-2">(9 months) internship</p>
              </div>
              <p>
                Digital Solution and Innovation Center is newly formed
                organization within the Kabul University, which it’s sole
                purpose is to digitalize Afghanistan. I have the honor to be one
                of it’s founding members. I had an internship where I did
                volunteer work for the university.
              </p>
            </section>
          </div>
        </div>
        <div className="col-span-3 hidden justify-self-center lg:block">
          <Image src={myPhoto} alt="" height={500} />
        </div>
      </div>

      <iframe src="" />

    </div>
    <Contact />
    </>
  );
}

export default About;
