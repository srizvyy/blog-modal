import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="App">
      <h1>click on the button to open the modal.</h1>
      
      <button onClick={toggleModal} className="openModalBtn">Open</button>

      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default App;
