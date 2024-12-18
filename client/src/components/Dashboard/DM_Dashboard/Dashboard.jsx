import React, { useState, useEffect } from "react";

import Campaign from "./DM_Buttons/Campaign_Nav";

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState({}); // State to store campaigns

  useEffect(() => {
    console.log("This will show when rooms component mounts");
    const getAllCampaigns = async () => {
      try {
        const result = await (
          await fetch("http://localhost:8080/campaigns/all/", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
            },
          })
        ).json();
        console.log("All Campaigns", result);
        setAllCampaigns(result.Results);
      } catch (err) {
        console.log(err);
      }
    };

    getAllCampaigns();
  }, []);

  const fetchCampaigns = () => {
    const allCampaigns = {};
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("Campaign")) {
        allCampaigns[key] = JSON.parse(localStorage.getItem(key));
      }
    });
    return allCampaigns; // Return the fetched campaigns
  };

  useEffect(() => {
    const campaignsData = fetchCampaigns(); // Call the function to get campaigns
    setCampaigns(campaignsData); // Set the state with fetched campaigns
  }, []); // Empty dependency array to run on component mount

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Campaign></Campaign>
        <h1>Campaigns</h1>
        {Object.keys(campaigns).length > 0 ? (
          <div>
            {Object.keys(campaigns).map((key) => (
              <div key={key}>
                <strong>{key}:</strong> {JSON.stringify(campaigns[key])}
              </div>
            ))}
          </div>
        ) : (
          <p>No campaigns available</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
