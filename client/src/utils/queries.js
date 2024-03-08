import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      budgets
    }
  }
`;


export const QUERY_BUDGETS = gql`
  query allBudgets {
    budgets {
      _id
      name
      totalAmount
      budgetPeriod
      categories
    }
  }
`;


export const QUERY_CATEGORIES = gql`
  query allCategories {
    categories {
      _id
      name
      budgetAmount
      totalBudget
      transactions
    }
  }
`;


export const QUERY_TRANSACTIONS = gql`
  query allTransactions {
    transactions {
      _id
      amount
      category
      description
      date
    }
  }
`;