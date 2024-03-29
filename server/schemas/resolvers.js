const { User, Transaction, Budget, Category } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

module.exports = {
  Query: {
    user: async (parent, args) => {
      try {
        const user = await User.findById(args.userID).populate({
          path: 'budgets',
          populate: {
            path: 'categories',
            populate: {
              path: 'transactions'
            }
          }
      });
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
        return await User.find({}).populate('budgets');
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
        const budget = await Budget.findById(args.BudgetID).populate('categories');
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
        return await Budget.find({}).populate('categories');
      } catch (error) {
        throw AuthenticationError;
      }
    },
    category: async (parent, args) => {
      try {
        const category = await Category.findById(args.CategoryID).populate('transactions');
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
        return await Category.find({}).populate('transactions');
      } catch (error) {
        throw AuthenticationError;
      }
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
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
        const category = await Category.create(args);
        await Budget.findByIdAndUpdate(args.budgetid, { $push: { categories: category._id } });

        return category;

      } catch (error) {
        console.error(error);
        throw new Error('Error creating category');
      }
    },
    addTransaction: async (parent, args) => {
      try {
        const transaction = await Transaction.create(args);
        await Category.findByIdAndUpdate(args.categoryid, { $push: { transactions: transaction._id } });

        return transaction;

      } catch (error) {
        console.error(error);
        throw new Error('Error creating transaction');
      }
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw AuthenticationError;
    },


    updateTransaction: async (parent, { transactionID, amount, description, date }) => {
      return await Transaction.findByIdAndUpdate(transactionID, { amount: amount, description: description, date: date }, { new: true });
    },
  
    updateBudget: async (parent, { name, budgetID, amount, startDate, endDate, budgetPeriod }) => {
      return await Budget.findByIdAndUpdate(budgetID, { name: name, amount: amount, startDate: startDate, endDate: endDate, budgetPeriod: budgetPeriod }, { new: true });
    },
  

    updateCategory: async (parent, { categoryID, name, budgetAmount }) => {
      return await Category.findByIdAndUpdate(categoryID, { name: name, budgetAmount: budgetAmount }, { new: true });
    },

    deleteUser: async (parent, { userID }) => {
      return await User.findOneAndDelete(
        { _id: userID },
        { new: true },
        );
    },
  
    deleteBudget: async (parent, { budgetID }) => {
      return await Budget.findOneAndDelete(
        { _id: budgetID },
        // { $pull: { _id: budgetID } },
        { new: true }
      );
    },
  
    deleteCategory: async (parent, { categoryID }) => {
      return await Category.findOneAndDelete(
        { _id: categoryID },
        // { $pull: { categories: category._Id } },
        { new: true }
      );
    },
  
    deleteTransaction: async (parent, { transactionID }) => {
      return await Transaction.findOneAndDelete(
        { _id: transactionID },
        // { $pull: { transactions: transaction._Id } },
        { new: true }
      );
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    }
  },

  
};