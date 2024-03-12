
import { useEffect } from 'react';

import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';


import NavBar from '../components/NavBar';
import NavCanvas from '../components/NavCanvas';
import Header from '../components/Header';
import PillButtons from '../components/PillButtons';



import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_BUDGET, QUERY_BUDGETS } from '../utils/queries';


function EditPage() {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Edit");
    window.scrollTo(0, 0);
  }, []);

  

    const { loading, data } = useQuery(QUERY_BUDGETS);
    const [findbudget, {loading: budgetLoading, data: budgetData}] = useLazyQuery(QUERY_BUDGET)
    const budgets = data?.budgets || [];
    console.log(budgets);

    const page = {
      header: "Edit Budgets"
    }
const onClick = async (selection) => {
  await findbudget( {
    variables: {budgetId: selection}
   } )
}
    const testData = budgetData?.budget 
    


    return (
      <>
        <NavBar />
        <Col xs={6} md={9} className='p-0' style={{ backgroundColor: "#FF5666", height: '10%', border: "2px solid white", }}>
          {/* <Header header={page.header}/> */}
          <h2>
            Edit Budgets
          </h2>
          <Row>
            <Col xs={10} md={4} className='position-relative my-2 z-1'>
              {loading ? (
                <div>Loading...</div>
              ) : (
                budgets.map((category, index) =>
                  <PillButtons key={index} name={category.name} onClick = {() => onClick(category._id)}/>
                )
              )}
            </Col>
            <Col xs={10} md={8} className='position-relative my-2 z-1 d-flex flex-wrap flex-column align-items-end'>
              <div className='d-flex flex-wrap flex-column pill-button justify-content-center rounded-start-pill bg-info w-75 mb-4'>
                <h2 className='fw-semibold'>{budgets[0].name.toUpperCase()}</h2>
                <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={testData.amount || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
              </div>
            </Col>
          </Row>

        </Col>
        <NavCanvas />
      </>
    );
  }
 


export default EditPage;