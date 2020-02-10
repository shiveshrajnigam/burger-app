import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import _ from "lodash";
import Button from "../../UI/Button/Button";

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
      <p>Continue to checkout?</p>
      <Button classes="Danger" clicked={props.cancel}>
        CANCEL
      </Button>
      <Button classes="Success" clicked={props.checkout}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
