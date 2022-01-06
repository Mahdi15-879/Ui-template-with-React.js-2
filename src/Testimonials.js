import React from "react";

import Heading from "./Heading";
import Slider from "./Slider";

import "./styles/Testimonials.css";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <Heading
        headingClass="Heading-primary"
        title="Testimonials"
        des="what our clients say"
      />

      <Slider />
    </div>
  );
};

export default Testimonials;
