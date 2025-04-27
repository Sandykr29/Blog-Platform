const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/userModel");

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await UserModel.findById(decoded.userID);

      if (!user) return res.status(401).json({ msg: "User not found. Please login." });

      req.body.isAdmin = user.isAdmin;
      req.body.userId = user._id;
      req.userData = user;

      console.log(`Logged in as ${user.firstName} (${user.isAdmin ? "Admin" : "User"})`);
      next();
    } catch (error) {
      res.status(401).json({ msg: "Invalid token. Please login again." });
    }
  } else {
    res.status(401).json({ msg: "No token provided. Please login first." });
  }
};

module.exports = { auth };
