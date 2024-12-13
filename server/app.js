//? Importing dotenv, and applying it (giving us access to process.env)
require("dotenv").config();

//? Importing Express
const express = require("express");

//? Assign Express
const app = express();

//? cors
const cors = require("cors");

//? Import controller/s
const {
  userController,
  statsController,
  parentController,
  recoveryController,
  settingController,
} = require("./controllers/index");

//? Import validation middleware
const validateSession = require("./middleware/validate-session");

//? Assigning a variable from .env, with fallback port of 8080
//* || - OR/DEFAULT operator
const PORT = process.env.PORT || 8080;

//? Middleware to allow JSON to be accepted by our HTTP server
app.use(express.json());

//? importing cors to use backend on browser
app.use(cors());

//? Allow parsing of query strings
app.use(express.urlencoded({ extended: true }));

//? Using the controllers
app.use("/parent", parentController);
// user needs token from the parent signup
app.use("/user", userController);
app.use("/recovery", recoveryController);
app.use(validateSession);
app.use("/settings", settingController);
app.use("/stats", statsController);

//? Initial spin up of the Express server
app.listen(PORT, () => {
  try {
    //* Repeats string x int argument
    console.log("*".repeat(10));
    console.log(`Server is connected: ${PORT}`);
  } catch (err) {
    console.log("Error connecting", err);
  }
});
