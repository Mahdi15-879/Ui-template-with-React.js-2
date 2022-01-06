import React from "react";

import Heading from "./Heading";

import "./styles/About.css";

const About = () => {
  return (
    <div className="About">
      <Heading
        headingClass="Heading-primary"
        title="What we are passionate about"
        des="is were we can help you"
      />

      <div className="About-cards">
        <div className="Card-item">
          <h3>ABC OF STRATEGY</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            eget magna fermentum iaculis eu. Ut venenatis tellus in metus
            vulputate eu scelerisque. Dictum fusce ut placerat orci nulla
            pellentesque dignissim.
          </p>
          <a href="#">learn more</a>
        </div>
        <div className="Card-item-2">
          <h3>AWARD WINNING MARKETING</h3>
          <p>
            Dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Justo eget magna
            fermentum iaculis eu. Ut venenatis tellus in metus vulputate eu
            scelerisque.
          </p>
          <a href="#">learn more</a>
        </div>
        <div className="Card-item">
          <h3>DESIGN & PRODUCTION</h3>
          <p>
            Ut venenatis tellus in metus vulputate eu scelerisque. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Justo eget magna
            fermentum iaculis eu. Dictum fusce ut placerat orci nulla
            pellentesque dignissim.
          </p>
          <a href="#">learn more</a>
        </div>
      </div>
    </div>
  );
};

export default About;
