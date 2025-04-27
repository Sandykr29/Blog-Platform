const express = require("express");
const { registerUser, loginUser, getLoggedInUser } = require("../controllers/authController");
const { auth } = require("../middlewares/authMiddleware");

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/me", auth, getLoggedInUser);

module.exports = { authRouter };
