import { Outlet } from 'react-router-dom';
import { PageProvider, BudgetProvider } from './utils/PageContext';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './scss/App.scss'
import './App.css'

// import the components you're using
import Row from 'react-bootstrap/Row';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
    return (
      <>
      <ApolloProvider client={client}>
        <Row className='vw-100 vh-100 m-0 p-0 overflow-x-hidden'>
          <PageProvider>
            <BudgetProvider>
              <Outlet />
            </BudgetProvider>
          </PageProvider>
        </Row>
      </ApolloProvider>
      </>
    )
  }
  
  export default App