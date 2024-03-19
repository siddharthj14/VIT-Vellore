import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="title">
      <p>{props.heading}</p>
      <h2>{props.subheading}</h2>
    </div>
  );
};

export default Title;
