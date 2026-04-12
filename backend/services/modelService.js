const axios = require("axios");

exports.getPrediction = async (text) => {
  try {
    const mlUrl = process.env.ML_API_URL || 'http://127.0.0.1:8000';
    const response = await axios.post(
      `${mlUrl}/predict`,
      { text }
    );

    return response.data;
  } catch (error) {
    console.error("ML API ERROR:", error.message);
    throw error;
  }
};
