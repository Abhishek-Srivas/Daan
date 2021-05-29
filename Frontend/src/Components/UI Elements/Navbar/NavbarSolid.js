import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../../assets/logo.svg";
import { ButtonFill, ButtonOutline } from "../Buttons/Buttons";
import LoginModal from "../../Auth/LoginModal";
import SignupModal from "../../Auth/SignupModal";

const NavbarSolid = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <React.Fragment>
      <nav
        className="nav"
        style={{
          background: "#ffffff",
          boxShadow: "inset 0px -2px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div>
          <Link to="/" className="logo">
            <img src={Logo} alt="logo" />
            <span>Daan</span>
          </Link>
        </div>
        <div className="navlinks">
          <ButtonOutline
            borderWidth="1px"
            fontSize="1rem"
            width="auto"
            padding="0.5rem 1.5rem"
            onClick={() => setOpenLogin(true)}
          >
            Login
          </ButtonOutline>

          <ButtonFill
            borderWidth="1px"
            fontSize="1rem"
            width="auto"
            padding="0.5rem 1.5rem"
            onClick={() => setOpenSignup(true)}
          >
            Signup
          </ButtonFill>
        </div>
      </nav>
      <LoginModal show={openLogin} onHide={() => setOpenLogin(false)} />
      <SignupModal show={openSignup} onHide={() => setOpenSignup(false)} />
    </React.Fragment>
  );
};

export default NavbarSolid;
