const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    budgets: [Budget]
  }
  type Budget {
    _id: ID
    name: String
    amount: Int
    startDate: String
    endDate: String
    budgetPeriod: String
    categories: [Category]
  }

  type Category {
    _id: ID
    name: String
    budgetAmount: Int
    transactions: [Transaction]
  }
  type Transaction {
    _id: ID
    amount: Int
    description: String
    date: String
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(userID: ID): User
    users: [User]
    transaction(TransactionID: ID): Transaction
    transactions: [Transaction]
    budget(BudgetID: ID): Budget
    budgets: [Budget]
    category(CategoryID: ID): Category
    categories: [Category]
  }
  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(email: String, username: String, password: String, budgets: [String]): Auth

    addBudget(userid: ID, name: String, amount: Int, startDate: String, endDate: String, budgetPeriod: String, categories: [ID]): Budget

    addCategory(budgetid: ID, name: String, budgetAmount: Int, transactions: [ID]): Category

    addTransaction(categoryid: ID, amount: Int, description: String, date: String): Transaction

    updateUser(userID: ID, email: String, username: String): User

    updateTransaction(transactionID: ID, amount: Int, description: String, date: String): Transaction

    updateBudget(budgetID: ID, name: String, amount: Int, startDate: String, endDate: String, budgetPeriod: String): Budget

    updateCategory(categoryID: ID, name: String, budgetAmount: Int): Category

    deleteUser(userID: ID, email: String, username: String, password: String, budget: String): User

    deleteTransaction(transactionID: ID, amount: Int, description: String, date: String): Transaction

    deleteBudget(budgetID: ID, name: String, totalAmount: Int, startDate: String, budgetPeriod: String, categories: String): Budget


    deleteCategory(categoryID: ID, name: String, budgetAmount: Int, budget: Int, transactions: String): Category

    login(email: String, password: String): Auth

  }
`;
module.exports = typeDefs;