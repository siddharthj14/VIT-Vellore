import React from "react";

const Card = (props) => {
  return (
    <div className="slide">
      <div className="user-info">
        <img src={props.userImg}></img>
        <div>
          <h3>{props.name}</h3>
          <span>{props.address}</span>
        </div>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
