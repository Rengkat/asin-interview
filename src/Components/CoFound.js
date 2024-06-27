import React, { Fragment } from "react";
import Heading from "./Heading";
import { CoFounds } from "./mockData";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import MoreLink from "./MoreLink";

const CoFound = () => {
  return (
    <div className="w-[80%] mx-auto my-[5rem]">
      <Heading
        heading={"Co-found With Us"}
        subHeading={
          "We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed "
        }
      />
      <div className="flex gap-10 my-14 ">
        {CoFounds.map((card, i) => {
          return (
            <Fragment key={i}>
              <aside className=" bg-white shadow rounded-md p-5">
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    background: card.color,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: "white",
                    marginBottom: "1rem",
                  }}>
                  {i + 1}
                </div>
                <h2 className="font-bold text-xl">{card.heading}</h2>
                <p className="mt-5">{card.content}</p>
              </aside>
            </Fragment>
          );
        })}
      </div>
      <MoreLink link={"/companies"} text={"View All Companies"} />
    </div>
  );
};

export default CoFound;
