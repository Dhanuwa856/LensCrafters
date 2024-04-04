import React, { useState } from "react";
import "./PhotographyTip.css";
import Photo_top from "../../assets/tips-top.webp";
import PhotographyTipCard from "../PhotographyTipCard/PhotographyTipCard";
import all_tips from "../../assets/Tip";

const PhotographyTip = () => {
  // State to track the visibility of additional tips
  const [showMore, setShowMore] = useState(false);

  // Define the number of default tips to display
  const defaultTipCount = 6;

  // Slice the array of tips based on visibility
  const visibleTips = showMore ? all_tips : all_tips.slice(0, defaultTipCount);

  return (
    <div className="photography-tip container mx-auto mt-20">
      <img src={Photo_top} alt="" className="w-1/4 mx-auto block" />
      <div className="tip-wrapper">
        {visibleTips.map((item, i) => (
          <PhotographyTipCard
            key={i}
            tip={item.tip}
            p1={item.p01}
            p2={item.p02}
            p3={item.p03}
            p4={item.p04}
            p5={item.p05}
            time={item.time}
            tipimg={item.tip_image}
          />
        ))}
      </div>
      {!showMore && (
        <div className="tip-btn">
          <button
            onClick={() => setShowMore(true)}
            className="mt-10 block mx-auto bg-[#2ecc71] text-white py-2 px-5 font-medium capitalize rounded-3xl hover:bg-[#c9e622] duration-500"
          >
            Explore more
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotographyTip;
