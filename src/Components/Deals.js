import React, { Fragment } from "react";
import Heading from "./Heading";
import { DealsInfos, DealsInfos2 } from "./mockData";
import Link from "next/link";

const Deals = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Heading
        heading={"SINC Investors Network"}
        subHeading={
          "Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest. "
        }
      />
      <p className="w-[70%] mx-auto text-center my-4">
        <span className="font-bold">Disclaimer:</span> These deal flows is a statement of our
        projections and may differ from stage to stage and from venture to venture and the guarantee
        is for deal 1, usually the first to invest
      </p>
      <p className="my-10">
        <span className="font-bold">Micro Angel Investors & Service incubators</span> (Invest from
        $500 & above)
      </p>
      <div className="border-y-[1px] border-gray-700 flex">
        {DealsInfos.map((info, i) => {
          return (
            <Fragment key={i}>
              <div
                className={`${
                  (i === 1 || i === 2) && "border-x-[1px] border-gray-700"
                } px-2 py-4 w-[25%]`}>
                <h2 className="font-bold my-3">Deal {i + 1}</h2>
                <div>
                  {info.bullets.map((bullet, i) => (
                    <p className=" text-xs my-[5px]" key={i}>
                      ✓ {bullet}
                    </p>
                  ))}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
      <p className="my-10">
        <span className="font-bold">Angel Investors & Venture Capital</span> (Invest
        from $50k and above){" "}
      </p>
      <div className="border-y-[1px] border-gray-700 flex">
        {DealsInfos2.map((info, i) => {
          return (
            <Fragment key={i}>
              <div
                className={`${
                  (i === 1 || i === 2) && "border-x-[1px] border-gray-700"
                } px-2 py-4 w-[25%]`}>
                <h2 className={`${i === 3 ? "hidden" : "block font-bold my-3"}`}>Deal {i + 5}</h2>
                <div>
                  {info.bullets.map((bullet, i) => (
                    <p className=" text-xs my-[5px]" key={i}>
                      ✓ {bullet}
                    </p>
                  ))}
                  <div className={`${i === 3 ? "bg-black text-white py-8 px-5 block" : "hidden"}`}>
                    <p className="mb-8">
                      {" "}
                      Work with Service Incubators (SINC) to expedite your time to market
                    </p>
                    <Link className="bg-[#303030] rounded-[1rem] py-3 px-4" href={"/join"}>
                      Join SINC Network
                    </Link>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Deals;
