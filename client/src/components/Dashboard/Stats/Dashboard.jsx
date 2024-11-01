import React from "react";

import Character_Card from "../Character Cards/Character_Card";

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
        <Character_Card></Character_Card>
      </div>
    </>
  );
};

export default Dashboard;
