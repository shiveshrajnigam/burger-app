import React from "react";

const buildControl = props => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button
      className="Less"
      onClick={props.removeIngredients}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className="More" onClick={props.addIngredients}>
      More
    </button>
  </div>
);

export default buildControl;
