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
          columnCount: "2",
          marginLeft: "15em",
        }}
      >
        <h1>Dashboard</h1>
        <h3 style={{ marginBottom: "10%" }}>Character Stats at a glance</h3>
        <Character_Card></Character_Card>
      </div>
    </>
  );
};

export default Dashboard;
