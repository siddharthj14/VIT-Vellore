import React from "react";

const Card = (props) => {
  return (
    <div className="program">
      <img src={props.programSrc} alt={props.caption}></img>
      <div className="caption">
        <img src={props.iconSrc}></img>
        <p>{props.caption}</p>
      </div>
    </div>
  );
};

export default Card;
