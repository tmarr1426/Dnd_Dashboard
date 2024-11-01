import React, { useState, useEffect } from "react";

const CampaignNotes = () => {
  const [Notes, setNotes] = useState("");
  const [NPCs, setNPCs] = useState("");
  const [sessionNumber, setSessionNumber] = useState(""); // State for session number
  const [npcName, setNPCName] = useState("");

  const handleNotesSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const notesValue = e.target.elements.notes.value;

    // Use the session number from the input as part of the key
    const newNoteKey = `Session ${sessionNumber} Notes`;

    // Store the new note in local storage
    localStorage.setItem(newNoteKey, JSON.stringify(notesValue));

    // Update the state
    setNotes(notesValue);
    setSessionNumber(""); // Clear session number input after submission
  };

  const handleNPCSubmit = (e) => {
    e.preventDefault();
    const npcsValue = e.target.elements.npcs.value;
    const newNPCSKey = `NPC Name: ${npcName}`;
    localStorage.setItem(newNPCSKey, JSON.stringify(npcsValue));
    setNPCs(npcsValue);
    setNPCName("");
  };

  useEffect(() => {
    // Retrieve all notes when the component mounts
    const allCampaignNotes = {};
    const allNPCNptes = {};
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("Session")) {
        allCampaignNotes[key] = JSON.parse(localStorage.getItem(key));
      }
    });
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("NPC Name")) {
        allNPCNptes[key] = JSON.parse(localStorage.getItem(key));
      }
    });
    console.log(allCampaignNotes); // Log all campaign notes
    console.log(allNPCNptes);
  }, []);

  return (
    <div>
      <div>
        <h1>Campaign Notes</h1>
        <h3>Session:</h3>
        <div>
          <h2>Add Session Notes</h2>
          <div>
            <form onSubmit={handleNotesSubmit}>
              <input
                placeholder="Session Number"
                value={sessionNumber}
                onChange={(e) => setSessionNumber(e.target.value)} // Update session number state
              />
              <textarea
                name="notes"
                placeholder="Enter Campaign Notes"
              ></textarea>
              <button type="submit">Add Notes</button>
            </form>
            <form onSubmit={handleNPCSubmit}>
              <input
                placeholder="NPC Name"
                value={npcName}
                onChange={(e) => setNPCName(e.target.value)}
              />
              <textarea
                name="npcs"
                placeholder="Enter NPC Information"
              ></textarea>
              <button type="submit">Add NPC</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignNotes;
