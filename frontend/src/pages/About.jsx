import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="about">
        <h1>About Hinglish Sentiment AI</h1>

        <p>
          Hinglish Sentiment AI is an advanced natural language processing system
          designed to analyze sentiment from code-mixed Hindi and English text,
          commonly found on social media platforms like Twitter, Instagram, and WhatsApp.
        </p>

        <h2> What This System Does</h2>
        <ul>
          <li>Analyzes Hinglish text in real-time</li>
          <li>Classifies sentiment into Positive, Negative, or Neutral</li>
          <li>Displays confidence score using a deep learning model</li>
          <li>Handles informal language, slang, and mixed grammar</li>
        </ul>

        <h2> Model Used</h2>
        <p>
          This system uses a fine-tuned <strong>BERT (Bidirectional Encoder Representations from Transformers)</strong> model.
          BERT understands context in sentences, making it highly effective for analyzing code-mixed Hinglish text.
        </p>

        <h2> How It Works</h2>
        <ol>
          <li>User enters Hinglish text</li>
          <li>Frontend sends request to backend</li>
          <li>Backend forwards to ML API</li>
          <li>BERT model processes and predicts sentiment</li>
          <li>Result is returned with confidence score</li>
        </ol>

        <h2> Tech Stack</h2>
        <ul>
          <li>Frontend: React.js</li>
          <li>Backend: Node.js (Express)</li>
          <li>ML API: FastAPI</li>
          <li>Model: BERT Transformer</li>
        </ul>

        <h2> Use Cases</h2>
        <ul>
          <li>Social media sentiment analysis</li>
          <li>Customer feedback analysis</li>
          <li>Product review insights</li>
          <li>Market research</li>
        </ul>
      </div>

      <Footer />
    </>
  );
}