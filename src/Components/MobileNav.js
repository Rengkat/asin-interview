"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
const MobileNav = ({ openMenu }) => {
  return (
    <div className="w-full bg-black h-full text-white  ">
      <div onClick={openMenu} className="text-white text-3xl flex justify-end p-5">
        <IoMdClose />
      </div>
      <nav className=" flex flex-col gap-5 ">
        <Link className="text-center hover:mr-3 transition-all duration-100" href={"about"}>
          About
        </Link>
        <Link className="text-center hover:mr-3 transition-all duration-100" href={"sip"}>
          SIP
        </Link>
        <Link className="text-center hover:mr-3 transition-all duration-100" href={"studio"}>
          Studio
        </Link>
        <Link className="text-center hover:mr-3 transition-all duration-100" href={"seeq"}>
          SEEQ
        </Link>
        <Link className="text-center hover:mr-3 transition-all duration-100" href={"platforms"}>
          Platforms
        </Link>
        <Link className="text-center hover:mr-3 transition-all duration-100" href={"initiatives"}>
          Initiatives
        </Link>
        <Link className="text-center hover:mr-3 transition-all duration-100" href={"more"}>
          More
        </Link>
      </nav>
      <div className="flex justify-center gap-5 items-center my-[2rem] ">
        <Link className="bg-[#20888F] py-3 px-4 rounded-[25px] text-sm text-white" href={"sinc"}>
          SINC With Us
        </Link>
        <Link className="bg-[#303030] py-3 px-4 rounded-[25px] text-sm text-white" href={"apply"}>
          Apply to SIP 1.0
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
