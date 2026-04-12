import ConfidenceRing from "./ConfidenceRing";

export default function SentimentCard({ result }) {
  const emoji = {
    Positive: "👍",
    Negative: "😡",
    Neutral: "😐"
  };

  return (
    <div className="card">
      <div className={`status ${result.sentiment}`}>
        {result.sentiment} {emoji[result.sentiment]}
      </div>

      <p>Confidence: {result.confidence}</p>

      <ConfidenceRing value={result.confidence} />
    </div>
  );
}