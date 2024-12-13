// Creates rooms endpoints to create and get all rooms.

const router = require("express").Router();

const Campaigns = require("../models/campaign_model");
// Creates the create room endpoint using the campaigns Schema
router.post("/create", async (req, res) => {
  try {
    const campaign = new Campaign({
      name: req.body.name,
      description: req.body.description,
      addedUsers: req.body.addedUsers,
    });

    const newCampaign = await campaign.save();

    res.status(200).json({
      Msg: "Success! Campaign created!",
      Campaign: campaign,
    });
  } catch (err) {
    res.status(500).json({
      Error: err.code === 11000 ? "Unable to create campaign" : err,
    });
  }
});

// Creates the get all endpoint to search through all rooms and return all.
router.get("/all", async (req, res) => {
  try {
    let results = await Campaigns.find()
      .populate("name", ["name", "description"])
      .select({
        name: 1,
        description: 1,
        createdAt: 1,
        updatedAt: 1,
      });

    res.status(200).json({
      Results: results,
    });
  } catch (err) {
    res.status(500).json({
      Error: err,
    });
  }
});

module.exports = router;
