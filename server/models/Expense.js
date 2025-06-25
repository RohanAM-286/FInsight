const mongoose = require('mongoose');
const expenseSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    date: Date,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
module.exports = mongoose.model('Expense', expenseSchema);