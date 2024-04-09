"use client";

import Link from "next/link";
import { FaClock, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

function Footer() {
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
