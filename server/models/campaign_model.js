// Creates the Schema for the Room
const mongoose = require("mongoose");

const User = require("./user_model");

const CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  addedUsers: {
    type: Array,
    required: true,
    ref: User,
  },
  // tags: {
  //   type: Array,
  //   required: true,
  //   ref: Tags,
  // },
});

module.exports = mongoose.model("campaigns", CampaignSchema);
