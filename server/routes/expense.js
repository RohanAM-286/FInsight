const express = require('express');
const Expense = require('../models/Expense');
const auth = require('../middleware/auth'); // If using auth middleware
const axios = require('axios');

const router = express.Router();

// 🔹 Route 1: Add expense manually (no ML)
router.post('/', auth, async (req, res) => {
  try {
    const newExpense = new Expense({ ...req.body, user: req.userId });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Route 2: Get all expenses for logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.userId });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Route 3: Add expense with ML prediction (unauthenticated for frontend testing)
router.post('/add-expense', async (req, res) => {
  const { description, amount, date } = req.body;

  try {
    // 🔍 Send description to ML service
    const predictionRes = await axios.post('http://localhost:5001/predict', {
      description
    });

    const category = predictionRes.data.predicted_category;
    const confidence = predictionRes.data.confidence;

    const newExpense = new Expense({
      description,
      amount,
      date,
      category,
      confidence
    });

    await newExpense.save();
    res.json({ message: 'Expense saved with ML category!', expense: newExpense });

  } catch (err) {
    console.error('Prediction error:', err.message);
    res.status(500).json({ error: 'Prediction failed or ML server not running' });
  }
});

// 🔹 (Optional) Authenticated ML prediction route
router.post('/predict', auth, async (req, res) => {
  const { description, amount, date } = req.body;

  try {
    const mlRes = await axios.post('http://localhost:5001/predict', {
      description
    });

    const { predicted_category, confidence } = mlRes.data;

    const newExpense = new Expense({
      amount,
      description,
      date,
      category: predicted_category,
      confidence,
      user: req.userId
    });

    await newExpense.save();
    res.status(201).json({ message: 'Saved with prediction', expense: newExpense });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

module.exports = router;
