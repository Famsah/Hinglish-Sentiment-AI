export default function MetricsChart() {
  return (
    <div className="metrics">
      <h3>Model Performance</h3>

      <div className="bar">
        <span>BERT (Current)</span>
        <div className="progress" style={{ width: "87%" }}></div>
      </div>

      <div className="bar">
        <span>LSTM</span>
        <div className="progress low"></div>
      </div>

      <div className="bar">
        <span>Traditional ML</span>
        <div className="progress lower"></div>
      </div>
    </div>
  );
}