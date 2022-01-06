import React from "react";

import "./styles/Heading.css";

const Heading = (props) => {
  return (
    <div className={props.headingClass}>
      <h1>{props.title}</h1>
      <p>{props.des}</p>
    </div>
  );
};

export default Heading;