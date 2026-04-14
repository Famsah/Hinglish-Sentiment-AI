import axios from "axios";

const BASE_URL = "https://hinglish-sentiment-ai.onrender.com";

export const analyze = async (text) => {
  const res = await axios.post(`${BASE_URL}/api/sentiment`, {
    text,
  });
  return res.data;
};