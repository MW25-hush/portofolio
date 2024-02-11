"use client";

import { cx } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { MdOutlineLightMode } from "react-icons/md";

export default function Navbar({
  setTheme,
}: {
  setTheme?: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  return (
    <div className="col-span-4  mx-4 mt-8 flex items-center justify-between font-bebas_neve lg:col-start-2  lg:col-end-12 lg:mx-0 ">
      <div className=" text-[2.5rem] tracking-[0.05em]">M@W</div>
      <div className="flex space-x-8 font-helvetica text-lg capitalize ">
        <Link
          href={"/"}
          className={cx("text-accent-gray hover:text-primary", {
            "font-bold text-primary": pathname === "/",
          })}
        >
          projects
        </Link>
        <Link
          href={"/about"}
          className={cx("text-accent-gray hover:text-primary", {
            "font-bold text-primary": pathname === "/about",
          })}
        >
          about
        </Link>

        <MdOutlineLightMode
          size={24}
          onClick={() => setTheme && setTheme((theme: boolean) => !theme)}
          className="cursor-pointer hover:scale-105"
          title="Dark Theme"
        />
      </div>
    </div>
  );
}
