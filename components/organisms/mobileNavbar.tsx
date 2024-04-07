import { cx } from "class-variance-authority";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

function MobileNav({
  pathname,
  download,
  shutNav,
}: {
  pathname: string;
  download: () => Promise<void>;
  shutNav: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <aside className="absolute right-0 z-10 h-screen w-2/3 bg-white    ">
      <div className="mx-4 flex  items-center justify-between pt-4 ">
        <div className="  text-[1.5rem] tracking-[0.05em] ">M@W</div>
        <HiOutlineXMark size="48" onClick={() => shutNav(false)} />
      </div>
      <div className="mt-8 flex flex-col">
        <h1
          className="border-b py-3 pl-4 text-[1.5rem]"
          onClick={() => download()}
        >
          CV
        </h1>
        <Link
          href={"/"}
          className={cx(
            "border-b py-3 pl-4 text-[1.5rem] text-accent-gray hover:text-primary",
            {
              "font-bold text-primary": pathname === "/",
            },
          )}
        >
          Projects
        </Link>
        <Link
          href={"/about"}
          className={cx(
            "border-b py-3 pl-4 text-[1.5rem] text-accent-gray hover:text-primary",
            {
              "font-bold text-primary": pathname === "/about",
            },
          )}
        >
          About
        </Link>
      </div>
    </aside>
  );
}

export default MobileNav;
