import React, { Fragment } from "react";
import { news } from "./mockData";
import Image from "next/image";

const News = () => {
  return (
    <div className="w-[100%] mx-auto mt-[10rem] mb-[5rem]">
      <h3 className="font-bold text-2xl text-center">As Featured In</h3>
      <div className="flex gap-5 shadow">
        {news.map((info, i) => {
          return (
            <Fragment key={i}>
              <aside className="flex">
                <Image className="w-[60%]" src={info.image} width={500} height={500} />
                <div className="w-[40%] p-3">
                  <Image className="w-[20%]" src={info.icon} height={200} width={200} />
                  <h2 className="font-semibold my-2">{info.title}</h2>
                  <p className="text-sm">{info.content}</p>
                  <div>
                    <p>REPORTED BY:</p>
                    <p>{info.reporter}</p>
                  </div>
                </div>
              </aside>
            </Fragment>
          );
        })}
      </div>
      <div className="w-[60%] mx-auto text-center font-semibold text-6xl leading-[1.5] mt-[5rem] mb-[1rem]">
        Let's build companies that help everyone succeed
      </div>
      <div className="flex justify-center gap-5">
        <button className="bg-white rounded-[2rem] text-black py-3 px-6 my-2 border-[1px] border-black">
          View More
        </button>
        <button className="bg-[#303030] rounded-[2rem] text-white py-3 px-6 my-2">View More</button>
      </div>
    </div>
  );
};

export default News;
