import React, { useState } from "react";

export default function InputBox({ onAnalyze }) {
  const [text, setText] = useState("");

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Hinglish text..."
      />
      <button onClick={() => onAnalyze(text)}>Analyze</button>
    </div>
  );
}