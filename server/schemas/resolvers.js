const { User, Account, Transaction, Budget, Category } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args) => {
      try {
        const user = await User.findById(args);
        if (!user) {
          throw new Error('User not found');
        }
        return user;
      } catch (error) {
        throw AuthenticationError;
      }
    },
    users: async () => {
      try {
        return await User.find({});
      } catch (error) {
        throw AuthenticationError;
      }
    },
    account: async (parent, args) => {
      try {
        const account = await Account.findById(args);
        if (!account) {
          throw new Error('Account not found');
        }
        return account;
      } catch (error) {
        throw AuthenticationError;
      }
    },
    accounts: async () => {
      try {
        return await Account.find({});
      } catch (error) {
        throw AuthenticationError;
      }
    },
    transaction: async (parent, args) => {
      try {
        const transaction = await Transaction.findById(args);
        if (!transaction) {
          throw new Error('Transaction not found');
        }
        return transaction;
      } catch (error) {
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
    budget: async (parent, args) => {
      try {
        const budget = await Budget.findById(args);
        if (!budget) {
          throw new Error('Budget not found');
        }
        return budget;
      } catch (error) {
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
        const category = await Category.findById(args);
        if (!category) {
          throw new Error('Category not found');
        }
        return category;
      } catch (error) {
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
    
  },
};

module.exports = resolvers;