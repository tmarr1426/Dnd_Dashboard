import React, { useState } from "react";

const TaggingSystem = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}
    >
      <h3 style={{ color: "#333" }}>Tagging System</h3>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a tag..."
          style={{
            padding: "10px",
            borderRadius: "3px",
            border: "1px solid #ccc",
            flex: "1",
          }}
        />
        <button
          onClick={handleAddTag}
          style={{
            padding: "10px",
            borderRadius: "3px",
            backgroundColor: "#5cb85c",
            color: "white",
            marginLeft: "5px",
          }}
        >
          Add
        </button>
      </div>
      <div>
        {tags.map((tag, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              padding: "5px 10px",
              margin: "5px",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "3px",
            }}
          >
            {tag}
            <button
              onClick={() => handleRemoveTag(tag)}
              style={{
                marginLeft: "5px",
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TaggingSystem;
