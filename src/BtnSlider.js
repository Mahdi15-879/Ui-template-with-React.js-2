import React from "react";

import "./styles/Slider.css";

import leftChevron from "./icons/chevron-left.svg";
import rightChevron from "./icons/chevron-right.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightChevron : leftChevron} />
    </button>
  );
}
