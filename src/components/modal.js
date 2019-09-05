import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  if (props.show) {
    return ReactDOM.createPortal(
      <div id={"modal"}>{"Temps écouler ! "}</div>,
      document.body
    );
  }
  return null;
}

export default Modal;
