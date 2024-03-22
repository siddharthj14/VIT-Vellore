import React from "react";
import "./About.css";
import play_icon from "../../assets/play-icon.png";
import about from "../../assets/about.jpg";

const About = (props) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about} className="about-img"></img>
        <img
          src={play_icon}
          className="play-icon"
          onClick={() => {
            props.setPlayState(true);
          }}
        ></img>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Empowering Minds, Inspiring Futures</h2>
        <p>
          VIT was established with the aim of providing quality higher education
          on par with international standards. It persistently seeks and adopts
          innovative methods to improve the quality of higher education on a
          consistent basis. The campus has a cosmopolitan atmosphere with
          students from all corners of the globe.
        </p>
        <p>
          Experienced and learned teachers are strongly encouraged to nurture
          the students. The global standards set at VIT in the field of teaching
          and research spur us on in our relentless pursuit of excellence. In
          fact, it has become a way of life for us.
        </p>
      </div>
    </div>
  );
};

export default About;
