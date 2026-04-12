const express = require("express");
const router = express.Router();
const axios = require("axios"); //  ADD THIS LINE

const { analyzeSentiment } = require("../controllers/sentimentController");

// METRICS ROUTE
router.get("/metrics", async (req, res) => {
  try {
    const mlUrl = process.env.ML_API_URL || "http://127.0.0.1:8000";

    console.log("Calling ML API:", `${mlUrl}/metrics`);

    const response = await axios.get(`${mlUrl}/metrics`);

    console.log("ML RESPONSE:", response.data);

    res.json(response.data);

  } catch (err) {
    console.error(" BACKEND ERROR:");
    console.error("Message:", err.message);
    console.error("Response:", err.response?.data);

    res.status(500).json({ error: "Failed to fetch metrics" });
  }
});

// SENTIMENT ROUTE
router.post("/", analyzeSentiment);

module.exports = router;