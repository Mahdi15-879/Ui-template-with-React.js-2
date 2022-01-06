import React from "react";

import Heading from "./Heading";

import "./styles/Team.css";

const Team = () => {
  return (
    <div className="Team">
      <Heading
        headingClass="Heading-primary"
        title="Meet the team"
        des="the people behind the events"
      />

      <div className="Team__members">
        <div className="Team__head">
          <span>
            <div>
              <img
                src={require("./img/desat-boy-m10.jpg")}
                alt="Team member"
                width="100%"
                height="100%"
              />
            </div>
            <h3>Matt Willis</h3>
            <h4>Co-Founder CEO</h4>
          </span>

          <span>
            <div>
              <img
                src={require("./img/desat-girl-m5.jpg")}
                alt="Team member"
                width="100%"
                height="100%"
              />
            </div>
            <h3>Marla Gregg</h3>
            <h4>Co-Founder CTO</h4>
          </span>
        </div>

        <div className="Team__body">
          <span>
            <div>
              <img
                src={require("./img/desat-boy-m4.jpg")}
                alt="Team member"
                width="100%"
                height="100%"
              />
            </div>
            <h3>Jay Smith</h3>
            <h4>Design</h4>
          </span>

          <span>
            <div>
              <img
                src={require("./img/desat-girl-m13.jpg")}
                alt="Team member"
                width="100%"
                height="100%"
              />
            </div>
            <h3>Olivia Miles</h3>
            <h4>Events</h4>
          </span>

          <span>
            <div>
              <img
                src={require("./img/desat-boy-m1.jpg")}
                alt="Team member"
                width="100%"
                height="100%"
              />
            </div>
            <h3>Brandon Perry</h3>
            <h4>Events</h4>
          </span>

          <span>
            <div>
              <img
                src={require("./img/desat-girl-m15.jpg")}
                alt="Team member"
                width="100%"
                height="100%"
              />
            </div>
            <h3>Vanessa Silk</h3>
            <h4>Support</h4>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Team;
