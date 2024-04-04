import React from "react";
import "./PhotographyTipCard.css";

const PhotographyTipCard = (props) => {
  return (
    <div className="cards container mx-auto">
      <div className="photography-tip-card mt-10">
        <img src={props.tipimg} alt={props.tip} />
        <h3 className="text-center text-lg mt-5 font-semibold text-[#2ecc71]">
          {props.tip}
        </h3>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
        <p>{props.p4}</p>
        <p>{props.p5}</p>
        <div className="time">
          <i class="fa-regular fa-clock"></i> {props.time}
        </div>
      </div>
    </div>
  );
};

export default PhotographyTipCard;
