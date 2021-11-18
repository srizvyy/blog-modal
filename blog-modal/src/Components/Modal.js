import React from "react";
import "./Modal.css";

function Modal({ setIsModalOpen }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Hello World</h1>
        </div>
        <div className="body">
         
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setIsModalOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Modal;