const bcrypt = require("bcrypt");
const { UserModel } = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  const { firstName, lastName, email, location, password } = req.body;

  try {
    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      return res.status(400).json({ msg: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      location,
      password: hashedPassword,
    });

    res.status(201).json({ msg: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong. Try again later." });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "Email not found. Please register." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ msg: "Incorrect password" });
    }

    const token = generateToken(user._id);

    res.status(200).json({ msg: "Login Successful", token });
  } catch (error) {
    res.status(500).json({ msg: "Login failed. Try again later." });
  }
};

const getLoggedInUser = async (req, res) => {
  try {
    res.status(200).json(req.userData);
  } catch (error) {
    res.status(500).json({ msg: "Failed to fetch user data" });
  }
};

module.exports = { registerUser, loginUser, getLoggedInUser };
