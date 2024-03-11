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
      amount
      startDate
      endDate
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
      transactions
    }
  }
`;


export const QUERY_TRANSACTIONS = gql`
  query allTransactions {
    transactions {
      _id
      amount
      description
      date
    }
  }
`;