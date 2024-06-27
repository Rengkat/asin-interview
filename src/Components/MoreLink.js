import Link from "next/link";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const MoreLink = ({ link, text }) => {
  return (
    <div>
      {" "}
      <Link
        className="font-semibold flex items-center justify-center underline gap-[5px]"
        href={link}>
        <span>{text}</span>
        <IoMdArrowForward />
      </Link>
    </div>
  );
};

export default MoreLink;
