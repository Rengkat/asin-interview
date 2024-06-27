import React, { Fragment } from "react";
import Heading from "./Heading";
import { innovations } from "./mockData";

const Innovations = () => {
  return (
    <div className="w-full lg:w-[80%] mx-auto px-5 lg:px-0">
      <Heading
        heading={"Our Concept Innovations"}
        subHeading={
          " We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;"
        }
      />
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 my-14 ">
        {innovations.map((card, i) => {
          return (
            <Fragment key={i}>
              <aside className="text-center bg-white shadow rounded-md p-10 lg:p-5">
                <h2 className="font-bold text-xl">{card.heading}</h2>
                <p className="mt-8">{card.content}</p>
              </aside>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Innovations;
