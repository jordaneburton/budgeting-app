import { gql } from '@apollo/client';

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