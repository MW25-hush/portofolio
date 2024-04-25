import Link from "next/link";
import { FaDribbble, FaRegCopyright, FaRegEnvelope } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div className=" mt-20  border-t-2 px-16 py-10 ">
      <div className="mx-auto flex max-w-[100rem] flex-col items-center space-y-8  md:flex-row md:justify-between   md:space-y-0  ">
        <div className="flex items-center gap-4">
          <FaRegCopyright size={32} />
          <p className="text-[1.5rem] text-gray-400">2024</p>
          <p
            className="text-[1.5rem] font-bold
        "
          >
            M@W
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <Link href={"mailto:mehdiuxdevfusion@gmail.com"}>
            <FaRegEnvelope size={32} />
          </Link>
          <Link href={"https://www.linkedin.com/in/mohammad-mehdi-wahid/"}>
            <CiLinkedin size={40} />
          </Link>
          <Link href={"https://dribbble.com/M_W2525"}>
            <FaDribbble size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
