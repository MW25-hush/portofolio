import { FaClock, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

import { PiReadCvLogoFill } from "react-icons/pi";

function Contact() {
  return (
    <div className="bg-secondary text-primary w-fit px-[3rem] py-[1.5rem] rounded-[1rem] mt-[4rem] mb-[2rem]">
      <div className="flex items-center space-x-[1rem] mb-[1.5rem] ">
        <h1 className="text-[1.5rem] font-bold ">
          Thank you for giving me your time!
        </h1>
        <FaClock size={24} />
      </div>
      <div className="flex space-x-[1.5rem] ">
        <div>
          <div className="flex items-center space-x-[1rem]  ">
            <h1 className="text-[1.5rem] font-bold ">Contact Me</h1>
            <FaEnvelope size={24} />
          </div>
          <p>mehdiuxdevfusion@gmail.com</p>
        </div>

        <div>
          <h1 className="text-[1.5rem] font-bold ">Let&apos;s connect</h1>
          <div className="flex ">
            <div className="flex border-r pr-2 border-primary   items-center space-x-[0.5rem] ">
              <p>LinkedIn</p>
              <FaLinkedin size={24} className="text-primary" />
            </div>
            <div className="flex border-r px-2 border-primary items-center space-x-[0.5rem]">
              <p>Github</p>
              <FaGithub size={24} className="text-primary" />
            </div>
            <div className="flex pl-2 items-center space-x-[0.5rem]">
              <p>Resume</p>
              <PiReadCvLogoFill size={24} className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
