import React from "react";

const button = props => (
  <button
    onClick={props.clicked}
    className={["Button", props.classes].join(" ")}
  >
    {props.children}
  </button>
);

export default button;
