const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");
const { authRouter } = require("./routes/authRoutes");
const { postRouter } = require("./routes/postRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Server is Running...");
});

connectDB().then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server started on http://localhost:${process.env.PORT || 8000}`);
  });
});
