import Image from "next/image";
import React, { Fragment } from "react";
import { aboutlinks, initiatives, locations, morelinks, platformlinks } from "./mockData";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#212121] border-y-[1px] border-gray-500">
      <div className="w-full lg:w-[80%] mx-auto text-white grid grid-cols-1 lg:flex lg:justify-between px-5 lg:px-0">
        <div className="w-full lg:w-[20%] py-[2rem]">
          <Image className="w-[20%] lg:w-[50%]" src={"/blackLogo.svg"} width={200} height={200} />
          <p className="py-2 leading-[1.5] font-light pr-2 text-sm">
            SINC Partners is a service incubation company connecting experts in product development
            and growth marketing willing to offer their services to amazing startups in exchange
            for minute equity (usually 0.5% to 2%)
          </p>
        </div>
        <div className="w-full lg:w-[60%] grid grid-cols-2 lg:flex justify-between">
          <div className="w-full lg:w-[25%] py-0 lg:py-[2rem]">
            <h3 className="font-bold mb-[1rem]">Platforms</h3>
            <div className="">
              {platformlinks.map((link, i) => {
                return (
                  <Fragment key={i}>
                    <Link className="block font-light my-2 lg:my-[0.8rem]" href={link.link}>
                      {link.linkName}
                    </Link>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-[25%] py-0 lg:py-[2rem]">
            <h3 className="font-bold mb-[1rem]">Initiatives</h3>
            <div>
              {initiatives.map((link, i) => {
                return (
                  <Fragment key={i}>
                    <Link className="block font-light my-2 lg:my-[0.8rem]" href={link.link}>
                      {link.linkName}
                    </Link>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className=" w-full lg:w-[25%] py-0 lg:py-[2rem]">
            <h3 className="font-bold mb-[1rem] ">About Us</h3>
            <div>
              {aboutlinks.map((link, i) => {
                return (
                  <Fragment key={i}>
                    <Link className="block font-light my-2 lg:my-[0.8rem]" href={link.link}>
                      {link.linkName}
                    </Link>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className=" w-full lg:w-[25%] py-0 lg:py-[2rem]">
            <h3 className="font-bold mb-[1rem]">More</h3>
            <div>
              {morelinks.map((link, i) => {
                return (
                  <Fragment key={i}>
                    <Link className="block font-light my-2 lg:my-[0.8rem]" href={link.link}>
                      {link.linkName}
                    </Link>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[20%] border-t-[1px] lg:border-l-[1px] border-gray-600 py-[2rem] px-0 lg:px-[2rem]">
          <h3 className="font-bold mb-[1rem]">Locations</h3>
          <div>
            {locations.map((location, i) => {
              return (
                <Fragment key={i}>
                  <li className="block font-light my-2 lg:my-[0.8rem]">{location}</li>
                </Fragment>
              );
            })}
          </div>
          <div className="flex gap-5 mt-10 lg:mt-[3rem]">
            <Image className="w-[40%]" src={"/accurateBus.svg"} width={200} height={200} />
            <Image className="w-[30%]" src={"/whatsapp.svg"} width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
