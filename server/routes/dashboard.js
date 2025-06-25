const express = require('express');
const router = express.Router();

// This would ideally call your ML logic or DB summary
router.get('/', async (req, res) => {
  try {
    // Replace this dummy data with real queries + ML output later
    const dashboardData = {
      spending: 150.25,
      budgetStatus: "On Track ✅",
      categories: [
        { name: "Food", percent: 45 },
        { name: "Bills", percent: 35 },
        { name: "Travel", percent: 20 }
      ],
      dates: ["2025-01", "2025-02", "2025-03"],
      actualSpending: [210, 190, 230],
      predictedSpending: [200, 200, 210],
      predictionStats: {
        totalPredictions: 3,
        accuracyRate: 87,
        lastDelta: "+20.00"
      }
    };

    res.json(dashboardData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

module.exports = router;
