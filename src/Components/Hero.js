import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex bg-white">
      <aside className="w-1/2 flex items-center justify-center">
        <div className="w-[60%]">
          <div className=" font-bold text-2xl leading-[2]">
            SINC Partners is a service incubation company{" "}
          </div>
          <div className="leading-[2] text-xl mb-6">
            Connecting experts in product development and growth marketing willing to offer their
            services to amazing startups in exchange for minute equity (usually 0.5% to 2%).
          </div>
          <Link className="bg-[#303030] py-3 px-6 rounded-[25px] text-sm text-white" href={"/sinc"}>
            SINC With Us
          </Link>
        </div>
      </aside>
      <Image className="w-1/2" src={"/Hero.png"} height={500} width={500} />
    </div>
  );
};

export default Hero;
