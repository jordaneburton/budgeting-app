import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

function DashboardPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Dashboard");
    window.scrollTo(0, 0);
  }, []);

  // make sure to import budget from selected budget
  const page = {
    header: "CURRENT_BUDGET_NAME"
  }
  return (
    <>
    <NavBar />
    <Col xs={12} md={9} className='p-0'>
      <Header header={page.header}/>
      <h2>
      Dashboard
      </h2>
    </Col>
    </>
  );
}

export default DashboardPage