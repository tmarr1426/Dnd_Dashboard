import React, { useState } from "react";

const Campaign_Form = (props) => {
  const [campaignName, setCampaignName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    try {
      const campaignResponse = await (
        await fetch("http://localhost:8080/campaigns/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
          },
          body: JSON.stringify({
            campaign: campaignName,
            description: description,
            addedUsers: [props.userId],
          }),
        })
      ).json();
      console.log(campaignResponse);
    } catch (err) {
      console.log(err);
    }
    e.preventDefault();
    localStorage.setItem("Campaign", JSON.stringify(campaignName));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="campaign_form">
        <input
          placeholder="Campaign Name"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
        />
        <input
          placeholder="Short Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
};

export default Campaign_Form;
