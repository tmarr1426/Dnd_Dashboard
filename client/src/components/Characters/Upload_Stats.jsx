import React from "react";

const Upload_Stats = () => {
  const fields = {
    character_name: {
      label: "Character Name",
    },
    roll: {
      label: "Roll",
    },
  };

  return (
    <>
      <div
        style={{ marginLeft: "15em", display: "flex", flexDirection: "column" }}
      >
        <form>
          <h2>Create a Character</h2>
          <label>Character Name</label>
          <input />
          <label>Character Class</label>
          <input />
          <label>Player Name</label>
          <input />
          <label>Character Portrait</label>
          <input />
          <button>Add Character</button>
        </form>
      </div>
    </>
  );
};

export default Upload_stats;
