import React from "react";

export default function ResultCard({ result }) {
  return (
    <div>
      <h2>Sentiment: {result.sentiment}</h2>
      <p>Confidence: {result.confidence}</p>
    </div>
  );
}