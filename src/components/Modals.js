import React from "react";
import ReactDOM from "react-dom";
import "../stylesheets/modals.css";
import { RxCross2 } from "react-icons/rx";

export default function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay__container" />
      <div className="modal__container">
        <button className="close-btn" onClick={onClose}>
          <RxCross2 />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
}
