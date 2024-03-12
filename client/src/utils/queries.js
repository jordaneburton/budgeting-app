import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      budgets {
        _id
        categories {
          _id
          transactions {
            _id
          }
        }
      }
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
      categories {
        _id
        transactions {
          _id
        }
      }
    }
  }
`;


export const QUERY_CATEGORIES = gql`
  query allCategories {
    categories {
      _id
      name
      budgetAmount
      transactions {
        _id
      }
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

export const QUERY_BUDGET = gql`
query Query($budgetId: ID) {
  budget(BudgetID: $budgetId) {
    _id
    name
    budgetPeriod
    startDate
    amount
    endDate
    categories {
      _id
      name
      budgetAmount
    }
  }
}
`;