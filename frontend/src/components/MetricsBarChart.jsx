import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function MetricsBarChart({ metrics }) {
  const data = {
  labels: ["Accuracy", "Precision", "Recall"],
  datasets: [
    {
      label: "Model Performance",
      data: [
        metrics.accuracy,
        metrics.precision,
        metrics.recall,
      ],
      backgroundColor: [
        "#00E5FF",   // cyan
        "#00FF9C",   // green
        "#FFC107",   // yellow
      ],
      borderRadius: 8,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      labels: {
        color: "white", // legend text
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white", // x-axis text
      },
      grid: {
        color: "rgba(255,255,255,0.1)",
      },
    },
    y: {
      ticks: {
        color: "white", // y-axis text
      },
      grid: {
        color: "rgba(255,255,255,0.1)",
      },
    },
  },
};

  return <Bar data={data} options={options} />;
}