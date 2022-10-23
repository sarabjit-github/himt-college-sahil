import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="header-container">
        <header>
          <NavLink end to="/" className="logo">
            <img src={logo} alt="logo img" />
            <span>HIMT</span>
          </NavLink>
          <nav>
            <NavLink end to="/">Home</NavLink>
            <NavLink end to="/gallery">Gallery</NavLink>
            <NavLink end to="/about">About</NavLink>
          </nav>
        </header>
      </div>
    </>
  );
};
