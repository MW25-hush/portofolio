"use client";

import { cx } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { Button } from "../molecules/button";

export default function Navbar({
  setTheme,
}: {
  setTheme?: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

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
    <div className="col-span-4  mx-4 mt-8 flex items-center justify-between font-bebas_neve lg:col-start-2  lg:col-end-12 lg:mx-0 ">
      <div className=" text-[2.5rem] tracking-[0.05em] ">M@W</div>
      <div className="flex items-center space-x-8 font-helvetica text-lg capitalize ">
        <Button
          label="Resume"
          intent={"secondary"}
          overrideStyles="rounded-full !px-4"
          handleClick={() => Download()}
        />
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

        {/* <MdOutlineLightMode
          size={24}
          onClick={() => setTheme && setTheme((theme: boolean) => !theme)}
          className="cursor-pointer hover:scale-105"
          title="Dark Theme"
        /> */}
      </div>
    </div>
  );
}
