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
import { QUERY_DASHBOARD } from '../utils/dashboardCalls';

function DashboardPage () {
  const { _, setPage } = usePageContext();
  const { useBudget, setBudget} = useState();


  // TEMPORARY CODE PIECE
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiam9yZGFuZS5idXJ0b25AZ21haWwuY29tIiwiX2lkIjoiNjVmMDk1NjZlMzY2N2Q0YTA2MGVmMzNiIn0sImlhdCI6MTcxMDI2NTcwMiwiZXhwIjoxNzEwMzUyMTAyfQ.Erbx-UyTGNIyfnDVViR2mj-Hmxu4Qvz0ESFK2bHu2o0'

  
  const { loading, data } = useQuery(QUERY_BUDGETS, {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    variables: {"budgetId": "65f097b4e3667d4a060ef33e"}
  });
  const categories = data?.budgets[0].categories || [];
  console.log(categories);
  
  useEffect(() => {
    setPage("Dashboard");
    window.scrollTo(0, 0);
    // setBudget(budgets[0]);
  }, []);
  

  // make sure to import budget from selected budget
  const page = {
    header: "CURRENT_BUDGET_NAME"
  }

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
              <div></div>
            ) : (
              categories.map((category, index) => 
                <PillButtons key={index} name={category.name}/>
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