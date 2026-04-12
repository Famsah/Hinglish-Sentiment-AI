import requests

res = requests.post("http://localhost:8000/predict", json={"text": "ye movie mast hai"})
print(res.json())