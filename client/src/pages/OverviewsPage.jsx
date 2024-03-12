import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_BY_USER } from '../utils/queries';
import PieChart from '../components/TransactionPieChart';
import PillButtons from '../components/PillButtons';
import auth from '../utils/auth';
import Row from 'react-bootstrap/esm/Row';

// import TransactionLineGraph from '../components/TransactionLineGraph';

function OverviewsPage() {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Overviews");
    window.scrollTo(0, 0);
  }, []);
  
  const { loading, error, data } = useQuery(QUERY_BY_USER, { variables: { userId: auth.getProfile().data._id } });
  
  const [currentBudget, setCurrentBudget] = useState(data?.user.budgets[0]?.name || "")
  const [budgetData, setBudgetData] = useState(data?.user.budgets[0] || {})
  useEffect(() => {
    console.log(data)
    if (!currentBudget) { setCurrentBudget(data?.user.budgets[0]?.name) }
    console.log(currentBudget)
    setBudgetData(data?.user.budgets.find((item) => item.name === currentBudget))
  }, [currentBudget,data]);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  const testData = data?.user.budgets
  const categories = budgetData?.categories; // Adjust based on your server schema
  
  console.log({categories, budgetData, testData})
  const page = {
    header: currentBudget
  }
  return (
    <>
      <NavBar />
      <Col xs={12} md={9} className='p-0'>
        <Header header={page.header}/>
       

        {/* <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <h2>Category Budget Distribution</h2>
          <PieChart data={categories || []} />
        </div> */}
        <Row>
        <Col xs={10} md={4} className='position-relative my-2 z-1'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            testData.map((budget, index) =>
              <PillButtons key={index} name={budget.name} onClick={() => setCurrentBudget(budget.name)} />
            )
          )}
        </Col>
        <Col xs={10} md={8}  className='position-relative my-2 z-1 d-flex flex-wrap flex-column align-items-end'>
        <h2>Category Budget Distribution</h2>
          <PieChart data={categories || []} />
        </Col>
        </Row>
      </Col>
    </>
  );
};


export default OverviewsPage