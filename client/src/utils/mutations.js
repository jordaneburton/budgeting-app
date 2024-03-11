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
      amount
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
      transactions
    }
  }
`;


export const ADD_TRANSACTION = gql`
  mutation addTransaction($name: String!) {
    addTransaction(name: $name) {
      _id
      amount
      description
      date
    }
  }
`;