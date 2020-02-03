import React from "react";
import Aux from "../../../hoc/Aux";
import _ from "lodash";

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        {_.upperFirst(key)} : {props.ingredients[key]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order Total: {props.totalPrice}</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
    </Aux>
  );
};

export default orderSummary;
