import React from "react";

import Character_Card from "../Character Cards/Character_Card";
import Campaign from "../DM_Dashboard/DM_Buttons/Create_Campaign";

const Dashboard = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "10%" }}>Characters at a glance</h1>
        <Campaign></Campaign>
        <Character_Card></Character_Card>
      </div>
    </>
  );
};

export default Dashboard;
