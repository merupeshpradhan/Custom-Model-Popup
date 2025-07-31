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
        <Modal onClose={onClose} body={<div>Customized body</div>} />
      )}
    </div>
  );
}
