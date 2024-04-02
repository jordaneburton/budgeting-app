import { useState, useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Spinner from 'react-bootstrap/Spinner';

import NavBar from '../components/NavBar';
import NavCanvas from '../components/NavCanvas';
import Header from '../components/Header';
import PillButtons from '../components/PillButtons';
import TransactionBar from '../components/TransactionBar';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_BUDGET } from '../utils/queries';
import { QUERY_BY_USER } from '../utils/queries';
import auth from '../utils/auth';

function DashboardPage () {
  const { _, currentBudgetID, setPage, selectBudget } = usePageContext();

  const [ transactionSum, setSum ] = useState(0);
  const [ categoryLimit, setLimit ] = useState(0);
  const [ transactions, setTransactions ] = useState([]);

  // const { loading, data } = useQuery(QUERY_BUDGETS);
  // const budgets = data?.budgets || [];

  const { loading, error, data } = useQuery(QUERY_BY_USER, { variables: { userId: auth.getProfile().data._id } });

  const [currentBudget, setCurrentBudget] = useState(data?.user.budgets[0]?.name || "")
  const [currentCategory, setCurrentCategory] = useState(data?.user.budgets[0]?.categories[0] || {})
  const [budgetData, setBudgetData] = useState(data?.user.budgets[0] || {})
  useEffect(() => {
    // console.log(data)
    if (!currentBudget) { setCurrentBudget(data?.user.budgets[0]?.name) }
    console.log(currentBudget)
  }, [currentBudget]);

  useEffect(() => {
    // console.log(data)
    if (!currentCategory) { setCurrentCategory(data?.user.budgets[0]?.categories[0]) }
    console.log(currentCategory)
  }, [currentCategory]);
  
  useEffect(() => {
    setPage("Dashboard");
    window.scrollTo(0, 0);
    // setBudget(budgets[0]);
  }, []);
  
  useEffect(() => {
    setSum(transactions?.reduce((total, num) => {
      return total + num.amount;
    }, 0));
  }, [currentBudget, data])

  useEffect(() => {
    if (!budgetData) { setLimit(data?.user.budgets[0]?.categories[0]?.budgetAmount) }
  }, [currentBudget, data])

  useEffect(() => {
    if (!transactions) setTransactions(budgetData?.categories.map((transac, index) => {
      return {...transac};
    }));
  }, [])

  // make sure to import budget from selected budget
  const page = {
    header: currentBudget
  }

  const userData = data?.user.budgets
  const currentCategories = budgetData?.categories;
  const currentTransactions = currentCategories?.map((categ, index) => {
    return {...categ.transactions}
  })


  console.log(transactions);
  console.log('Heres the category: ' + currentCategory.name);
  
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
      <Row className='m-0'>
        <Col xs={10} md={4} className='position-relative p-0 my-2 z-1'>
          {loading ? (
              <div className='d-flex flex-wrap w-100 justify-content-center my-5'><Spinner animation="border" variant="primary" /></div>
            ) : (
              currentCategories?.map((categ, index) => 
                <PillButtons key={index} name={categ.name} onClick={() => {
                  setCurrentBudget(categ.name);
                  setCurrentCategory(categ);
                  setTransactions(categ.transactions)
                }}/>
              )
            )}
        </Col>

        <Col xs={12} md={8}  className='position-relative p-0 my-2 z-1 d-flex flex-wrap flex-column align-items-end'>
        {(transactionSum && currentCategory) 
        ? <div className='d-flex flex-wrap flex-column pill-button justify-content-center rounded-start-pill bg-info w-75 mb-4'>  
            <h2 className='fw-semibold'>
              ${currentCategory.budgetAmount - transactionSum} left!
            </h2>
            <h3>(${transactionSum} spent)</h3>
          </div>
        : <div className='d-flex flex-wrap flex-column pill-button justify-content-center rounded-start-pill bg-info w-75 mb-4'>
            <h2 className='fw-semibold'>
              ${currentCategory.budgetAmount} left!
            </h2>
            <h3>(No money spent!)</h3>
          </div>
        }
        <div className='d-flex flex-wrap flex-column w-100 align-content-end'>
          <div className='d-flex flex-wrap flex-row pill-button justify-content-center align-content-center rounded-start-pill border border-4 border-end-0 border-info bg-light w-75 mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-plus-circle mx-2" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
            <h3>Add Purchase</h3>
          </div>
        </div>
        {(transactions)
        ? (
          <div className='d-flex flex-wrap flex-column w-100 align-content-end'>
              {transactions?.map((transac, index) => {
                return (
                  <>
                  {/* // <PillButtons key={index} name={transac.name} />
                  <div>
                    <p>Description: {transac.description} | ${transac.amount}</p>
                  </div> */}
                    <TransactionBar key={index} description={transac.description} onClick={() => {console.log('Clicked a transaction')}}/>
                  </>
                )
              })}
          </div>
          )
        : <div className='d-flex flex-wrap w-100 justify-content-center my-5'><Spinner animation="border" variant="primary" /></div>
        }
        </Col>
      </Row>
    </Col>
    <NavCanvas />
    </>
  );
}

export default DashboardPage