import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-[#212121] mt-[5rem] lg:mt-[10rem]">
      <div className="w-full lg:w-[80%] mx-auto py-10 lg:py-[5rem] px-5 lg:px-0">
        <div className="text-white w-full lg:w-[50%]">
          <h1 className="text-3xl lg:text-5xl ">Newsletter</h1>
          <p className="my-5 text-sm lg:text-[16px]">
            Get the latest about SINC Partners, our startup Incubator program, Portfolio company
            offerings - straight into your inbox.
          </p>
          <div className="w-full lg:w-[75%] border-[1px] border-white rounded-[2rem] mt-10 lg:mt-[3rem]">
            <input
              type="text"
              placeholder="Enter your email address"
              className=" bg-transparent p-2 w-[70%] rounded-[2rem] "
            />
            <button className="w-[30%] bg-white text-black p-2 rounded-[2rem] font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
