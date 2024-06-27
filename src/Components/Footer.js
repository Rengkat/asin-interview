import Image from "next/image";
import React, { Fragment } from "react";
import { aboutlinks, initiatives, locations, morelinks, platformlinks } from "./mockData";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#212121] border-t-[1px] border-gray-500">
      <div className="w-[80%] mx-auto text-white flex justify-between">
        <div className="w-[20%] py-[2rem]">
          <Image className="w-[50%]" src={"/blackLogo.svg"} width={200} height={200} />
          <p className="py-2 leading-[1.5] font-light pr-2 text-sm">
            SINC Partners is a service incubation company connecting experts in product development
            and growth marketing willing to offer their services to amazing startups in exchange
            for minute equity (usually 0.5% to 2%)
          </p>
        </div>
        <div className="w-[60%] flex justify-between">
          <div className="w-[25%] py-[2rem]">
            <h3 className="font-bold mb-[1rem]">Platforms</h3>
            <div>
              {platformlinks.map((link, i) => {
                return (
                  <Fragment key={i}>
                    <Link className="block font-light my-[0.8rem]" href={link.link}>
                      {link.linkName}
                    </Link>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="w-[25%] py-[2rem]">
            <h3 className="font-bold mb-[1rem]">Initiatives</h3>
            <div>
              {initiatives.map((link, i) => {
                return (
                  <Fragment key={i}>
                    <Link className="block font-light my-[0.5rem]" href={link.link}>
                      {link.linkName}
                    </Link>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="w-[25%] py-[2rem]">
            <h3 className="font-bold mb-[1rem] ">About Us</h3>
            <div>
              {aboutlinks.map((link, i) => {
                return (
                  <Fragment key={i}>
                    <Link className="block font-light my-[0.5rem]" href={link.link}>
                      {link.linkName}
                    </Link>
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="w-[25%] py-[2rem]">
            <h3 className="font-bold mb-[1rem]">More</h3>
            <div>
              {morelinks.map((link, i) => {
                return (
                  <Fragment key={i}>
                    <Link className="block font-light my-[0.5rem]" href={link.link}>
                      {link.linkName}
                    </Link>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[20%] border-l-[1px] border-gray-600 py-[2rem] px-[2rem]">
          <h3 className="font-bold mb-[1rem]">Locations</h3>
          <div>
            {locations.map((location, i) => {
              return (
                <Fragment key={i}>
                  <li className="block font-light my-[0.5rem]">{location}</li>
                </Fragment>
              );
            })}
          </div>
          <div className="flex gap-5 mt-[3rem]">
            <Image src={"/accurateBus.svg"} width={200} height={200} />
            <Image src={"/whatsapp.svg"} width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
