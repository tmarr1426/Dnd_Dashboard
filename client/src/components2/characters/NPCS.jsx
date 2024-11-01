import React from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const NPCS = () => {
  const npclist = [];
  let npcId = 1;

  function addNPC(name, locationMet, description) {
    const newNPC = {
      id: npcId++,
      name: name,
      locationMet: locationMet,
      description: description,
    };
    npclist.push(newNPC);
    console.log("Added new NPC: ${name}");
  }

  return (
    <div>
      {npclist.map((id) => {
        return (
          <Card key={npclist.id}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Box>
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
                </Box>
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </div>
  );
};

export default NPCS;
