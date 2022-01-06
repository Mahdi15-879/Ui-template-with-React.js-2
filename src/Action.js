import React from "react";

import "./styles/Action.css";

const Action = () => {
  return (
    <div className="Action">
      <div className="Action-container">
        <iframe
          src="https://www.youtube.com/embed/Dbgy4dPf7R4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="Action-des">
          <h1>In Action</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            eget magna fermentum iaculis eu.
          </p>
          <a href="#">learn more</a>
        </div>
      </div>
    </div>
  );
};

export default Action;
