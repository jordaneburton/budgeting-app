const TotalBudget = require('./Budget');
const { Category, Transaction } = require('./Categories');
const User = require('./User');

module.exports = {
  Budget: TotalBudget,
  Category,
  User,
  Transaction
};