// Creates middleware to help validate tokens based on what MONGO and postman sees
const jwt = require("jsonwebtoken");

const User = require("../models/user_model");

const validate = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;

    if (!auth) throw new Error("Unauthorized 1");

    const token = auth.split(" ")[1];

    console.log("token = " + token);
    if (!token) throw new Error("Unauthorized 2");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded " + decoded);

    const user = await User.findById(decoded.id);

    if (!user) throw new Error("User not found");

    req.user = user;
    console.log(user);
    return next();
  } catch (err) {
    console.log("validate error " + err);
    res.status(401).json({ Error: err.message });
  }
};

module.exports = validate;
