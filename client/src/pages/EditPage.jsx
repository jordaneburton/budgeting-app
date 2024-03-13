
import { useEffect, useState } from 'react';

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
  const [inputs, setInputs] = useState({});
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


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }


    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    


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
              <div className='form-container d-flex flex-wrap flex-column pill-button justify-content-center  bg-info w-75 mb-4'>
                <h2 className='fw-semibold'>{budgets[0]?.name?.toUpperCase()}</h2>
                <form onSubmit={handleSubmit}>
      <label>Name:
      <input 
        type="text" 
        name="username" 
        value={testData?.amount || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Time Frame:
        <input 
          type="number" 
          name="age" 
          value={testData?.timeFrame || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Time Frame:
        <input 
          type="number" 
          name="age" 
          value={testData?.timeFrame || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Time Frame:
        <input 
          type="number" 
          name="age" 
          value={testData?.timeFrame || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Time Frame:
        <input 
          type="number" 
          name="age" 
          value={testData?.timeFrame || ""} 
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