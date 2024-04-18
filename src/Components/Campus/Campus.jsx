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
        <img src={gallery1} alt="Gallery 1"></img>
        <img src={gallery2} alt="Gallery 2"></img>
        <img src={gallery3} alt="Gallery 3"></img>
        <img src={gallery4} alt="Gallery 4"></img>
      </div>
    </div>
  );
};

export default Campus;
