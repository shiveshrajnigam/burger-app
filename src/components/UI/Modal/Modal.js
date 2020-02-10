import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.openModal !== this.props.openModal;
  }

  // componentWillUpdate() {
  //   console.log("[Modal.js] will update");
  // }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.openModal} close={this.props.close} />
        <div
          className="Modal"
          style={{
            transform: this.props.openModal
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.openModal ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
