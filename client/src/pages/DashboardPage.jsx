import { useState, useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Spinner from 'react-bootstrap/Spinner';

import NavBar from '../components/NavBar';
import NavCanvas from '../components/NavCanvas';
import Header from '../components/Header';
import PillButtons from '../components/PillButtons';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_BUDGETS } from '../utils/queries';
import { QUERY_BY_USER } from '../utils/queries';
import { QUERY_DASHBOARD } from '../utils/dashboardCalls';
import auth from '../utils/auth';

function DashboardPage () {
  const { _, setPage } = usePageContext();

  // const { loading, data } = useQuery(QUERY_BUDGETS);
  // const budgets = data?.budgets || [];

  const { loading, error, data } = useQuery(QUERY_BY_USER, { variables: { userId: auth.getProfile().data._id } });

  const [currentBudget, setCurrentBudget] = useState(data?.user.budgets[0]?.name || "")
  const [budgetData, setBudgetData] = useState(data?.user.budgets[0] || {})
  useEffect(() => {
    console.log(data)
    if (!currentBudget) { setCurrentBudget(data?.user.budgets[0]?.name) }
    console.log(currentBudget)
    setBudgetData(data?.user.budgets.find((item) => item.name === currentBudget))
  }, [currentBudget,data]);
  
  useEffect(() => {
    setPage("Dashboard");
    window.scrollTo(0, 0);
    // setBudget(budgets[0]);
  }, []);
  

  // make sure to import budget from selected budget
  const page = {
    header: currentBudget
  }

  const userData = data?.user.budgets
  const currentCategories = budgetData?.categories;
  // const transactions = categories.map((categ, index) => {
  //   return {...categ.transactions}
  // })

  console.log(userData, currentCategories);

  const testData = [{
      name: 'food'
    },
    {
      name: 'housing'
    },
    {
      name: 'transportation'
    },
    {
      name: 'savings'
    },
  ]
  
  if (error) return (
    <>
      <NavBar />
      <Col xs={12} md={9} className='p-0 position-relative'>
        <Header header={page.header}/>
        <div className='bg-primary primary-bar d-none d-md-block position-absolute z-0 w-100'>Error: {error.message}</div>
      </Col>
    </>
  );
  return (
    <>
    <NavBar />
    <Col xs={12} md={9} className='p-0 position-relative'>
      <Header header={page.header}/>
      {loading ? 
          <div className='d-flex flex-wrap w-100 justify-content-center my-5'><Spinner animation="border" variant="primary" /></div>
        : 
          <div className='bg-primary primary-bar d-none d-md-block position-absolute z-0 w-100'></div>
      }
      {/* <h2>
      Dashboard
      </h2> */}
      <Row className='m-0'>
        <Col xs={10} md={4} className='position-relative p-0 my-2 z-1'>
          {loading ? (
              <div className='d-flex flex-wrap w-100 justify-content-center my-5'><Spinner animation="border" variant="primary" /></div>
            ) : (
              currentCategories?.map((categ, index) => 
                <PillButtons key={index} name={categ.name} onClick={() => console.log('onclick function')}/>
              )
            )}
        </Col>

        <Col xs={10} md={8}  className='position-relative p-0 my-2 z-1 d-flex flex-wrap flex-column align-items-end'>
          <div className='d-flex flex-wrap flex-column pill-button justify-content-center rounded-start-pill bg-info w-75 mb-4'>
            <h2 className='fw-semibold'>{ testData[0].name.toUpperCase() }</h2>
          </div>
        </Col>
      </Row>
    </Col>
    <NavCanvas />
    </>
  );
}

export default DashboardPage