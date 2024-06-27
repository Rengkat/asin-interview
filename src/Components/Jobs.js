import React, { Fragment } from "react";
import Heading from "./Heading";
import { jobs } from "./mockData";
import Image from "next/image";

const Jobs = () => {
  return (
    <div className="w-[80%] mx-auto mt-[10rem]">
      <Heading
        heading={"Equity jobs"}
        subHeading={
          "See companies and startups offering equity or a mix of cash and equity for very important position in their company"
        }
      />
      <div className="flex gap-5 my-10">
        {jobs.map((info, i) => {
          return (
            <Fragment key={i}>
              <div className="bg-white w-[25%] p-5 rounded-md shadow">
                <Image className="w-[40%]" src={info.logo} height={200} width={200} />
                <p className="my-2">{info.description}</p>
                <p className="font-bold">{info.through}</p>
                <main className="mt-4">
                  <div className="flex justify-between w-full">
                    <div>
                      <h3 className=" font-light text-gray-500">LOCATION</h3>
                      <p className="text-sm">{info.location}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <h3 className="font-light text-gray-500 text-left">INDUSTRY</h3>
                      <p className="text-sm">{info.industry}</p>
                    </div>
                  </div>
                  <div className="flex justify-between my-4">
                    <div>
                      <h3 className=" font-light text-gray-500">EQUITY</h3>
                      <p className="text-sm">{info.equity}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <h3 className="font-light text-gray-500 text-left">STIPEND</h3>
                      <p className="text-sm">{info.stipend}</p>
                    </div>
                  </div>
                  <div className="flex justify-between my-2">
                    <div>
                      <h3 className=" font-light text-gray-500">DATELINE</h3>
                      <p className="text-sm">{info.dateline}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <h3 className="font-light text-gray-500 text-left">ROLE TYPE</h3>
                      <p className="text-sm">{info.roleType}</p>
                    </div>
                  </div>
                  <button className="bg-[#303030] rounded-[2rem] text-white py-2 px-6 my-2">
                    View More
                  </button>
                </main>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
