import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
// import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';
import PieChart from '../components/TransactionPieChart';
import PillButtons from '../components/PillButtons';

// import TransactionLineGraph from '../components/TransactionLineGraph';

function OverviewsPage() {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Overviews");
    window.scrollTo(0, 0);
  }, []);

  // const page = {
  //   header: "CURRENT_BUDGET_NAME"
  // }

    const { loading, error, data } = useQuery(QUERY_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const categories = data.categories; // Adjust based on your server schema

    return (
      <>
        <NavBar />
        <Col xs={12} md={9} className='p-0'>
          {/* <PageHeader header={page.header}/> */}
          <h2>
            Overviews
          </h2>
          <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
            <h2>Category Budget Distribution</h2>
            <PieChart data={categories} />
          </div>
          
        </Col>
      </>
    );
  };


  export default OverviewsPage