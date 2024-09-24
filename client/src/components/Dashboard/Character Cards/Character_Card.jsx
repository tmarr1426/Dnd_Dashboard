import React, { useState, useEffect } from "react";

import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const Character_Card = () => {
  const [results, setResults] = useState([]);

  const characters = [
    {
      id: 1,
      name: "Valen Lostrestril",
      race: "Wood Elf",
      class: "Ranger",
      classLevel: "Ranger 6",
    },
    {
      id: 2,
      name: "Huppert Mantlemorn",
      race: "Human",
      class: "Barbarian/Paladin",
      classLevel: "Barbarian 5, Paladin 1",
    },
    {
      id: 3,
      name: "Pyra",
      race: "Tiefling",
      class: "Bard",
      classLevel: "Bard 6",
    },
    {
      id: 4,
      name: "Seeker",
      race: "Warforged",
      class: "Monk",
      classLevel: "Monk 6",
    },
  ];

  // Holds the information fetched above and creates a card for each Character associated to the user
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
      {characters.map((id) => {
        return (
          <Card
            key={characters.id}
            style={{
              width: "25em",
              margin: "1em",
              boxShadow: "4px 4px 4px #000000",
              borderRadius: "1em",
              backgroundColor: "#ECEAED",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Box>
                  {/* <CardMedia>{obj.portrait}</CardMedia> */}
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
                    {id.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 26, textAlign: "left" }}
                    color="#494888"
                    gutterBottom
                  >
                    Species: {id.race}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 26, textAlign: "left" }}
                    color="#494888"
                    gutterBottom
                  >
                    Class: {id.class}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 26, textAlign: "left" }}
                    color="#494888"
                    gutterBottom
                  >
                    Level: {id.classLevel}
                  </Typography>
                  {/* <Typography
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
                  </Typography> */}
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

// Fetches the Character Stats
// useEffect(() => {
//   const getStats = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8081/stats/character_stats",
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
//           },
//         }
//       );
//       const json = await response.json();

//       console.log("jsonn", json);

//       setResults(json.newUserStats);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   getStats();
// }, []);
