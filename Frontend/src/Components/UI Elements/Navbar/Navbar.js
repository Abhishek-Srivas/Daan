import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../../assets/logo.svg";
import { ButtonFill, ButtonOutline } from "../Buttons/Buttons";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = (event) => {
    if (window.scrollY < 50 && scrolling === true) {
      setScrolling(false);
    } else if (window.scrollY > 50 && scrolling !== true) {
      setScrolling(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className="nav"
      style={{
        background: scrolling ? "#ffffff" : "none",
        boxShadow: scrolling ? "inset 0px -1px 0px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div>
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
          <span>Daan</span>
        </Link>
      </div>
      <div className="navlinks">
        <Link
          to="#about"
          className={scrolling ? "navlink-solid" : "navlink-outline"}
        >
          About
        </Link>
        <Link
          to="#contact"
          className={scrolling ? "navlink-solid" : "navlink-outline"}
        >
          Contact
        </Link>
        <Link to="/">
          <ButtonFill
            change="true"
            borderWidth="1px"
            fontSize="1rem"
            width="auto"
            padding="0.5rem 1.5rem"
          >
            Signup
          </ButtonFill>
        </Link>
        <Link to="/">
          <ButtonOutline
            change="true"
            borderWidth="1px"
            fontSize="1rem"
            width="auto"
            padding="0.5rem 1.5rem"
          >
            Login
          </ButtonOutline>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
