from sklearn.feature_extraction.text import CountVectorizer

vectorizer = CountVectorizer(max_features=5000)

def fit_transform(texts):
    return vectorizer.fit_transform(texts)

def transform(texts):
    return vectorizer.transform(texts)