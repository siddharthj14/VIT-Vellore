import React from "react";
import "./Hero.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Transforming life through excellence in education and research</h1>
        <p>
          Welcome to our institution where excellence, ethics, and critical
          thinking converge to empower lives. We drive research, foster
          impactful individuals, collaborate for economic growth, and serve with
          compassion. Join us in shaping a better world.
        </p>
        <button className="btn">Explore More →</button>
      </div>
    </div>
  );
};

export default Hero;
