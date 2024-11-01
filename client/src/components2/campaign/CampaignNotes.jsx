import React, { useState, useEffect } from "react";

const CampaignNotes = () => {
  const [notes, setNotes] = useState({});
  const [npcs, setNpcs] = useState({});
  const [sessionNumber, setSessionNumber] = useState("");
  const [npcName, setNPCName] = useState("");

  const handleNotesSubmit = (e) => {
    e.preventDefault();
    const notesValue = e.target.elements.notes.value;
    const newNoteKey = `Session ${sessionNumber} Notes`;
    localStorage.setItem(newNoteKey, JSON.stringify(notesValue));
    setSessionNumber("");
    fetchNotes(); // Fetch notes after submission
  };

  const handleNPCSubmit = (e) => {
    e.preventDefault();
    const npcsValue = e.target.elements.npcs.value;
    const newNPCKey = `NPC Name: ${npcName}`;
    localStorage.setItem(newNPCKey, JSON.stringify(npcsValue));
    setNPCName("");
    fetchNpcs(); // Fetch NPCs after submission
  };

  const fetchNotes = () => {
    const allCampaignNotes = {};
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("Session")) {
        allCampaignNotes[key] = JSON.parse(localStorage.getItem(key));
      }
    });
    setNotes(allCampaignNotes);
  };

  const fetchNpcs = () => {
    const allNPCNotes = {};
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("NPC Name")) {
        allNPCNotes[key] = JSON.parse(localStorage.getItem(key));
      }
    });
    setNpcs(allNPCNotes);
  };

  useEffect(() => {
    fetchNotes();
    fetchNpcs();
  }, []);

  return (
    <div>
      <h1>Campaign Notes</h1>
      {Object.keys(notes).length > 0 ? (
        <div>
          <h3>Session Notes:</h3>
          {Object.keys(notes).map((key) => (
            <div key={key}>
              <strong>{key}:</strong> {notes[key]}
            </div>
          ))}
        </div>
      ) : (
        <p>No Notes available</p>
      )}
      <h1>NPC's</h1>
      {Object.keys(npcs).length > 0 ? (
        <div>
          <h3>List of NPCS:</h3>
          {Object.keys(npcs).map((key) => (
            <div key={key}>
              <strong>{key}:</strong> {npcs[key]}
            </div>
          ))}
        </div>
      ) : (
        <p>No Notes available</p>
      )}
      <div>
        <h2>Add Session Notes</h2>
        <form onSubmit={handleNotesSubmit}>
          <input
            placeholder="Session Number"
            value={sessionNumber}
            onChange={(e) => setSessionNumber(e.target.value)}
          />
          <textarea name="notes" placeholder="Enter Campaign Notes"></textarea>
          <button type="submit">Add Notes</button>
        </form>

        <h2>Add NPC</h2>
        <form onSubmit={handleNPCSubmit}>
          <input
            placeholder="NPC Name"
            value={npcName}
            onChange={(e) => setNPCName(e.target.value)}
          />
          <textarea name="npcs" placeholder="Enter NPC Details"></textarea>
          <button type="submit">Add NPC</button>
        </form>
      </div>
    </div>
  );
};

export default CampaignNotes;
