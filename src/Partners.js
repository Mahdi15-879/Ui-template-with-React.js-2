import React from "react";

import Heading from "./Heading";

import "./styles/Partners.css";

const Partners = () => {
  return (
    <div className="Partners">
      <Heading
        headingClass="Heading-primary"
        title="Partners"
        des="great companies we work with"
      />

      <div className="Partners-body">
        <div className="Partners__col-1">
          <div>
            <a href="https://kriesi.at/">
              <img src={require("./img/bbpress-mini.png")} alt="Partner" />
            </a>
          </div>

          <div>
            <a href="https://kriesi.at/">
              <img src={require("./img/events-mini.png")} alt="Partner" />
            </a>
          </div>

          <div>
            <a href="https://kriesi.at/">
              <img src={require("./img/layerslider-mini.png")} alt="Partner" />
            </a>
          </div>

          <div>
            <a href="https://kriesi.at/">
              <img src={require("./img/wpseo-yoast-mini.png")} alt="Partner" />
            </a>
          </div>

          <div>
            <a href="https://kriesi.at/">
              <img src={require("./img/woo-mini.png")} alt="Partner" />
            </a>
          </div>
        </div>

        <div className="Partners__col-2">
          <div>
            <a href="https://kriesi.at/">
              <img src={require("./img/revolution-mini.png")} alt="Partner" />
            </a>
          </div>

          <div>
            <a href="https://kriesi.at/">
              <img src={require("./img/mailchimp-mini.png")} alt="Partner" />
            </a>
          </div>

          <div>
            <a href="https://kriesi.at/">
              <img src={require("./img/wpml-mini.png")} alt="Partner" />
            </a>
          </div>

          <div>
            <a href="https://kriesi.at/">
              <img src={require("./img/gravityforms-mini.png")} alt="Partner" />
            </a>
          </div>

          <div>
            <a href="https://kriesi.at/">
              <img src={require("./img/envato.png")} alt="Partner" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
