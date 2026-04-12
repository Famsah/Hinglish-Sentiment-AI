import pandas as pd
import torch
from transformers import BertTokenizer, BertForSequenceClassification
from sklearn.metrics import accuracy_score, precision_score, recall_score, confusion_matrix
import json
import os

# Load dataset
df = pd.read_csv("../data/dataset.csv")

label_map = {"Positive": 0, "Negative": 1, "Neutral": 2}
labels = [label_map[l] for l in df["label"]]

# Load model
model_path = os.path.abspath("../models/bert")

tokenizer = BertTokenizer.from_pretrained(model_path)
model = BertForSequenceClassification.from_pretrained(model_path)

model.eval()

predictions = []

for text in df["text"]:
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)

    with torch.no_grad():
        outputs = model(**inputs)
        pred = torch.argmax(outputs.logits, dim=1).item()

    predictions.append(pred)

# Metrics
accuracy = accuracy_score(labels, predictions)
precision = precision_score(labels, predictions, average="macro")
recall = recall_score(labels, predictions, average="macro")
cm = confusion_matrix(labels, predictions).tolist()

# Class distribution
class_counts = df["label"].value_counts().to_dict()

# Save metrics
metrics = {
    "accuracy": round(accuracy, 3),
    "precision": round(precision, 3),
    "recall": round(recall, 3),
    "confusion_matrix": cm,
    "class_distribution": class_counts
}

with open("../models/metrics.json", "w") as f:
    json.dump(metrics, f, indent=2)

print("Metrics saved:", metrics)