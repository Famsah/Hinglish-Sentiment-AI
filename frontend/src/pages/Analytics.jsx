import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MetricsBarChart from "../components/MetricsBarChart";
import ConfusionMatrix from "../components/ConfusionMatrix";

export default function Analytics() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/sentiment/metrics")
      .then((res) => setMetrics(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!metrics) return <p>Loading...</p>;

  return (
    <>
      <Navbar />

      <div className="analytics">
        <h1> Model Analytics Dashboard</h1>

        {/* Bar Chart */}
        <div className="card">
          <h2>Performance Metrics</h2>
          <MetricsBarChart metrics={metrics} />
        </div>

        {/* Confusion Matrix */}
        <div className="card">
          <ConfusionMatrix matrix={metrics.confusion_matrix} />
        </div>

        {/* Class Distribution */}
        <div className="card">
          <h2>Class Distribution</h2>
          <ul>
            {Object.entries(metrics.class_distribution).map(([k, v]) => (
              <li key={k}>
                {k}: {v}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}