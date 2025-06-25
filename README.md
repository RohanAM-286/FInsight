# 💸 FInsight – Smart Expense Tracker with ML Insights

FInsight is a modern, responsive expense tracker that leverages **machine learning** to predict expense categories in real time. It includes visual analytics, a beautiful UI, and integrates a Python ML backend with a Node.js/Express and MongoDB stack.

---

## 📸 Preview

![Dashboard Screenshot](https://your-screenshot-link.com/dashboard.png)
> Replace this with your deployed app screenshot or a GIF demo

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
