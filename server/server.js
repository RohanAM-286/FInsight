const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: '../../.env' }); // Adjust if needed

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth'); // optional
const expenseRoutes = require('./routes/expense');
const dashboardRoutes = require('./routes/dashboard'); // optional
const predictRoute = require('./routes/predict'); // optional

// Route use
app.use('/api/auth', authRoutes); // if you have auth
app.use('/api/expenses', expenseRoutes);
app.use('/api/dashboard-data', dashboardRoutes);
app.use('/api/predict', predictRoute);
app.use('/api/expenses', require('./routes/expense'));

app.get('/', (req, res) => {
  res.send('API is working ✅');
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch(err => console.error('❌ MongoDB connection error:', err));
