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



            
                const { loading, error, data } = useQuery(CATEGORIES_QUERY);
              
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error: {error.message}</p>;
              
                const pieChartData = {
                  labels: data.categories.map((category) => category.name),
                  datasets: [
                    {
                      data: data.categories.map((category) => category.totalAmount),
                      backgroundColor: generateRandomColors(data.categories.length),
                      hoverBackgroundColor: generateRandomColors(data.categories.length),
                    },
                  ],
                };
              
                
              };
              
              const generateRandomColors = (count) => {
                // Generate random colors (you may use a library for better color generation)
                const colors = [];
                for (let i = 0; i < count; i++) {
                  colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
                }
                return colors;
              
              

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