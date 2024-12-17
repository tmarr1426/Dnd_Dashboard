// Creates the Schema for the Room
const mongoose = require("mongoose");
const User = require("./user_model");
const Campaign = require("./campaign_model");

const NotesSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.ObjectId,
      required: true,
      ref: User,
    },
    campaign: {
      type: String,
      required: true,
      ref: Campaign,
    },
    postBody: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("notes", NotesSchema);
