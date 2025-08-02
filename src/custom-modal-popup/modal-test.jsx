import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModleTest() {
  const [showModelPopup, setShowModelPopup] = useState(false);

  function handleToggelModelPopup() {
    setShowModelPopup(!showModelPopup);
  }

  function onClose() {
    setShowModelPopup(false);
  }

  return (
    <div className="model-test">
      <button onClick={handleToggelModelPopup}>Open Model Popup</button>
      {showModelPopup && (
        <Modal
          id={"custom-id"}
          header={<h1>Costomized Header</h1>}
          footer={<h1>Costomized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
}
