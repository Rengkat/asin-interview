import React, { Fragment } from "react";
import Heading from "./Heading";
import { Procedures } from "./mockData";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import MoreLink from "./MoreLink";
const Procedure = () => {
  return (
    <div className="w-full lg:w-[95%] mx-auto my-[5rem] px-5 lg:px-0">
      <Heading
        heading={"Join Our Entrepreneur In Residence (EIR) Program"}
        subHeading={
          "Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each."
        }
      />
      <div className="flex flex-col lg:flex-row gap-2 my-10 lg:my-14 ">
        {Procedures.map((card, i) => {
          return (
            <Fragment key={i}>
              <aside className=" bg-white shadow rounded-md p-5">
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    background: "#4E4E4E",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: "white",
                    marginBottom: "1rem",
                    padding: "0.5rem",
                  }}>
                  <Image src={card.icon} height={200} width={200} />
                </div>
                <h2 className="font-bold text-xl my-2">{card.heading}</h2>
                {card.content.map((para, i) => (
                  <p className="py-2" key={i}>
                    {para}
                  </p>
                ))}
              </aside>
            </Fragment>
          );
        })}
      </div>
      <MoreLink link={"/companies"} text={"Support the Future"} />

      <div className="flex justify-center gap-10 lg:gap-16 text-3xl my-5  lg:my-[5rem]">
        <div className="w-[3rem] h-[3rem] border-[1px] border-gray-700 rounded-full grid place-items-center">
          <GoArrowLeft />
        </div>
        <div className="w-[3rem] h-[3rem] border-[1px] border-gray-700 rounded-full grid place-items-center">
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Procedure;
