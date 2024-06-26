import Link from "next/link";
import React, { Fragment } from "react";
import { services } from "./mockData";

const Services = () => {
  return (
    <div className="my-[5rem]">
      <div className=" w-[60%] mx-auto bg-white rounded-[2rem] shadow text-center p-8 my-20 text-[1.1rem]">
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
      <h1 className="text-4xl text-center w-[40%] mx-auto font-bold leading-[1.5]">
        Network of builders helping startup scale
      </h1>
      <div className="w-[75%] mx-auto flex gap-10 my-10">
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
                <Link className="font-bold underline pt-8" href={data.link}>
                  Learn More
                </Link>
              </aside>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
