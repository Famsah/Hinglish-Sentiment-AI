from transformers import BertTokenizer, BertForSequenceClassification
import torch
import os

# Load model
model_path = os.path.abspath("../models/bert")

tokenizer = BertTokenizer.from_pretrained(model_path)
model = BertForSequenceClassification.from_pretrained(model_path)

model.eval()

labels = ["Positive", "Negative", "Neutral"]

def predict_sentiment(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)

    with torch.no_grad():
        outputs = model(**inputs)
        pred = torch.argmax(outputs.logits, dim=1).item()

    return labels[pred]