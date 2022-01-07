import React from "react";

import Heading from "./Heading";

import "./styles/Services.css";

const Services = () => {
  return (
    <div className="Services" id="services">
      <Heading
        headingClass="Heading-secondary"
        title="Services"
        des="the cool stuff we can do for you"
      />

      <div className="Services-items">
        <div className="card">
          <div className="card__side card__side--front">
            <i class="fas fa-eye fa-2x"></i>
            <h3>Advertising</h3>
            <h4>make your event visible</h4>
          </div>
          <div className="card__side card__side--back">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__side card__side--front">
            <i class="fas fa-tag fa-2x"></i>
            <h3>Brand Design</h3>
            <h4>make your brand stand out</h4>
          </div>
          <div className="card__side card__side--back">
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec,
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis
              enim.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__side card__side--front">
            <i class="far fa-clipboard fa-2x"></i>
            <h3>Event Planing</h3>
            <h4>plan an awesome event</h4>
          </div>
          <div className="card__side card__side--back">
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer
              tincidunt.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__side card__side--front">
            <i class="fas fa-home fa-2x"></i>
            <h3>Location Scouting</h3>
            <h4>because finding the best spot is important</h4>
          </div>
          <div className="card__side card__side--back">
            <p>
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
              feugiat a, tellus.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__side card__side--front">
            <i class="fab fa-facebook-square fa-2x"></i>
            <h3>Social Media</h3>
            <h4>use the power of viral marketing</h4>
          </div>
          <div className="card__side card__side--back">
            <p>
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in, viverra quis, feugiat a, tellus. Cras dapibus. Vivamus
              elementum semper nisi.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card__side card__side--front">
            <i class="far fa-lightbulb fa-2x"></i>
            <h3>Event Analysis</h3>
            <h4>Past event data analysis</h4>
          </div>
          <div className="card__side card__side--back">
            <p>
              Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
              eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
              feugiat a, tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
