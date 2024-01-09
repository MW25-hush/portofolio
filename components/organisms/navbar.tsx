import Link from "next/link";

export default function Navbar() {
  return (
    <div className="mt-8  font-bebas_neve flex justify-between">
      <div className=" text-[48px]">M@W</div>
      <div className="flex space-x-8 ">
        <Link href={"/"}>projects</Link>
        <Link href={"/"}>about</Link>
      </div>
    </div>
  );
}
