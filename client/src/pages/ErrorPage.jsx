import { useEffect } from 'react';
// import { usePageContext } from '../utils/PageContext';
import NavBar from '../components/NavBar';

function ErrorPage () {
//      NON-FUNCTIONAL
//   const { _, setPage } = usePageContext();
//   useEffect(() => {
//     setPage("Error")
//   }, []);

  return (
    <>
      <NavBar />
      <div className="container pt-4">
        error
      </div>
    </>
  );
}

export default ErrorPage