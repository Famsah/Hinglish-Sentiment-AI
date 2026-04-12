import React from "react";

export default function Chart({ sentiment, confidence }) {
  const colors = {
    Positive: "#4CAF50",
    Negative: "#F44336",
    Neutral: "#FFC107"
  };

  return (
    <div>
      {/* Confidence Bar */}
      <div style={{
        background: "#ddd",
        borderRadius: 10,
        marginTop: 10
      }}>
        <div style={{
          width: `${confidence * 100}%`,
          background: colors[sentiment],
          padding: 5,
          borderRadius: 10,
          color: "#fff"
        }}>
          {Math.round(confidence * 100)}%
        </div>
      </div>

      {/* Simple Pie */}
      <div style={{
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: "50%",
        background: colors[sentiment],
        marginInline: "auto"
      }}></div>
    </div>
  );
}