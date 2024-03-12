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


function EditPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Edit");
    window.scrollTo(0, 0);
  }, []);

  const { loading, data } = useQuery(QUERY_BUDGETS);
  const budgets = data?.budgets || [];
  console.log(budgets);

  const page = {
    header: "Edit Budgets"
  }

  const testData = [{
    name: 'Budget 1'
  },
  {
    name: 'Budget 2'
  },
  {
    name: 'Budget 3'
  },
  {
    name: 'Budget 4'
  },
]


  return (
    <>
    <NavBar />
    <Col xs={6} md={9} className='p-0' style={{ backgroundColor: "#FF5666", height: '25%',  border: "2px solid white", }}>
      {/* <Header header={page.header}/> */}
      <h2>
      Edit Budgets
      </h2>
      <Row>
        <Col xs={10} md={5} className='position-relative my-2 z-1'>
          {loading ? (
              <div>Loading...</div>
            ) : (
                testData.map((category, index) => 
                  <PillButtons key={index} name={category.name}/>
                )
            )}
        </Col>
        <Col xs={10} md={7}  className='position-relative my-2 z-1 d-flex flex-wrap flex-column align-items-end'>
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

export default EditPage;