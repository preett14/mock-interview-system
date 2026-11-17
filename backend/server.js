require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("VoxPrep AI Backend Server is Running!");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "VoxPrep AI Backend Connected Successfully!"
  });
});

// Start Server
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();