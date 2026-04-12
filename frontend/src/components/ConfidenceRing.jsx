export default function ConfidenceRing({ value }) {
  const percent = Math.round(value * 100);

  return (
    <div className="ring">
      <div className="circle">
        <span>{percent}%</span>
      </div>
    </div>
  );
}