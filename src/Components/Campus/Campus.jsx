import React from "react";
import "./Campus.css";
import gallery1 from "../../assets/gallery-1.jpg";
import gallery2 from "../../assets/gallery-2.jpg";
import gallery3 from "../../assets/gallery-3.jpg";
import gallery4 from "../../assets/gallery-4.jpg";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery1}></img>
        <img src={gallery2}></img>
        <img src={gallery3}></img>
        <img src={gallery4}></img>
      </div>
      <button className="btn dark-btn">See more here →</button>
    </div>
  );
};

export default Campus;
