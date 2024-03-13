import React from 'react';
import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

// import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';
import PillButtons from '../components/PillButtons';
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_BUDGET, QUERY_BUDGETS } from '../utils/queries';



function SelectPage() {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Select");
    window.scrollTo(0, 0);
  }, []);

  const { loading, data } = useQuery(QUERY_BUDGETS);
  const [findbudget, { loading: budgetLoading, data: budgetData }] = useLazyQuery(QUERY_BUDGET)
  const budgets = data?.budgets || [];
  console.log(budgets);

  const page = {
    header: "Edit Budgets"
  }

  const onClick = async (selection) => {
    await findbudget({
      variables: { budgetId: selection }
    });

    // Set the selected budget name
    const selectedBudget = budgets.find((budget) => budget._id === selection);
    setSelectedBudgetName(selectedBudget.name);
  }
  // const page = {
  //   header: "CURRENT_BUDGET_NAME"
  // }

  

  return (
    <>
      <NavBar />
      <Col xs={12} md={9} className='p-0'>
        {/* <PageHeader header={page.header}/> */}
        <h2>
          Budget Name
        </h2>
        <Row>
          <Col xs={10} md={4} className='position-relative my-2 z-1'>
            {loading ? (
              <div>Loading...</div>
            ) : (
              budgets.map((category, index) =>
                <PillButtons key={index} name={category.name} onClick={() => onClick(category._id)} />
              )
            )}
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default SelectPage