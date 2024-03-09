const { User, Transaction, Budget, Category } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

module.exports = {
  Query: {
    user: async (parent, args) => {
      try {
        const user = await User.findById(args.userID);
        if (!user) {
          throw new Error('User not found');
        }
        return user;
      } catch (error) {
        throw new Error('User not found');
      }
    },
    users: async () => {
      try {
        return await User.find({});
      } catch (error) {
        throw AuthenticationError;
      }
    },

    transaction: async (parent, args) => {
      try {
        const transaction = await Transaction.findById(args.transactionID);
        if (!transaction) {
          throw new Error('Transaction not found');
        }
        return transaction;
      } catch (error) {
        console.error(error);
        throw AuthenticationError;
      }
    },
    transactions: async () => {
      try {
        return await Transaction.find({});
      } catch (error) {
        throw AuthenticationError;
      }
    },
    budget: async (parent, args, context) => {
      try {
        if (!context.user) throw AuthenticationError;
        const budget = await Budget.findById(args.BudgetID);
        if (!budget) {
          throw new Error('Budget not found');
        }
        return budget;
      } catch (error) {
        console.error(error)
        throw AuthenticationError;
      }
    },
    budgets: async () => {
      try {
        return await Budget.find({});
      } catch (error) {
        throw AuthenticationError;
      }
    },
    category: async (parent, args) => {
      try {
        const category = await Category.findById(args.CategoryID);
        if (!category) {
          throw new Error('Category not found');
        }
        return category;
      } catch (error) {
        console.error(error)
        throw AuthenticationError;
      }
    },
    categories: async () => {
      try {
        return await Category.find({});
      } catch (error) {
        throw AuthenticationError;
      }
    },
  },
  Mutation: {

    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };

      } catch (error) {
        throw new Error('Error creating user');
      }
    },
    addBudget: async (parent, args) => {
      try {
        const budget = await Budget.create(args);
        await User.findByIdAndUpdate(args.userid, { $push: { budgets: budget._id } });

        return budget;

      } catch (error) {
        console.error(error);
        throw new Error('Error creating budget');
      }
    },
    addCategory: async (parent, args) => {
      try {
        const category = await Category.create({ ...args, totalBudget: args.budgetid });
        await Budget.findByIdAndUpdate(args.budgetid, { $push: { categories: category._id } });

        return category;

      } catch (error) {
        console.error(error);
        throw new Error('Error creating category');
      }
    },
    addTransaction: async (parent, {categoryid, amount, description, date} ) => {
      try {
        const transaction = await Transaction.create({ amount, description, date });
        await Category.findByIdAndUpdate(categoryid, { $push: { transactions: transaction._id } });

        return transaction;

      } catch (error) {
        console.error(error);
        throw new Error('Error creating transaction');
      }
    },


  },
};