const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  budgetAmount: {
    type: Number,
    required: true,
  },
//   budget: {
//     type: Schema.Types.ObjectId,
//     ref: 'Budget',
//     required: true,
//   },
  
  // Other fields related to the category if needed
  transactions: [{
    type: Schema.Types.ObjectId,
    ref: 'Transaction',
  }],
});

const Category = model('Category', categorySchema);

const transactionSchema = new Schema({
  amount: {
    type: Number,
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
});

const Transaction = model('Transaction', transactionSchema);

module.exports = {
  Category,
  Transaction,
};