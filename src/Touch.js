import React from "react";

import Heading from "./Heading";

import "./styles/Touch.css";

const Touch = () => {
  return (
    <div className="Touch" id="touch">
      <Heading
        headingClass="Heading-primary"
        title="Get in touch"
        des="we would love to hear from you"
      />

      <div className="Touch-body">
        <div className="Touch__col-left">
          <p>(555) 555 555</p>
          <a href="#">YOU@EMAIL.COM</a>
          <a href="#">FACEBOOK</a>
          <a href="#">TWITTER</a>
          <h3>OFFICE LOCATION:</h3>
          <p>
            123 KINGSTREET
            <br />
            MELBOURNE VICTORIA 3000
            <br />
            AUSTRALIA
          </p>
        </div>
        <div className="Touch__col-right">
          <form>
            <input type="text" placeholder="NAME*" />
            <input type="email" placeholder="EMAIL*" />
            <textarea placeholder="MESSAGE*" />
          </form>
          <a href="#">send</a>
        </div>
      </div>
    </div>
  );
};

export default Touch;
