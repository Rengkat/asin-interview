import React, { Fragment } from "react";
import Heading from "./Heading";
import { models } from "./mockData";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
const Models = () => {
  return (
    <div className="w-full lg:w-[80%] mx-auto px-5 lg:px-0">
      <Heading
        heading={"Our Service Incubation Model"}
        subHeading={
          "The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest."
        }
      />
      <div className="my-10 text-center lg:text-left">
        <h1 className="font-bold text-2xl my-4">Hypothesis</h1>
        <p>Just a few reasons we know its time for this model within the ecosystem</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        {models.map((model, i) => {
          return (
            <Fragment key={i}>
              <aside className="bg-white shadow rounded-md p-10 lg:p-5 w-full lg:w-[33%]">
                <Image
                  className="lg:-[5%] w-[10%] mb-5"
                  src={model.icon}
                  height={500}
                  width={500}
                />
                <p>{model.content}</p>
              </aside>
            </Fragment>
          );
        })}
      </div>
      <div className="text-center lg:text-left">
        <h2 className="font-bold text-2xl my-4 ">Case Study</h2>
        <p>
          See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value
          of your share equity can be over time
        </p>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 my-10">
          <button className="bg-white rounded-[2rem] py-2 px-5 border-[1px] border-gray-600">
            Service Incubator Equity
          </button>
          <button className="bg-white rounded-[2rem] py-2 px-5 border-[1px] border-gray-600">
            SEEQ Maths Equation
          </button>
          <button className="bg-white rounded-[2rem] py-2 px-5 border-[1px] border-gray-600">
            Value of my Equity Over Time
          </button>
        </div>
        <Link
          className="font-semibold flex items-center justify-center underline gap-2"
          href={"/incubator"}>
          <span>Become A Service Incubator</span>
          <IoMdArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default Models;
