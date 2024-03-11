import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

import { useQuery } from '@apollo/client';
import { QUERY_BUDGETS } from '../utils/queries';

function DashboardPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Dashboard");
    window.scrollTo(0, 0);
  }, []);

  const { loading, data } = useQuery(QUERY_BUDGETS);
  const budgets = data?.budgets || [];

  // make sure to import budget from selected budget
  const page = {
    header: "CURRENT_BUDGET_NAME"
  }

  return (
    <>
    <NavBar />
    <Col xs={12} md={9} className='p-0'>
      <Header header={page.header}/>
      <h2>
      Dashboard
      </h2>
      {loading ? (
            <div>Loading...</div>
          ) : (
            <div>
              <p>Here's our budgets: </p>
              <div>{budgets}</div>
            </div>
          )}
    </Col>
    </>
  );
}

export default DashboardPage