import React, { useState } from "react";

const Dashboard = () => {
  const [characterName, setCharacterName] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [characterPortrait, setCharacterPortrait] = useState("");

  const handleChange = (state, value) => {
    switch (state) {
      case "Character":
        setCharacterName(value);
        break;
      case "Class":
        setCharacterClass(value);
        break;
      case "Player":
        setPlayerName(value);
        break;
      case "Portrait":
        setCharacterPortrait(value);
        break;
      default:
        console.log("Something when wrong");
    }
  };

  const handleSubmit = async () => {
    try {
      const charatcerResponse = await (
        await fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            character: characterName,
            class: characterClass,
            player: playerName,
            portrait: characterPortrait,
          }),
        })
      ).json();
      console.log(charatcerResponse);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        style={{ marginLeft: "15em", display: "flex", flexDirection: "column" }}
      >
        <form>
          <h2>Create a Character</h2>
          <label>Character Name</label>
          <input onChange={(e = handleChange("Character", e.target.value))} />
          <label>Character Class</label>
          <input onChange={(e = handleChange("Class", e.target.value))} />
          <label>Player Name</label>
          <input onChange={(e = handleChange("Player", e.target.value))} />
          <label>Character Portrait</label>
          <input onChange={(e = handleChange("Portrait", e.target.value))} />
          <button type="button" onClick={handleSubmit}>
            Add Character
          </button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
