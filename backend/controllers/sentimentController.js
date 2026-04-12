const { getPrediction } = require("../services/modelService");

exports.analyzeSentiment = async (req, res) => {
  try {
    const { text } = req.body;

    const result = await getPrediction(text);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};