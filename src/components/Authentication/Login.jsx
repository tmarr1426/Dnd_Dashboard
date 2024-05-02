import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

// Login function checks the information stored in the input fields against the databse information and logs in a user if it is valid.
const Login = ({ handleChange, handleLogin }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="login" style={{ padding: "2em" }}>
      <button onClick={openModal}>Login</button>
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login"
      >
        <form style={{ display: "flex", flexDirection: "column" }}>
          <h2>Login</h2>
          <label>Email</label>
          <input onChange={(e) => handleChange("email", e.target.value)} />
          <label>Password</label>
          <input
            onChange={(e) => handleChange("password", e.target.value)}
            type="password"
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{ margin: "1em", width: "9em" }}
              type="button"
              onClick={handleLogin}
            >
              Log In!
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
