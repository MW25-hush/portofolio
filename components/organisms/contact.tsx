"use client";

import Link from "next/link";
import { FaClock, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

import { PiReadCvLogoFill } from "react-icons/pi";
import { Button } from "../molecules/button";

function Contact() {
  const Download = async () => {
    try {
      const response = await fetch("/api/file");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = url;
      link.download = "1.jpg";

      // Append the link to the document body
      document.body.appendChild(link);

      // Trigger a click on the link to start the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);

      // Release the object URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div className="col-span-full mt-[2rem] rounded-[1rem] bg-secondary px-[3rem] py-[1.5rem] text-primary lg:mx-0">
      <div className="mb-[1.5rem] flex items-center justify-center text-center lg:space-x-[1rem] lg:text-left ">
        <h1 className="text-[1.5rem] font-bold ">
          Thank you for giving me your time!
        </h1>
        <FaClock size={24} className="hidden lg:block" />
      </div>
      <div className="flex flex-col justify-center space-y-[1.5rem] text-center lg:flex-row lg:space-x-[1.5rem] lg:space-y-0 lg:text-left ">
        <div>
          <div className="flex items-center justify-center space-x-[1rem]   ">
            <h1 className="text-[1.5rem] font-bold ">Contact Me</h1>
            <FaEnvelope size={24} />
          </div>
          <p>mehdiuxdevfusion@gmail.com</p>
        </div>

        <div>
          <h1 className="text-center text-[1.5rem] font-bold ">
            Let&apos;s connect
          </h1>
          <div className="flex justify-center lg:justify-self-start ">
            <Link href={"https://www.linkedin.com/in/mohammad-mehdi-wahid/"}>
              <div className="flex items-center space-x-[0.5rem] border-r   border-primary pr-2 ">
                <p>LinkedIn</p>
                <FaLinkedin size={24} className="text-primary" />
              </div>
            </Link>
            <Link href={"https://github.com/MW25-hush"}>
              <div className="flex items-center space-x-[0.5rem] border-r border-primary px-2">
                <p>Github</p>
                <FaGithub size={24} className="text-primary" />
              </div>
            </Link>
            <div className="flex items-center space-x-[0.5rem] pl-2 ">
              <Button
                handleClick={() => Download()}
                label="Resume"
                overrideStyles="bg-inherit text-black py-0"
              />
              {/* <button onClick={() => Download()}>Resume</button> */}

              <PiReadCvLogoFill size={24} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
