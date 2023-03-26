import React from "react";
import ReactDOM from "react-dom";
const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "black",
  padding: "50px",
  zIndex: 1000,
};
const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
};
export default function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLE} />
      <div style={MODAL_STYLE}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
