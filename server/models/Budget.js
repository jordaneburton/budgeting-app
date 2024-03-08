const mongoose = require('mongoose');

const totalBudgetSchema = new mongoose.Schema({
  totalAmount: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  budgetPeriod: {
    type: String, 
    enum: ['1 month', '2 months', '3 months', '6 months', '1 year'], // Example durations
    required: true,
  },
  // Other fields related to the total budget if needed
});

const TotalBudget = mongoose.model('TotalBudget', totalBudgetSchema);

module.exports = TotalBudget;