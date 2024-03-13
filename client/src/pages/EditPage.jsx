import { useEffect, useState } from 'react';

import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';


import NavBar from '../components/NavBar';
import NavCanvas from '../components/NavCanvas';
import Header from '../components/Header';
import PillButtons from '../components/PillButtons';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { QUERY_BUDGET, QUERY_BUDGETS, QUERY_BY_USER } from '../utils/queries';
import { UPDATE_BUDGET } from '../utils/mutations';
import auth from '../utils/auth';


function EditPage() {
  const { _, setPage } = usePageContext();
  const [inputs, setInputs] = useState('');
  const [selectedBudgetName, setSelectedBudgetName] = useState('');
  const selectedBudget = '';
  useEffect(() => {
    setPage("Edit");
    window.scrollTo(0, 0);
  }, []);



  const { loading, error, data } = useQuery(QUERY_BY_USER, { variables: { userId: auth.getProfile().data._id } });
  // const [findbudget, { loading: budgetLoading, data: budgetData }] = useLazyQuery(QUERY_BUDGET)
  const budgets = data?.user.budgets || [];
  console.log(budgets);

  const [updateBudget] = useMutation(UPDATE_BUDGET);

  const page = {
    header: "Edit Budgets"
  }

  const onBudgetClick = async (selection) => {

    // Set the selected budget name
    const selectedBudget = budgets.find((budget) => budget._id === selection);
    setSelectedBudgetName(selectedBudget.name);
    




    // Fill form with attributes
    setInputs(() => ({ name: selectedBudget.name, startDate: selectedBudget.startDate, endDate: selectedBudget.endDate, amount: selectedBudget.amount }))
  }



  // const testData = data?.user.budgets[1] || [];


  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }))
  }



  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(inputs);
  // }


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateBudget({
        variables: {
          budgetID: selectedBudget._id,
          name: selectedBudget.name,
          startDate: selectedBudget.startDate,
          endDate: selectedBudget.endDate,
          amount: selectedBudget.amount
        }
      });
      alert("Budget updated successfully!");
    } catch (err) {
      alert("Failed to update budget. Please try again.");
    }
  };

  return (
    <>
      <NavBar />
      <Col xs={6} md={9} className='p-0' style={{ backgroundColor: "#FF5666", height: '12%', border: "2px solid white", }}>
        {/* <Header header={page.header}/> */}
        <h2>
          {selectedBudgetName}
        </h2>
        <Row>
          <Col xs={10} md={4} className='position-relative my-2 z-1'>
            {loading ? (
              <div>Loading...</div>
            ) : (
              budgets?.map((category, index) =>
                <PillButtons key={index} name={category.name} onClick={() => onBudgetClick(category._id)} />
              )
            )}
          </Col>
          <Col xs={10} md={8} className='position-relative my-2 z-1 d-flex flex-wrap flex-column align-items-end'>

            <div className='form-container d-flex flex-wrap flex-column pill-button justify-content-center bg-info w-75 mb-4'>
              {/* <h2 className='fw-semibold'>{budgets[0]?.name?.toUpperCase()}</h2> */}
              <form onSubmit={handleFormSubmit}>
                <label>Name:
                  <input
                    type="text"
                    name="name" // Ensure you provide the correct name attribute here
                    value={inputs.name || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>Start Date:
                  <input
                    type="text"
                    name="startDate" // Ensure you provide the correct name attribute here
                    value={inputs.startDate || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>End Date:
                  <input
                    type="text"
                    name="endDate" // Ensure you provide the correct name attribute here
                    value={inputs.endDate || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>Amount:
                  <input
                    type="text"
                    name="amount" // Ensure you provide the correct name attribute here
                    value={inputs.amount || ""}
                    onChange={handleChange}
                  />
                </label>
                <Button 
                variant="primary"
                onSubmit={handleFormSubmit}
                >Update</Button>{' '}
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