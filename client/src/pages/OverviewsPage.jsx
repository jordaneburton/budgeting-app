import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
// import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BY_USER } from '../utils/queries';
import PieChart from '../components/TransactionPieChart';
import PillButtons from '../components/PillButtons';
import auth from '../utils/auth';

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
  const { loading, error, data } = useQuery(QUERY_BY_USER, { variables: { userId: auth.getProfile().data._id } });

  const [currentBudget, setCurrentBudget] = useState(data?.user.budgets[0].name || "")
  const [budgetData, setBudgetData] = useState(data?.user.budgets[0] || {})
  useEffect(() => {
    console.log(data)
    if (!currentBudget) { setCurrentBudget(data?.user.budgets[0].name) }
    console.log(currentBudget)
    setBudgetData(data?.user.budgets.find((item) => item.name === currentBudget))
  }, [currentBudget,data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  const testData = data?.user.budgets
  const categories = budgetData?.categories; // Adjust based on your server schema

  console.log({categories, budgetData, testData})
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
          <PieChart data={categories || []} />
        </div>
        <Col xs={10} md={4} className='position-relative my-2 z-1'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            testData.map((category, index) =>
              <PillButtons key={index} name={category.name} onClick={() => setCurrentBudget(category.name)} />
            )
          )}
        </Col>
      </Col>
    </>
  );
};


export default OverviewsPage