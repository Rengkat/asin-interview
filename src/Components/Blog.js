import React, { Fragment } from "react";
import Heading from "./Heading";
import { blogs } from "./mockData";
import Image from "next/image";
import MoreLink from "./MoreLink";

const Blog = () => {
  return (
    <div className="w-[80%] mx-auto mt-[10rem]">
      <Heading heading={"Blogs & Resources"} />
      <div className="flex justify-between gap-5 mt-[5rem]">
        {blogs.map((blog, i) => {
          return (
            <Fragment key={i}>
              <article className="">
                <Image src={blog.image} height={500} width={500} />
                <div className="py-5">
                  <h3 className="font-bold my-2">{blog.title}</h3>
                  <div className="flex gap-2">
                    <p>{blog.text}</p>
                    <Image src={blog.icon} height={200} width={200} />
                  </div>
                </div>
              </article>
            </Fragment>
          );
        })}
      </div>
      <MoreLink link={"/blogs"} text={"See More Blogs & Resources"} />
    </div>
  );
};

export default Blog;
