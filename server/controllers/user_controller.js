// Creates route endpoints for user login and signup.
const router = require("express").Router();

// Creates variable to pull the user Schema
const Message = require("../models/user_model");

// Uses Bcrypt to encrpyt the password
const bcrypt = require("bcryptjs");

// Uses JWT to create a token per user created
const jwt = require("jsonwebtoken");

// Creates variable to pull the user Schema
const User = require("../models/user_model");

// Creates Signup endpoint to create a user.
router.post("/signup", async (req, res) => {
  try {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 12),
    });
    //// console.log("gothere1");
    const newUser = await user.save();
    //// console.log("gothere2");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7 days",
    });

    res.status(200).json({
      Msg: "Success! User created!",
      User: newUser,
      Token: token,
    });
  } catch (err) {
    res.status(500).json({
      Error: err.code === 11000 ? "Unable to signup" : err,
    });
  }
});

// Creates login endpoint for a user to sign in
router.post("/signin", async (req, res) => {
  try {
    let { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) throw new Error("User not found");

    let passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new Error("Invalid Details");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24,
    });

    res.status(200).json({
      Msg: "User Signed In!",
      User: user,
      Token: token,
    });
  } catch (err) {
    res.status(500).json({
      Error: err.message,
    });
  }
});

module.exports = router;
