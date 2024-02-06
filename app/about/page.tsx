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
import badgeCertificate from "@/public/certificates/badgeCertificate.jpg";
import Link from "next/link";

function About() {
  return (
    <>
      <div className="col-start-1 col-end-5 mt-16 lg:col-start-2 lg:col-end-12 ">
        <div className=" mx-auto max-w-5xl text-center">
          <h1 className="mb-[1.5rem] text-[2.5rem] font-bold">About</h1>
          <p className="space-y-4 text-[1.25rem] ">
            <span className="block">
              {" "}
              Hi, I’m Mohammad Mehdi Wahid a passionate UI/UX Designer and
              Front-end Developer with a mastery of Next.js, dedicated to
              transforming innovative ideas into visually stunning and
              user-centric digital experiences. As a proud founding member of
              the Digital Solution and Innovation Center (DSIC) at Kabul
              University, I am committed to revolutionizing governmental
              organizations across Afghanistan through digital solutions.
            </span>
            <span className="block">
              During my internship, I collaborated closely with esteemed
              professors to conceptualize and execute Morasilat, an application
              poised to replace the outdated paper-based systems currently in
              use. Through meticulous design and development, Morasilat offers a
              seamless transition to a modern, efficient, and accessible
              platform.
            </span>
            <span className="block">
              My skill set extends beyond technical expertise to a genuine love
              for sketching and ideation, ensuring that each project not only
              meets functional requirements but also encapsulates beauty and
              usability. With a knack for bringing concepts to life, I harness
              the magic of Next.js to create dynamic and responsive
              applications. I look forward to contributing my skills and passion
              to further elevate the digital landscape, fostering innovation and
              efficiency in every project
            </span>
          </p>
          <div className="mt-[3rem] space-y-[1rem] ">
            <h1 className="pb-[1rem] text-[2.5rem] font-bold ">My Journey</h1>
            <section className="mb-[0.5rem] space-y-[0.5rem] ">
              <div className="flex items-center justify-center ">
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
              <div className="flex items-center justify-center">
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
            <section className="mb-[0.5rem] space-y-[0.5rem]">
              <div className="flex items-center justify-center">
                <Image
                  src={dsic}
                  alt="digital solution and innovation center"
                  className="w-32 object-cover"
                />
                <h1 className="text-[1.5rem] font-bold ">
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

        <section className="mt-[3rem]">
          <h1 className="mb-[1.5rem] text-[1.5rem] font-bold">Certificates</h1>
          <div className="flex flex-wrap gap-[1rem]">
            <Link
              target="_blank"
              href="https://www.coursera.org/account/accomplishments/verify/26GQUBDNMFY2"
            >
              <Image
                src={firstCourse}
                alt="first course"
                height={400}
                width={400}
                className="hover:scale-105 transition-transform duration-500 ease-out  "
              />
            </Link>
            <Link
              target="_blank"
              href="https://coursera.org/verify/RHQNBPJX2SU4"
            >
              <Image
                src={secondCourse}
                alt="second course"
                height={400}
                width={400}
              />
            </Link>
            <Link
              target="_blank"
              href="https://coursera.org/verify/X4CS7QAYQVMP"
            >
              <Image
                src={thirdCourse}
                alt="third course"
                height={400}
                width={400}
              />
            </Link>

            <Link
              target="_blank"
              href="https://coursera.org/verify/DKDDQN8RDNPJ"
            >
              <Image
                src={fourthCourse}
                alt="fourth course"
                height={400}
                width={400}
              />
            </Link>
            <Link
              target="_blank"
              href="https://coursera.org/verify/9H5FJJMFWJYH"
            >
              <Image
                src={fifthCourse}
                alt="fifth course"
                height={400}
                width={400}
              />
            </Link>
            <Link
              target="_blank"
              href="https://coursera.org/verify/2KTMTDZ2E82J"
            >
              <Image
                src={sixthCourse}
                alt="sixth course"
                height={400}
                width={400}
              />
            </Link>
            <Link
              target="_blank"
              href="https://coursera.org/verify/SL6TQNHVCBQJ"
            >
              <Image
                src={seventhCourse}
                alt="seventh course"
                height={400}
                width={400}
              />
            </Link>
            <Link target="_blank" href="https://www.credly.com/go/hq46IVro">
              <Image
                src={badgeCertificate}
                alt="Badge Certificate"
                height={400}
                width={400}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.udemy.com/certificate/UC-4f10b11f-b6a3-40ee-95b0-7cf6ad93b7b1/"
            >
              <Image src={udemy} alt="udemy" height={400} width={400} />
            </Link>
          </div>
        </section>
      </div>
      <Contact />
    </>
  );
}

export default About;
