import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import {
  Auth,
  Login,
  Singup,
  Add,
  Dashboard,
  Campaign,
  Campaign_Form,
  Player_Dashboard,
  CharacterNotes,
  Nav,
  Upload,
  CampaignNotes,
  Characters,
  NPCs,
  Tag,
} from "./index";

function App() {
  const [sessionToken, setSessionToken] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("MyToken")) {
      setSessionToken(localStorage.getItem("MyToken"));
    }
  }, []);

  // Sets the Token for the user session in the localstorage of the website.
  const updateToken = (token) => {
    console.log("Token Updated");
    localStorage.setItem("MyToken", token);
    setSessionToken(token);
  };

  // Clears the Token in the local storage so a new user can sign on.
  const clearToken = () => {
    console.log("Token Cleared");
    localStorage.removeItem("MyToken");
    setSessionToken("");
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <>
      {!sessionToken && (
        <>
          <div>
            <Routes>
              <Route path="/" element={<Auth updateToken={updateToken} />} />
              <Route
                path="/home"
                element={<Auth updateToken={updateToken} />}
              />
            </Routes>
          </div>
        </>
      )}
      {sessionToken && (
        <>
          <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <Nav clearToken={clearToken} />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/campaign-notes" element={<CampaignNotes />} />
            <Route path="/character-notes" element={<CharacterNotes />} />
            <Route path="/campaign_form" element={<Campaign_Form />} />
            <Route path="/add" element={<Add />} />
          </Routes>
          <Tag></Tag>
          <NPCs></NPCs>
          <Upload></Upload>
        </div>
      </div>
        </>
      )}
      
    </>
  );
}

export default App;
