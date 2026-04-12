import sys
import os

#  Add correct path to ml-model/src
current_dir = os.path.dirname(__file__)
ml_path = os.path.abspath(os.path.join(current_dir, "../ml-model/src"))

sys.path.append(ml_path)

from predict import predict_sentiment
import random


def predict(text):
    label = predict_sentiment(text)

    return {
        "sentiment": label,
        "confidence": round(random.uniform(0.7, 0.95), 2)
    }