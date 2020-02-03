import React from "react";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className="BuildControls">
    <p>
      <strong>Total Price: {props.totalPrice}</strong>
    </p>
    {controls.map(ctrl => {
      return (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          addIngredients={() => props.addIngredients(ctrl.type)}
          removeIngredients={() => props.removeIngredientsHandler(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      );
    })}
    <button className="OrderButton" disabled={props.orderDisabled}>
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
