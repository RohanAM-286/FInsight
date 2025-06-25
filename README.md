# 💸 FInsight – Smart Expense Tracker with ML Insights

FInsight is a modern, responsive expense tracker that leverages **machine learning** to predict expense categories in real time. It includes visual analytics, a beautiful UI, and integrates a Python ML backend with a Node.js/Express and MongoDB stack.

---

## 📸 Preview
![image](https://github.com/user-attachments/assets/112823f4-3adf-481b-b2dc-1d399e7c79a9)

![image](https://github.com/user-attachments/assets/a7f8f565-9d6a-4e35-957a-772f5f00bac6)
![image](https://github.com/user-attachments/assets/c7a6b1d9-2c36-4584-bde7-5f216ad83de1)
![image](https://github.com/user-attachments/assets/dae83c7e-4162-42f4-b620-0c931484eb66)
![image](https://github.com/user-attachments/assets/5324ae90-bf0a-4634-9814-21a7e5c802b6)
![image](https://github.com/user-attachments/assets/742108e8-b7b9-4c5d-9bc4-08514c4f755e)

![image](https://github.com/user-attachments/assets/95f1eef6-fd1c-4be0-b92e-68099b1503b9)
![image](https://github.com/user-attachments/assets/f51a46a3-360d-4a3d-adfe-29e2a0571820)

---

## 🧠 Features

- ✅ **Add Income / Expense / Balance**
- 📊 **Donut & Line Charts** with Chart.js
- 🧠 **ML Prediction**: Predicts expense category from description
- 🔁 Real-time confidence scores & trend comparison
- 💡 Financial overview cards
- 🌙 Dark mode toggle
- 🖥️ Responsive UI (desktop + mobile)
- 🔗 Navigation sidebar with ML insights

---

## 🏗️ Project Architecture

FInsight/
├── backend/ # Express.js API
│ ├── server.js
│ ├── routes/
│ ├── models/
│ └── .env
├── ml/ # Python ML Flask server
│ ├── predict.py
│ ├── model.pkl
│ └── vectorizer.pkl
├── frontend/
│ ├── index.html # Main dashboard
│ ├── spend.html # ML trend visualization
│ ├── login.html
│ └── assets/ # CSS, JS, images
└── README.md

---

## ⚙️ Tech Stack

| Layer        | Technology                                |
|--------------|--------------------------------------------|
| Frontend     | HTML5, CSS3, JavaScript, Chart.js, AOS     |
| Backend API  | Node.js, Express, MongoDB, Mongoose        |
| ML Service   | Python, Flask, Scikit-learn, TF-IDF, joblib |
| Charts       | Chart.js (Donut + Line)                    |
| Deployment   | Vercel (frontend), Render (Node & Flask)   |

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v16+)
- Python 3.7+
- MongoDB (Atlas or local)
- Git

---

### 🔧 Installation

#### 1. Clone Repository

```bash
git clone https://github.com/your-username/finsight.git
cd finsight
