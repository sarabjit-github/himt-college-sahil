import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="header-container">
        <header>
          <Link to="/" className="logo">
            <img src={logo} alt="logo img" />
            <span>HIMT</span>
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
      </div>
    </>
  );
};
