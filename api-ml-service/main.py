from fastapi import FastAPI
from pydantic import BaseModel
from model_loader import predict
import json
import os

app = FastAPI()

class TextRequest(BaseModel):
    text: str

@app.get("/")
def home():
    return {"status": "ML Service Running"}

@app.post("/predict")
def get_prediction(req: TextRequest):
    result = predict(req.text)
    return result

@app.get("/metrics")
def get_metrics():
    current_dir = os.path.dirname(__file__)
    path = os.path.join(current_dir, "metrics.json")

    with open(path) as f:
        data = json.load(f)

    return data