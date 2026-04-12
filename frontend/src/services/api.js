import axios from "axios";

export const analyze = async (text) => {
  const res = await axios.post("http://localhost:5000/api/sentiment", {
    text,
  });
  return res.data;
};