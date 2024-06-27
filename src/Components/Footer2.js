import Image from "next/image";
import React from "react";

const Footer2 = () => {
  return (
    <div className="w-full bg-[#212121] py-5 ">
      <div className="w-[80%] mx-auto flex text-white justify-between gap-5">
        <p className="text-xs font-light ">
          Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in
          early and SINC your guaranty!
        </p>
        <Image className="w-[30%]" src={"/lastlogo.svg"} width={200} height={200} />
      </div>
    </div>
  );
};

export default Footer2;
