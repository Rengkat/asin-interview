import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosMenu } from "react-icons/io";
const Nav = () => {
  return (
    <div className=" w-full lg:w-[82%] mx-auto">
      <div className="flex justify-between items-center py-5 px-10 lg:p-3 ">
        <div className="flex items-center gap-5">
          <Image src={"/logo.svg"} height={200} width={200} className="w-[70%] lg:w-[20%]" />
          <nav className="hidden lg:flex gap-5 ">
            <Link href={"about"}>About</Link>
            <Link href={"sip"}>SIP</Link>
            <Link href={"studio"}>Studio</Link>
            <Link href={"seeq"}>SEEQ</Link>
            <Link href={"platforms"}>Platforms</Link>
            <Link href={"initiatives"}>Initiatives</Link>
            <Link href={"more"}>More</Link>
          </nav>
        </div>
        <div className="flex gap-5 items-center hidden">
          <Link className="bg-[#20888F] py-3 px-4 rounded-[25px] text-sm text-white" href={"sinc"}>
            SINC With Us
          </Link>
          <Link className="bg-[#303030] py-3 px-4 rounded-[25px] text-sm text-white" href={"apply"}>
            Apply to SIP 1.0
          </Link>
        </div>
        <div className="text-3xl cursor-pointer">
          <IoIosMenu />
        </div>
      </div>
    </div>
  );
};

export default Nav;
