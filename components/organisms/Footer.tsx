import Link from "next/link";
import { FaRegCopyright, FaRegEnvelope } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div className=" mt-20  border-t-2 px-16 py-10 ">
      <div className="mx-auto flex max-w-[100rem] flex-col items-center space-y-8  md:flex-row md:justify-between   md:space-y-0  ">
        <div className="flex items-center space-x-2">
          <FaRegCopyright size={32} />
          <p className="text-[1.5rem] text-gray-400">2024</p>
          <p
            className="text-[1.5rem] font-bold
        "
          >
            M@W
          </p>
        </div>
        <div className="flex space-x-8">
          <Link href={"mailto:mehdiuxdevfusion@gmail.com"}>
            <FaRegEnvelope size={32} />
          </Link>
          <Link href={"https://www.linkedin.com/in/mohammad-mehdi-wahid/"}>
            <CiLinkedin size={32} />
          </Link>
          <Link href={"https://github.com/MW25-hush"}>
            <LuGithub size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
