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

import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { QUERY_BUDGET } from '../utils/queries';
import { QUERY_BY_USER } from '../utils/queries';
import auth from '../utils/auth';

function DashboardPage () {
  // CONTEXTS / PROVIDERS
  const { _, currentBudgetID, setPage, selectBudget } = usePageContext();

  // INITIAL STATE VARIABLES / "useState" INVOKES
  const [ transactionSum, setSum ] = useState(0);
  const [ categoryLimit, setLimit ] = useState(0);
  const [ transactions, setTransactions ] = useState([]);
  const [ currentSelects, setSelects ] = useState([]);
  const [ viewCateg, setViewCateg ] = useState(false);
  const [ currentBudget, setCurrentBudget ] = useState("Select a Budget");

  // QUERIES TO MONGOOSE DATABASE
  const { loading, error, data } = useQuery(QUERY_BY_USER, { variables: { userId: auth.getProfile().data._id } });
  const [ getBudgets, { budgetsLoading, budgetsError, budget }] = useLazyQuery(QUERY_BUDGET);

  const [currentCategory, setCurrentCategory] = useState(data?.user.budgets[0]?.categories[0] || {})
  const [budgetData, setBudgetData] = useState(data?.user.budgets[0] || {});

  // "useEffect" INVOKES
  useEffect(() => {
    if (!loading) { 
      setSelects(data?.user.budgets)
      console.log("Populated Budget Buttons");
    }
  }, [])

  useEffect(() => {
    // console.log(data)
    if (!currentBudget) { setCurrentBudget(data?.user.budgets[0]?.name) }
  }, [currentBudget]);

  useEffect(() => {
    // console.log(data)
    if (!currentCategory) { setCurrentCategory(data?.user.budgets[0]?.categories[0]) }
  }, [currentCategory]);
  
  useEffect(() => {
    setPage("Dashboard");
    window.scrollTo(0, 0);
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

  // console.log(transactions);
  // console.log('Heres the category: ' + currentCategory.name);
  
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
          <Row className='m-0'>
            <Col xs={10} md={4} className='position-relative p-0 my-2 z-1'>
              {(viewCateg) ?
                (
                  <div onClick={() => { 
                    setViewCateg(false);
                    setSelects(data?.user.budgets);
                  }} className='d-flex flex-wrap bg-secondary text-white justify-content-start align-content-center rounded-end-pill mb-4'
                    style={{ height: `5rem` }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-arrow-left-circle-fill mx-4 align-middle" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                    </svg>
                    <h2 className='fw-semibold align-middle'>BACK</h2>
                  </div>
                ) : (
                  <div className='d-none'></div>
                )
              }
              {
                currentSelects?.map((selects) => {
                  if (selects.categories) return (
                    <PillButtons key={selects.name} name={selects.name} onClick={() => {
                      setViewCateg(true);
                      if (selects.categories) {
                        console.log("Selected Budget")
                        setCurrentBudget(selects.name);
                        setSelects(selects.categories);
                      }
                      console.log("Current Selects:");
                      console.log(currentSelects);
                    }}
                    />
                  )

                  if (selects.transactions) return (
                    <PillButtons key={selects.name} name={selects.name} onClick={() => {
                      if (selects.transactions) { 
                        console.log("Selected Category")
                        setCurrentCategory(selects.name);
                        setTransactions(selects.transactions || []) 
                      }
                      console.log("Current Selects:");
                      console.log(currentSelects);
                    }}
                    />
                  )
                })
              }
            </Col>
        
          </Row>
      }
    </Col>
    <NavCanvas />
    </>
  );
}

export default DashboardPage