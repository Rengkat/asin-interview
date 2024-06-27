import Link from "next/link";
import React, { Fragment } from "react";
import { services } from "./mockData";
import MoreLink from "./MoreLink";
import Heading from "./Heading";

const Services = () => {
  return (
    <div className="my-[5rem]">
      <div className="w-[90%] lg:w-[60%] mx-auto bg-white rounded-[2rem] shadow text-center p-8 my-20 text-[1.1rem]">
        <p>
          "Nigeria and Africa has a massive network effect that have not be fully utilized. With
          Nigerians/Africans in every country and territory of the world, we can scale an African
          business to 100+ countries in few weeks"
        </p>
        <div className="my-5">
          <p>Daniel Izeghs Oratokhai</p>
          <p className="my-2 text-sm">Managing Partner at SINC Partners Ltd</p>
        </div>
      </div>
      <Heading heading={"Network of builders helping startup scale"} />
      <div className="w-full lg:w-[75%] mx-auto flex flex-col lg:flex-row gap-10 my-10 px-5 lg:px-0">
        {services.map((data, i) => {
          return (
            <Fragment key={i}>
              <aside className="p-8 bg-white">
                <header className="text-xl font-semibold my-4">{data.title}</header>
                {data.body.map((paragraph, i) => (
                  <p className="py-2" key={i}>
                    {paragraph}
                  </p>
                ))}
                <MoreLink text={"Learn More"} link={data.link} />
              </aside>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
