import React from "react";

import "./styles/Philosophy.css";

const Philosophy = () => {
  return (
    <div className="Philosophy">
      <div className="container">
        <div className="Philosophy__col-left">
          <h1>Our Philosophy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            eget magna fermentum iaculis eu. Ut venenatis tellus in metus
            vulputate eu scelerisque. Dictum fusce ut placerat orci nulla
            pellentesque dignissim.
          </p>
          <a href="#">learn more</a>
        </div>

        <div className="Philosophy__col-right">
          <img
            src={require("./img/backdrop-team.png")}
            alt="Banner"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
