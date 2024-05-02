import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Signup = ({ handleChange, handleSignup }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="signup" style={{ padding: "2em" }}>
      <button onClick={openModal}>Sign Up</button>
      <Modal
        className={"modal"}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Parent"
      >
        <form style={{ display: "flex", flexDirection: "column" }}>
          <h2>Sign Up As A Parent</h2>
          <label>First Name</label>
          <input onChange={(e) => handleChange("first", e.target.value)} />
          <label>Last Name</label>
          <input onChange={(e) => handleChange("last", e.target.value)} />
          <label>Email</label>
          <input onChange={(e) => handleChange("email", e.target.value)} />
          <label>Password</label>
          <input
            onChange={(e) => handleChange("password", e.target.value)}
            type="password"
          />
          <button
            style={{ margin: "1em", width: "9em" }}
            type="button"
            onClick={handleSignup}
          >
            Sign Up!
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Signup;
