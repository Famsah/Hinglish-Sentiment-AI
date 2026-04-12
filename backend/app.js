require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const sentimentRoutes = require("./routes/sentimentRoutes");

const app = express();

// Connect DB
// connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/sentiment", sentimentRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));