import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../../assets/logo.svg";
import { ButtonFill, ButtonOutline } from "../Buttons/Buttons";

const Navbar = () => {
  return (
    <nav
      className="nav"
      style={{
        background: "#ffffff",
        boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
        <Link to="/" className="logo">
          <img src={Logo} alt="logo" />
          <span>Daan</span>
        </Link>
      </div>
      <div className="navlinks">
        <Link to="/">
          <ButtonFill>Signup</ButtonFill>
        </Link>
        <Link to="/">
          <ButtonOutline>Login</ButtonOutline>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarSolid;
