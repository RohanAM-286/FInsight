// routes/predict.js
const express = require('express');
const router = express.Router();

// Example ML logic or mock
router.post('/', async (req, res) => {
  const { amount } = req.body;

  // Mock logic (replace with real ML prediction)
  const predictedSpending = amount + Math.random() * 50; // simulate prediction
  const accuracy = Math.floor(90 + Math.random() * 10);  // e.g. 90-99%
  const predictedCategory = amount > 500 ? "Travel" : "Food";
  const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  res.json({
    predictedCategory,
    predictedSpending,
    actualSpending: amount,
    accuracy,
    date
  });
});

module.exports = router;
