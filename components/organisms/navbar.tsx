"use client";

import { cx } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="mt-8  font-bebas_neve flex justify-between items-center  lg:col-start-2 lg:col-end-12 ">
      <div className=" text-[2.5rem] tracking-[0.05em]">M@W</div>
      <div className="flex space-x-8 font-helvetica text-lg capitalize ">
        <Link
          href={"/"}
          className={cx("text-accent-gray hover:text-primary", {
            "text-primary font-bold": pathname === "/",
          })}
        >
          projects
        </Link>
        <Link
          href={"/about"}
          className={cx("text-accent-gray hover:text-primary", {
            "text-primary font-bold": pathname === "/about",
          })}
        >
          about
        </Link>
      </div>
    </div>
  );
}
