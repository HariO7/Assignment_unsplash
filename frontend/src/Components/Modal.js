import { Box } from "@mui/material";
import React, { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
import PhotoForm from "./PhotoForm";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <Box
        sx={{
          width: 300,
          height: 300,
        }}
      >
        <PhotoForm />
      </Box>
    </div>
  );
};

function Modal() {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
}

export default Modal;
