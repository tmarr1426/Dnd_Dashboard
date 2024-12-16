import React, { useState } from "react";
import { Box, Card, CardContent, Typography, CardMedia } from "@mui/material";

const NPCS = () => {
  const [npcName, setNpcName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
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

  const addNPC = async () => {
    try {
      const json = await (
        await fetch("http://localhost:8080/npcs/create/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("MyToken")}`,
          },
          body: JSON.stringify({
            user_id: props.user_id,
            campaign: props.campaignName,
            npc: npcName,
            location: location,
            description: description,
          }),
        })
      ).json();
    } catch (err) {
      console.log(err);
    }
  };
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
