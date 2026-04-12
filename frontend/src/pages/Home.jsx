import React, { useState } from "react";
import { analyze } from "../services/api";
import Navbar from "../components/Navbar";
import SentimentCard from "../components/SentimentCard";
import MetricsChart from "../components/MetricsChart";
import Footer from "../components/Footer";
import "../styles.css";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    const trimmedText = text.trim();
    if (!trimmedText) {
      setError("Please enter some text to analyze.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const res = await analyze(trimmedText);
      setResult(res);
    } catch (err) {
      console.error("Analyze error:", err);
      setError(err.response?.data?.error || "Failed to analyze. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (error) setError(null);
  };

  return (
    <>
      <Navbar />

      <div className="main">
        <div className="left">
          <h1>Hinglish Sentiment AI</h1>

          <textarea
            placeholder="Enter your Hinglish text..."
            value={text}
            onChange={handleTextChange}
          />

          {error && <div className="error" style={{color: 'red', margin: '10px 0'}}>{error}</div>}

          <button 
            onClick={handleAnalyze}
            disabled={!text.trim() || loading}
            style={{opacity: loading ? 0.7 : 1}}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>

          <MetricsChart />
        </div>

        <div className="right">
          {result && <SentimentCard result={result} />}
        </div>
      </div>

      <Footer />
    </>
  );
}
