import React from "react";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <Aux>
    <Backdrop show={props.openModal} close={props.close} />>
    <div
      className="Modal"
      style={{
        transform: props.openModal ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.openModal ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
