const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  budgetAmount: {
    type: Number,
    required: true,
  },
  totalBudget: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TotalBudget',
    required: true,
  },
  // Other fields related to the category if needed
});

const Category = mongoose.model('Category', categorySchema);

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // Other fields related to transactions if needed
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = {
  Category,
  Transaction,
};