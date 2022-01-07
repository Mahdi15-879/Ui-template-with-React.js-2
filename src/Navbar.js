import React from "react";

import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-img">
        <img
          src={require("./img/logo.png")}
          alt="Logo"
          width="100%"
          height="100%"
        />
      </div>

      <div className="Navbar-list">
        <ul>
          <li>
            <a href="#about">work</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#team">team</a>
          </li>
          <li>
            <a href="#philosophy">philosophy</a>
          </li>
          <li>
            <a href="#events">portfolio</a>
          </li>
          <li>
            <a href="#touch">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
