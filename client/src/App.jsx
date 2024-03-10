import { Outlet } from 'react-router-dom';
import { PageProvider } from './utils/PageContext';
import './scss/App.scss'
import './App.css'
// import the components you're using
import Row from 'react-bootstrap/Row';

import NavBar from './components/NavBar';

function App() {
    return (
      <>
        <Row className='vw-100 vh-100 m-0 p-0'>
          <PageProvider>
            <Outlet />
          </PageProvider>
        </Row>
      </>
    )
  }
  
  export default App