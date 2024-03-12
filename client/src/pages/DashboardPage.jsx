import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';


import NavBar from '../components/NavBar';
import NavCanvas from '../components/NavCanvas';
import Header from '../components/Header';
import PillButtons from '../components/PillButtons';

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
  // console.log(budgets);

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
      <div className='bg-primary primary-bar position-absolute z-0 w-100'></div>
      {/* <h2>
      Dashboard
      </h2> */}
      <Row className='m-0'>
        <Col xs={10} md={4} className='position-relative p-0 my-2 z-1'>
          {loading ? (
              <div>Loading...</div>
            ) : (
                testData.map((category, index) => 
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