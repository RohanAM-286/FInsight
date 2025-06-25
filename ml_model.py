import joblib
from flask import Flask, request, jsonify

app = Flask(__name__)
model = joblib.load('expense_model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    desc = data.get("description", "")
    amount = float(data.get("amount", 0))

    vec = vectorizer.transform([desc])
    category = model.predict(vec)[0]

    # Basic anomaly detection
    anomaly = amount > 1000 or category == 'Other'

    return jsonify({ "category": category, "anomaly": anomaly })

if __name__ == '__main__':
    app.run(port=5001)
