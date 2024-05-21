import React, { useState, useEffect } from "react";

import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const Character_Card = () => {
  const [results, setResults] = useState([]);
  // Fetches the Drive statistics for all children a parent has and creates a "Card" that houses the information for each child
  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/stats/character_stats",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
            },
          }
        );
        const json = await response.json();

        console.log("jsonn", json);

        setResults(json.newUserStats);
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, []);
  // Holds the information fetched above and creates a card that shows the information on the parent dashboard.
  return (
    <div
      className="roboto-regular"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {results.map((obj) => {
        return (
          <Card
            key={obj.id}
            style={{
              width: "40em",
              margin: "1em",
              boxShadow: "4px 4px 4px #000000",
              borderRadius: "1em",
              backgroundColor: "#ECEAED",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Box>
                  <CardMedia>{obj.portrait}</CardMedia>
                  <Typography
                    sx={{
                      fontSize: 32,
                      textDecoration: "underline 2px",
                      fontWeight: "700",
                      textAlign: "left",
                    }}
                    color="#494888"
                    gutterBottom
                  >
                    {obj.FirstName}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 26, textAlign: "left" }}
                    color="#494888"
                    gutterBottom
                  >
                    Class {obj.characterClass}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 26, textAlign: "left" }}
                    color="#494888"
                    gutterBottom
                  >
                    {obj.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 26, textAlign: "left" }}
                    color="#494888"
                    gutterBottom
                  >
                    Total Natural 20 rolls: {obj.nat20Rolls}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 26, textAlign: "left" }}
                    color="#494888"
                    gutterBottom
                  >
                    Total Natural 1 rolls: {obj.nat1Rolls}
                  </Typography>
                </Box>
              </CardContent>
              <Box></Box>
            </Box>
          </Card>
        );
      })}
    </div>
  );
};

export default Character_Card;
