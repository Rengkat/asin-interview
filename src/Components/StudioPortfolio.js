import React, { Fragment } from "react";
import Heading from "./Heading";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import MoreLink from "./MoreLink";

const StudioPortfolio = () => {
  return (
    <div className="w-[80%] mx-auto mt-[5rem]">
      <Heading
        heading={"Our Studio Portfolio"}
        subHeading={"Our 2024 Service Incubator Portfolio Companies"}
      />
      <div className="grid grid-cols-8 gap-5 my-[4rem]">
        {Array.from({ length: 48 }).map((_, i) => {
          return (
            <Fragment key={i}>
              <div className="bg-white p-5 flex items-center justify-center rounded-lg shadow-md">
                <Image
                  className="w-[100%] h-[2rem]"
                  src={`/logo ${i + 1}.png`}
                  height={200}
                  width={200}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
      <MoreLink text={"View All Companies"} link={"/companies"} />
    </div>
  );
};

export default StudioPortfolio;
