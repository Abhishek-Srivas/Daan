import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../../assets/logo.svg";
import { ButtonFill, ButtonOutline } from "../Buttons/Buttons";
import LoginModal from "../../Auth/LoginModal";
import SignupModal from "../../Auth/SignupModal";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

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
    <React.Fragment>
      <nav
        className="nav"
        style={{
          background: scrolling ? "#ffffff" : "none",
          boxShadow: scrolling
            ? "inset 0px -1px 0px rgba(0, 0, 0, 0.1)"
            : "none",
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
          <ButtonFill
            borderWidth="1px"
            fontSize="1rem"
            width="auto"
            padding="0.5rem 1.5rem"
            onClick={() => setOpenSignup(true)}
          >
            Signup
          </ButtonFill>

          <ButtonOutline
            borderWidth="1px"
            fontSize="1rem"
            width="auto"
            padding="0.5rem 1.5rem"
            onClick={() => setOpenLogin(true)}
          >
            Login
          </ButtonOutline>
        </div>
      </nav>
      <LoginModal show={openLogin} onHide={() => setOpenLogin(false)} />
      <SignupModal show={openSignup} onHide={() => setOpenSignup(false)} />
    </React.Fragment>
  );
};

export default Navbar;
