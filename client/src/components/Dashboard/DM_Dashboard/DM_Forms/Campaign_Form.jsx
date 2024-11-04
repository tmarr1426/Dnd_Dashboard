import React, { useState } from "react";

const Campaign_Form = () => {
  const [campaign, setCampaign] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Campaign", JSON.stringify(campaign));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="campaign_form">
        <input
          placeholder="Campaign Name"
          value={campaign}
          onChange={(e) => setCampaign(e.target.value)}
        />
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
};

export default Campaign_Form;
