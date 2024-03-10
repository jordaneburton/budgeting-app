import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import Col from 'react-bootstrap/esm/Col';
// import PageHeader from '../components/PageHeader';
import NavBar from '../components/NavBar';

function DashboardPage () {
  const { _, setPage } = usePageContext();
  useEffect(() => {
    setPage("Dashboard");
    window.scrollTo(0, 0);
  }, []);

  // const page = {
  //   header: "CURRENT_BUDGET_NAME"
  // }
  return (
    <>
    <NavBar />
    <Col xs={12} md={9} className='p-0'>
      {/* <PageHeader header={page.header}/> */}
      <h2>
      Dashboard
      </h2>
    </Col>
    </>
  );
}

export default DashboardPage