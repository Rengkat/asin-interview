import React, { Fragment } from "react";
import { focusAreas } from "./mockData";
import Heading from "./Heading";

const FocusArea = () => {
  return (
    <div className="my-[5rem] w-[80%] mx-auto">
      <Heading
        heading={"Our Area of Focus"}
        subHeading={
          "In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab"
        }
      />

      <div className="flex mx-auto my-12">
        {focusAreas.map((card, i) => {
          return (
            <Fragment key={i}>
              <aside style={{ backgroundColor: card.color, padding: "1rem", color: "white" }}>
                <p>0{i + 1}</p>
                <p className="mt-12">{card.content}</p>
              </aside>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FocusArea;
