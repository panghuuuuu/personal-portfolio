import React, { useState } from "react";
import Modal from "./Modals";
import "../stylesheets/works.css";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const Works = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="works">
      <div className={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {" "}
          Fancy Modal
        </Modal>
      </div>
    </section>
  );
};

export default Works;
