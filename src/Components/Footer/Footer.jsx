import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>&copy; 2024 VIT Vellore. All rights reserved.</p>
        <ul>
          <li>Terms of Services</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer2">
        ~Made by{" "}
        <a href="https://siddharths-portfolio.vercel.app/">Siddharth Jain </a>
        (22BCE0743)
      </div>
    </>
  );
};

export default Footer;
