import { gql } from '@apollo/client';

export const QUERY_DASHBOARD = gql`
    query ExampleQuery($budgetId: ID) {
        budget(BudgetID: $budgetId) {
        amount
        _id
        name
        categories {
            name
            _id
            budgetAmount
            transactions {
                _id
                amount
                description
                }
            }
        }
    }
`;