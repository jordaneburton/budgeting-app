import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
// import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { CATEGORIES_QUERY } from '../utils/queries';
import TransactionPieChart from '../components/TransactionPieChart';
import TransactionLineGraph from '../components/TransactionLineGraph';

function OverviewsPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Overviews");
    window.scrollTo(0, 0);
  }, []);

  // const page = {
  //   header: "CURRENT_BUDGET_NAME"
  // }
  return (
    <>
    <NavBar />
    <Col xs={12} md={9} className='p-0'>
      {/* <PageHeader header={page.header}/> */}
      <h2>
      Overviews
      </h2>
      <div>
                    <h2>Transactions by Category</h2>
                    <TransactionPieChart transactions={transactions} />
                    <TransactionLineGraph transactions={transactions} />
                  </div>
    </Col>
    </>
  );
              };


export default OverviewsPage