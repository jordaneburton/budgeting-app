const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
  }
  type Transaction {
    _id: ID
    amount: Int
    description: String
    date: String
  }
  type Budget {
    _id: ID
    name: String
    totalAmount: Int
    StartDate: String
    budgetPeriod: String
    categories: [Category]
  }
  type Category {
    _id: ID
    name: String
    budgetAmount: Int
    budget: ID
    transactions: [Transaction]
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
    addUser(email: String, username: String, password: String): Auth

    addTransaction(categoryid: ID, amount: Int, description: String, date: String): Transaction



    addBudget(userid: ID, name: String, totalAmount: Int, startDate: String, budgetPeriod: String, categories: [ID]): Budget

    addCategory(budgetid: ID, name: String, budgetAmount: Int, transactions: String): Category

    updateUser(UserID: ID, Email: String, Name: String): User
    updateTransaction(categoryID: ID, amount: Int, description: String, date: String): Transaction
    updateBudget(BudgetID: ID, Amount: Float, StartDate: String, EndDate: String): Budget
    updateCategory(CategoryID: ID, Name: String, Type: String): Category
    deleteUser(email: String, username: String, password: String, budget: String): User
    deleteTransaction(categoryID: ID, amount: Int, description: String, date: String): Transaction
    deleteBudget(userid: ID, name: String, totalAmount: Int, startDate: String, budgetPeriod: String, categories: String): Budget
    deleteCategory(budgetid: ID, name: String, budgetAmount: Int, budget: Int, transactions: String): Category

  }
`;
module.exports = typeDefs;