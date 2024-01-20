import Image from "next/image";
import myPhoto from "../../public/images/myPhoto.jpg";
import Contact from "@/components/organisms/contact";
import kabulUni from "../../public/images/KabulUni.png";
import dsic from "../../public/images/DSIC.png";

function About() {
  return (
    <div className="col-start-1 col-end-5 mt-16 lg:col-start-2 lg:col-end-12 ">
      <div className="mx-2 grid grid-cols-6">
        <div className="col-span-6 text-center  lg:col-span-3 lg:text-left">
          <h1 className="mb-[1.5rem] text-[2.5rem] font-bold">About</h1>
          <p className="text-[1.25rem] ">
            Hi, I’m Mohammad Mehdi Wahid a UX Engineer. I am capable to both
            design and develop an application. I’m a bachelor of software
            engineering from computer science faculty of Kabul University. I
            also pursued my passion for design and solving user problems with
            achieving Google UX Certificate.
          </p>
          <div>
            <h1>My Journey</h1>
            <section>
              <div className="flex">
                <Image src={kabulUni} alt="kabulUni" />
                <h1>Kabul University</h1>
                <p>(2019-2023)</p>
              </div>
              <p>
                I achieved my bachelor degree from Kabul University. My courses
                were heavily concentrated on software engineering.
              </p>
            </section>
            <section>
              <div className="flex">
                <Image src={kabulUni} alt="kabulUni" />
                <h1>Google UX Professional Certificate</h1>
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
            <section>
              <div className="flex">
                <Image
                  src={dsic}
                  alt="digital solution and innovation center"
                />
                <h1>Digital Solution and Innovation Center</h1>
                <p>(9 months) internship</p>
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

      <div className="mt-[4rem] text-center lg:text-left  ">
        <p className="mb-[1.5rem] text-[1.5rem] font-bold">Education</p>
        <ul className="ml-4 list-inside list-disc space-y-[0.5rem]">
          <li className="mr-10">Bachelor of Computer Science (2019-2023)</li>
          <li>Google UX Professional Certificate</li>
        </ul>
      </div>

      <Contact />
    </div>
  );
}

export default About;
