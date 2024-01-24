import Image from "next/image";
import myPhoto from "../../public/images/myPhoto.jpg";
import Contact from "@/components/organisms/contact";
import kabulUni from "../../public/images/KabulUni.png";
import dsic from "../../public/images/DSIC.png";
import { FcGoogle } from "react-icons/fc";
import firstCourse from "../../public/certificates/1.jpg";
import secondCourse from "../../public/certificates/2.jpg";
import thirdCourse from "../../public/certificates/3.jpg";
import fourthCourse from "../../public/certificates/4.jpg";
import fifthCourse from "../../public/certificates/5.jpg";
import sixthCourse from "../../public/certificates/6.jpg";
import seventhCourse from "../../public/certificates/7.jpg";
import udemy from "../../public/certificates/Udemy.jpg";

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
              <h1 className="pb-[1rem] text-[2.5rem] font-bold ">My Journey</h1>
              <section className="mb-[0.5rem] space-y-[0.5rem]">
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
                  I achieved my bachelor degree from Kabul University. My
                  courses were heavily concentrated on software engineering.
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
                  bring them to life. So I took the Google UX Certificate
                  program which helped me immensely in my goals.
                </p>
              </section>
              <section className="mb-[0.5rem] space-y-[0.5rem]">
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
                  purpose is to digitalize Afghanistan. I have the honor to be
                  one of it’s founding members. I had an internship where I did
                  volunteer work for the university.
                </p>
              </section>
            </div>
          </div>
          <div className="col-span-3 hidden justify-self-center lg:block">
            <Image src={myPhoto} alt="" height={500} />
          </div>
        </div>

        <section className="mt-[3rem]">
          <h1 className="text-[1.5rem] font-bold mb-[1.5rem]">Certificates</h1>
          <div className="flex flex-wrap gap-[1rem]">
            <Image
              src={firstCourse}
              alt="first course"
              height={400}
              width={400}
            />
            <Image
              src={secondCourse}
              alt="second course"
              height={400}
              width={400}
            />
            <Image
              src={thirdCourse}
              alt="third course"
              height={400}
              width={400}
            />
            <Image
              src={fourthCourse}
              alt="fourth course"
              height={400}
              width={400}
            />
            <Image
              src={fifthCourse}
              alt="fifth course"
              height={400}
              width={400}
            />
            <Image
              src={sixthCourse}
              alt="sixth course"
              height={400}
              width={400}
            />
            <Image
              src={seventhCourse}
              alt="seventh course"
              height={400}
              width={400}
            />
            <Image src={udemy} alt="udemy" height={400} width={400} />
          </div>
        </section>
      </div>
      <Contact />
    </>
  );
}

export default About;
