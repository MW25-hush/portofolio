import Image from "next/image";
import myPhoto from "../../public/images/myPhoto.jpg";
import Contact from "@/components/organisms/contact";

function About() {
  return (
    <div className="mt-16 col-start-2 col-end-12 ">
      <div className="grid grid-cols-6">
        <div className="col-span-3">
          {" "}
          <h1 className="text-[2.5rem] font-bold mb-[1.5rem]">About</h1>
          <p className="text-[1.25rem] w-[50ch]">
            Hi, I’m Mohammad Mehdi Wahid. I’m a UX engineer. I am capable of
            working on both the design and the development of an application. I
            am comfortable using Figma for design and then I prefer to use Next
            Js, one of the most popular frameworks of React to bring that design
            to life. I have the honor to say that I’m one of the founders of the
            Ku-DSIC a digitalization center aimed to revolutionize Afghanistan.
            Furthermore, I am a Google-certified UX designer and with this
            knowledge, I have designed two crucial applications for the Kabul
            University which is being used right now by hundreds of people.
            Besides my passion for the fusion of design and development, I love
            to read books especially those on design and programming.
          </p>
        </div>
        <div className="col-span-3 justify-self-center">
          <Image src={myPhoto} alt="" height={500} />
        </div>
      </div>

      <div className="mt-[4rem] ">
        <p className="text-[1.5rem] font-bold mb-[1.5rem]">Education</p>
        <ul className="list-disc ml-4 list-inside space-y-[0.5rem]">
          <li className="mr-10">Bachelor of Computer Science (2019-2023)</li>
          <li>Google UX Professional Certificate</li>
        </ul>
      </div>

      <Contact />
    </div>
  );
}

export default About;
