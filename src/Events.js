import React from "react";

import Heading from "./Heading";

import "./styles/Events.css";

const Events = () => {
  return (
    <div className="Events" id="events">
      <Heading
        headingClass="Heading-primary"
        title="Latest Events"
        des="Some examples of our work"
      />

      <div className="Events-body">
        <div className="row">
          <div title="Advanced Training">
            <img src={require("./img/events-5-1030x687.jpg")} alt="Event" />
            <span className="Events-des">
              <h3>Advanced Training</h3>
              <p>Vel pharetra vel turpis nunc eget lorem dolor sed.</p>
            </span>
          </div>
          <div title="Cryptocurrency Expo">
            <img src={require("./img/events-4-1030x687.jpg")} alt="Event" />
            <span className="Events-des">
              <h3>Cryptocurrency Expo</h3>
              <p>
                Felis imperdiet proin fermentum leo vel orci porta non pulvinar.
              </p>
            </span>
          </div>
          <div title="Tangram Wedding">
            <img src={require("./img/events-8-1030x687.jpg")} alt="Event" />
            <span className="Events-des">
              <h3>Tangram Wedding</h3>
              <p>
                Felis imperdiet proin fermentum leo vel orci porta non pulvinar.
              </p>
            </span>
          </div>
          <div title="Cooking Course">
            <img src={require("./img/events-7-1030x687.jpg")} alt="Event" />
            <span className="Events-des">
              <h3>Cooking Course</h3>
              <p>Vel pharetra vel turpis nunc eget lorem dolor sed.</p>
            </span>
          </div>
        </div>
        <div className="row">
          <div title="Rock in Concert">
            <img src={require("./img/events-6-1030x687.jpg")} alt="Event" />
            <span className="Events-des">
              <h3>Rock in Concert</h3>
              <p>Vel pharetra vel turpis nunc eget lorem dolor sed.</p>
            </span>
          </div>
          <div title="Dj Stardust in Vegas">
            <img src={require("./img/events-3-1030x687.jpg")} alt="Event" />
            <span className="Events-des">
              <h3>Dj Stardust in Vegas</h3>
              <p>
                Felis imperdiet proin fermentum leo vel orci porta non pulvinar.
              </p>
            </span>
          </div>
          <div title="Company Workouts">
            <img src={require("./img/events-2-1030x687.jpg")} alt="Event" />
            <span className="Events-des">
              <h3>Company Workouts</h3>
              <p>
                Neque vitae tempus quam pellentesque. Odio pellentesque diam
                volutpat commodo sed egestas egestas.
              </p>
            </span>
          </div>
          <div title="University Gatherings">
            <img src={require("./img/events-1-1030x687.jpg")} alt="Event" />
            <span className="Events-des">
              <h3>University Gatherings</h3>
              <p>
                Neque vitae tempus quam pellentesque. Odio pellentesque diam
                volutpat commodo sed egestas egestas.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
