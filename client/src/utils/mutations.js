import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!) {
    addUser(username: $username) {
      _id
      username
      email
      budgets
    }
  }
`;


export const ADD_BUDGET = gql`
  mutation addBudget($name: String!) {
    addBudget(name: $name) {
      _id
      name
      totalAmount
      budgetPeriod
      categories
    }
  }
`;


export const ADD_CATEGORY = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
      _id
      name
      budgetAmount
      totalBudget
      transactions
    }
  }
`;


export const ADD_TRANSACTION = gql`
  mutation addTransaction($name: String!) {
    addTransaction(name: $name) {
      _id
      amount
      category
      description
      date
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($userId: ID, $username: String, $email: String) {
    updateUser(userID: $userId, username: $username, email: $email) {
      _id
      username
      email
      budgets {
        _id
        name
        amount
      }
    }
  }
`;

export const UPDATE_BUDGET = gql`
  mutation UpdateBudget($budgetId: ID, $name: String, $amount: Int, $startDate: String, $endDate: String, $budgetPeriod: String) {
    updateBudget(budgetID: $budgetId, name: $name, amount: $amount, startDate: $startDate, endDate: $endDate, budgetPeriod: $budgetPeriod) {
      name
      amount
      startDate
      endDate
      budgetPeriod
      categories {
        _id
        name
        budgetAmount
      }
    }
  }
`;

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($categoryId: ID, $name: String, $budgetAmount: Int) {
    updateCategory(categoryID: $categoryId, name: $name, budgetAmount: $budgetAmount) {
      _id
      name
      budgetAmount
      transactions {
        _id
        description
        amount
        date
      }
    }
  }
`;

export const UPDATE_TRANSACTION = gql`
mutation UpdateTransaction($transactionId: ID, $description: String, $amount: Int, $date: String) {
  updateTransaction(transactionID: $transactionId, description: $description, amount: $amount, date: $date) {
    _id
    description
    amount
    date
  }
}
`;


export const DELETE_USER = gql`
  mutation deleteUser($userId: ID, $email: String, $username: String, $password: String, $budget: String) {
    deleteUser(userID: $userId, email: $email, username: $username, password: $password, budget: $budget) {
      _id
      email
      username
      budgets {
        _id
        name
        amount
        startDate
        endDate
        budgetPeriod
      }
    }
  }
`;


export const DELETE_BUDGET = gql`
  mutation deleteBudget($budgetId: ID, $name: String, $totalAmount: Int, $startDate: String, $budgetPeriod: String, $categories: String) {
    deleteBudget(budgetID: $budgetId, name: $name, totalAmount: $totalAmount, startDate: $startDate, budgetPeriod: $budgetPeriod, categories: $categories) {
      _id
      name
      amount
      startDate
      endDate
      budgetPeriod
      categories {
        _id
        name
        budgetAmount
      }
    }
  }
`;


export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($categoryId: ID, $name: String, $budgetAmount: Int, $budget: Int, $transactions: String) {
    deleteCategory(categoryID: $categoryId, name: $name, budgetAmount: $budgetAmount, budget: $budget, transactions: $transactions) {
      _id
      name
      budgetAmount
      transactions {
        _id
        description
        amount
        date
      }
    }
  }
`;


export const DELETE_TRANSACTION = gql`
  mutation DeleteTransaction($transactionId: ID, $description: String, $amount: Int, $date: String) {
    deleteTransaction(transactionID: $transactionId, description: $description, amount: $amount, date: $date) {
      _id
      description
      amount
      date
    }
  }
`;