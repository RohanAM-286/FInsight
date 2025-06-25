const express = require('express');
const Expense = require('../models/Expense');
const auth = require('../middleware/auth');
const axios = require('axios');
const router = express.Router();

// Add expense with ML prediction
router.post('/predict', auth, async (req, res) => {
  try {
    const { amount, description, date } = req.body;

    // Call Python ML API
    const mlRes = await axios.post('http://localhost:5001/predict', {
      amount, description
    });

    const { category, anomaly } = mlRes.data;

    const newExpense = new Expense({
      amount, description, date, category, user: req.userId
    });

    await newExpense.save();

    res.status(201).json({ ...newExpense._doc, category, anomaly });
  } catch (err) {
    console.error("Prediction Error:", err.message);
    res.status(500).json({ error: "Prediction failed" });
  }
});

// Get all user expenses
router.get('/', auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.userId });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
