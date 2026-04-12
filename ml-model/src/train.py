import pandas as pd
from datasets import Dataset
from transformers import BertTokenizer, BertForSequenceClassification, Trainer, TrainingArguments

# Load dataset
df = pd.read_csv("../data/dataset.csv")

label_map = {"Positive": 0, "Negative": 1, "Neutral": 2}
df["label"] = df["label"].map(label_map)

dataset = Dataset.from_pandas(df)

# Tokenizer
tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")

def tokenize(example):
    return tokenizer(example["text"], padding="max_length", truncation=True)

dataset = dataset.map(tokenize)

# Split
dataset = dataset.train_test_split(test_size=0.2)

# Model
model = BertForSequenceClassification.from_pretrained(
    "bert-base-uncased",
    num_labels=3
)

# Training config
training_args = TrainingArguments(
    output_dir="../models/bert",
    num_train_epochs=2,
    per_device_train_batch_size=8,
    per_device_eval_batch_size=8,
    logging_dir="../logs",
    save_strategy="epoch"
)

# Trainer
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"],
    eval_dataset=dataset["test"]
)

# Train
trainer.train()

# Save
model.save_pretrained("../models/bert")
tokenizer.save_pretrained("../models/bert")

print("BERT model trained and saved!")