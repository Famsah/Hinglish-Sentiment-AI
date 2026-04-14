import os
import torch
from transformers import BertTokenizer, BertForSequenceClassification

#  Lazy-loaded variables
model = None
tokenizer = None

#  Labels (keep consistent everywhere)
labels = ["Positive", "Negative", "Neutral"]

def load_model():
    global model, tokenizer

    if model is None:
        print(" Loading BERT model...")

        current_dir = os.path.dirname(__file__)
        model_path = os.path.abspath(
            os.path.join(current_dir, "../models/bert")
        )

        tokenizer = BertTokenizer.from_pretrained(model_path)
        model = BertForSequenceClassification.from_pretrained(model_path)

        model.eval()

        print(" Model loaded successfully")


def predict_sentiment(text):
    #  Ensure model is loaded only when needed
    load_model()

    inputs = tokenizer(
        text,
        return_tensors="pt",
        truncation=True,
        padding=True
    )

    with torch.no_grad():
        outputs = model(**inputs)
        probs = torch.softmax(outputs.logits, dim=1)

    pred = torch.argmax(probs).item()
    confidence = probs[0][pred].item()

    return {
        "sentiment": labels[pred],
        "confidence": round(confidence, 2)
    }