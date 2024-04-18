import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
import { useRef } from "react";

const Navbar = () => {
  const [style, setStyle] = useState(false);
  const menuRef = useRef();
  let menu = false;
  const toggleMenu = () => {
    menu = !menu;
    if (menu) {
      menuRef.current.style.right = "0px";
    } else {
      menuRef.current.style.right = "-200px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setStyle(true) : setStyle(false);
    });
  }, []);

  return (
    <nav className={"container " + (style && "nav-bg")}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={logo} alt="VIT Logo" className="logo" />
      </Link>
      <ul className="hide-mobile-menu" ref={menuRef}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Contact us
            </Link>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
