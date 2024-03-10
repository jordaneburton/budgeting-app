import { useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
// import PageHeader from '../components/PageHeader';

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
      {/* <PageHeader header={page.header}/> */}
      <h2>
      Dashboard
      </h2>
    </>
  );
}

export default DashboardPage