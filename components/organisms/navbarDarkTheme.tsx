// import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { MdOutlineLightMode } from "react-icons/md";

const DarkNavbar = ({
  setTheme,
}: {
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed top-0 z-50 h-[65px] w-full bg-[#03001417] px-10 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
      <div className="m-auto flex h-full w-full flex-row items-center justify-between px-[10px]">
        <div className="  text-[2.5rem] tracking-[0.05em] text-white">M@W</div>

        <div className="flex h-full w-[500px] flex-row items-center justify-between md:mr-20">
          <div className="mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="">
          <MdOutlineLightMode
            title="Light Theme"
            size={24}
            className="cursor-pointer bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent text-white hover:scale-125"
            onClick={() => setTheme((theme: boolean) => !theme)}
          />
        </div>
      </div>
    </div>
  );
};

export default DarkNavbar;
