import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
import joblib

# Sample training data
data = pd.DataFrame({
    'description': ['grocery shopping', 'uber ride', 'electricity bill', 'restaurant dinner', 'monthly rent'],
    'category': ['Food', 'Transport', 'Utilities', 'Food', 'Rent'],
    'amount': [120, 15, 60, 45, 800]
})

vectorizer = TfidfVectorizer()
X_desc = vectorizer.fit_transform(data['description'])
y = data['category']

model = RandomForestClassifier()
model.fit(X_desc, y)

joblib.dump(vectorizer, 'vectorizer.pkl')
joblib.dump(model, 'expense_model.pkl')
print("✅ Model trained and saved.")
