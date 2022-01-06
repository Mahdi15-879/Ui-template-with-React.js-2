import React from "react";

import Navbar from "./Navbar";

import "./styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <Navbar />
      <div className="Header-body">
        <h1>A Full-Service Event Agency</h1>
        <h5>we truly think of everything</h5>
      </div>
    </div>
  );
};

export default Header;
