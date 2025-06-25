from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load saved model and vectorizer
model = joblib.load('expense_model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    desc = data.get('description', '')

    # Vectorize the input description
    X_input = vectorizer.transform([desc])
    
    # Predict category
    predicted_category = model.predict(X_input)[0]
    probs = model.predict_proba(X_input).max()

    return jsonify({
        'category': predicted_category,
        'confidence': round(float(probs), 2)
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
