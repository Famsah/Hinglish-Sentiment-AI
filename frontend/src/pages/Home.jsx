import React, { useState } from "react";
import { analyze } from "../services/api";
import Navbar from "../components/Navbar";
import SentimentCard from "../components/SentimentCard";
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
      setError("Failed to analyze. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* CENTERED CONTAINER */}
      <div className="home-container">

        <h1 className="home-title">Hinglish Sentiment AI</h1>

        {/* INPUT BOX */}
        <div className="input-box">
          <textarea
            placeholder="Enter your Hinglish text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        {/* ERROR */}
        {error && <p className="error">{error}</p>}

        {/* BUTTON GROUP */}
<div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "15px" }}>
  
  {/* Analyze */}
  <button
    className="analyze-btn"
    onClick={handleAnalyze}
    disabled={!text.trim() || loading}
  >
    {loading ? "Analyzing..." : "Analyze"}
  </button>

  {/* Try Another */}
  <button
    className="analyze-btn"
    onClick={() => {
      setText("");
      setResult(null);
      setError(null);
    }}
  >
    Try Another
  </button>

  {/* Stop (only when loading) */}
  {loading && (
    <button
      className="analyze-btn"
      onClick={() => setLoading(false)}
    >
      Stop
    </button>
  )}

</div>

        {/* RESULT */}
        {result && (
          <div className="result-section">
            <SentimentCard result={result} />
          </div>
        )}

        {/* PERFORMANCE CARDS */}
        <div className="performance-section">
          <h3>Model Performance</h3>

          <div className="perf-cards">
            <div className="perf-card green">
              <p>BERT</p>
              <span>94%</span>
            </div>

            <div className="perf-card yellow">
              <p>LSTM</p>
              <span>81%</span>
            </div>

            <div className="perf-card blue">
              <p>Traditional ML</p>
              <span>66%</span>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}