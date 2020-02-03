import React from "react";

const backdrop = props =>
  props.show ? <div className="Backdrop" onClick={props.close}></div> : null;

export default backdrop;
