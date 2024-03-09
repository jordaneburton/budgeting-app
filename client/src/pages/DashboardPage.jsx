import { useEffect } from 'react';
// import { usePageContext } from '../utils/PageContext';
// import PageHeader from '../components/PageHeader';

function DashboardPage () {
  // const { _, setPage } = usePageContext();
  useEffect(() => {
    // setPage("Home");
    window.scrollTo(0, 0);
  }, []);

  // const page = {
  //   header: "WELCOME"
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