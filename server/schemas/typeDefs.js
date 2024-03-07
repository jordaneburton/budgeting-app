const typeDefs = `
  type User {
    UserID: ID!
    Email: String!
    Password: String!
    Name: String!
    CreationDate: String!
    Accounts: [Account]!
  }

  type Account {
    AccountID: ID!
    UserID: ID!
    AccountName: String!
    AccountType: String!
    Balance: Float!
    Transactions: [Transaction]!
  }

  type Transaction {
    TransactionID: ID!
    AccountID: ID!
    CategoryID: ID!
    Amount: Float!
    Type: String!
    Description: String
    Date: String!
  }

  type Budget {
    BudgetID: ID!
    UserID: ID!
    CategoryID: ID!
    Amount: Float!
    StartDate: String!
    EndDate: String!
  }

  type Category {
    CategoryID: ID!
    Name: String!
    Type: String!
  }

  type Query {
    user(UserID: ID!): User
    users: [User]
    account(AccountID: ID!): Account
    accounts: [Account]
    transaction(TransactionID: ID!): Transaction
    transactions: [Transaction]
    budget(BudgetID: ID!): Budget
    budgets: [Budget]
    category(CategoryID: ID!): Category
    categories: [Category]
  }

  type Mutation {
    addUser(Email: String!, Password: String!, Name: String!): User
    addAccount(UserID: ID!, AccountName: String!, AccountType: String!, Balance: Float!): Account
    addTransaction(AccountID: ID!, CategoryID: ID!, Amount: Float!, Type: String!, Description: String, Date: String!): Transaction
    addBudget(UserID: ID!, CategoryID: ID!, Amount: Float!, StartDate: String!, EndDate: String!): Budget
    addCategory(Name: String!, Type: String!): Category
    updateUser(UserID: ID!, Email: String, Name: String): User
    updateAccount(AccountID: ID!, AccountName: String, AccountType: String, Balance: Float): Account
    updateTransaction(TransactionID: ID!, Amount: Float, Description: String): Transaction
    updateBudget(BudgetID: ID!, Amount: Float, StartDate: String, EndDate: String): Budget
    updateCategory(CategoryID: ID!, Name: String, Type: String): Category
  }
`;
module.exports = typeDefs;
