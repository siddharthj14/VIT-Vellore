import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [style, setStyle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setStyle(true) : setStyle(false);
    });
  }, []);

  return (
    <nav className={"container " + (style && "nav-bg")}>
      <img src={logo} alt="VIT Logo" className="logo"></img>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
