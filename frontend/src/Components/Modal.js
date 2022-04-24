import React from "react";
import classes from "./Modals.module.css";

function Modal() {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
  };

  return <div>Modal</div>;
}

export default Modal;
