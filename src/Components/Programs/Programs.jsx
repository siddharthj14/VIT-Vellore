import React from "react";
import Card from "./Card";
import "./Programs.css";
import program1 from "../../assets/program-1.jpg";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import icon1 from "../../assets/program-icon-1.png";
import icon2 from "../../assets/program-icon-2.png";
import icon3 from "../../assets/program-icon-3.png";

const programs = () => {
  return (
    <div className="programs">
      <Card programSrc={program1} caption="Graduation Degree" iconSrc={icon1} />
      <Card programSrc={program2} caption="Masters Degree" iconSrc={icon2} />
      <Card programSrc={program3} caption="Post Graduation" iconSrc={icon3} />
    </div>
  );
};

export default programs;
