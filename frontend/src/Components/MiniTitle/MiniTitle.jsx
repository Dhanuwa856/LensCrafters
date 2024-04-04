import React from "react";
import "./MiniTitle.css";

const MiniTitle = (props) => {
  return (
    <div className="mini-title">
      <h2 className="py-10 text-center font-bold text-[#2ecc71] capitalize tracking-widest w-fit relative mx-auto">
        {props.MiniTitle}
      </h2>
    </div>
  );
};

export default MiniTitle;
