// Sets the .ENV file for safe access and encryption
require("dotenv").config();
// Creates all variables that require a dependency to use the dependency.
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// Sets the MONGODB Variable for the URL and the Databases name
const MONGODB = process.env.MONGO_DB_URL + process.env.DB_NAME;

const app = express();
// Sets controller endpoints
const userController = require("./controllers/user_controller");
const notesController = require("./controllers/notes_controller");
const campaignController = require("./controllers/campaign_controller");
// Creates middleware validation
const validate = require("./middleware/validate");

mongoose.connect(MONGODB);

const db = mongoose.connection;
// Connects to DB
db.once("open", async () => {
  console.log("*".repeat(10));
  console.log(`Connected successfully to database:\n${MONGODB}`);
  console.log("*".repeat(10));
});

db.on("error", (err) => console.log(`Error ${err}`));

const PORT = process.env.PORT;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());
// Sets app to use the url and the schema associated.
app.use("/user", userController);
app.use(validate);
app.use("/campaign", campaignController);
app.use("/notes", notesController);
// Connects to the server.
app.listen(PORT, () => {
  try {
    console.log("*".repeat(10));
    console.log(`Server is connected: ${PORT}`);
  } catch (err) {
    console.log("Error connecting", err);
  }
});
