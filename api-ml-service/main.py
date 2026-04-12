from fastapi import FastAPI
from pydantic import BaseModel
from model_loader import predict

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

import json
import os

@app.get("/metrics")
def get_metrics():
    path = os.path.abspath("../ml-model/models/metrics.json")
    
    with open(path) as f:
        data = json.load(f)

    return data