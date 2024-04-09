"use client";

import { cx } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../molecules/button";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";
import MobileNav from "./mobileNavbar";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileNav, toggleMobileNav] = useState(false);
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
  return mobileNav ? (
    <MobileNav
      pathname={pathname}
      download={Download}
      shutNav={toggleMobileNav}
    />
  ) : (
    <nav className="fixed  z-10 w-full bg-white shadow md:px-16">
      <div className="mx-auto flex  max-w-[100rem]  items-center   justify-between  py-4  font-bebas_neve ">
        <div className="  text-[2.5rem] tracking-[0.05em] ">M@W</div>
        <RiMenu3Line
          size={48}
          onClick={() => toggleMobileNav(true)}
          className="md:hidden"
        />

        <div className="hidden items-center space-x-8 font-helvetica text-lg capitalize md:flex ">
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
          <Button
            label="CV"
            intent={"tertiary"}
            handleClick={() => Download()}
          />
        </div>
      </div>
    </nav>
  );
}
