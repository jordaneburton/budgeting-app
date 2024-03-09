import { Outlet } from 'react-router-dom';
// import { PageProvider } from './utils/PageContext';
import './scss/App.scss'
import './App.css'
// only import the components you're using

function App() {
    return (
      <>
        {/* <PageProvider> */}
          {/* <NavCanvas /> */}
          <Outlet />
        {/* </PageProvider> */}
      </>
    )
  }
  
  export default App