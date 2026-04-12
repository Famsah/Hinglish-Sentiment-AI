export default function ConfusionMatrix({ matrix }) {
  return (
    <div>
      <h3>Confusion Matrix</h3>

      <table className="heatmap">
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((val, j) => (
                <td key={j}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}