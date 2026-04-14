import ConfidenceRing from "./ConfidenceRing";

export default function SentimentCard({ result }) {
  if (!result) return null;

  // 🔥 HANDLE BOTH CASES
  const sentiment = result.sentiment?.sentiment || result.sentiment;
  const confidence = result.sentiment?.confidence || result.confidence;

  const emoji = {
    Positive: "👍",
    Negative: "😡",
    Neutral: "😐"
  };

  return (
    <div className="card">
      <div className={`status ${sentiment}`}>
        {sentiment} {emoji[sentiment]}
      </div>

      <p>Confidence: {(confidence * 100).toFixed(0)}%</p>

      <ConfidenceRing value={confidence} />
    </div>
  );
}