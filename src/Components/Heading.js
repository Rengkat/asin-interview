import React from "react";

const Heading = ({ heading, subHeading }) => {
  return (
    <div>
      <h1 className="text-2xl lg:text-4xl text-center w-[75%] lg:w-[40%] mx-auto font-bold leading-[1.5]">
        {heading}
      </h1>
      <p className="w-[90%] lg:w-[60%] mx-auto text-center">{subHeading}</p>
    </div>
  );
};

export default Heading;
