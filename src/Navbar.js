import React from "react";

import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img
        src={require("./img/logo.png")}
        alt="Logo"
        width="100%"
        height="100%"
      />

      <ul>
        <li>
          <a href="#">work</a>
        </li>
        <li>
          <a href="#">services</a>
        </li>
        <li>
          <a href="#">team</a>
        </li>
        <li>
          <a href="#">philosophy</a>
        </li>
        <li>
          <a href="#">portfolio</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
