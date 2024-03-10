import { Outlet } from 'react-router-dom';
import { PageProvider } from './utils/PageContext';
import './scss/App.scss'
import './App.css'
// only import the components you're using

// import NavBar for desktop/tablet
// import NavCanvas for mobile
import NavBar from './components/NavBar';
import NavCanvas from './components/NavCanvas';

function App() {
    return (
      <>
        <PageProvider>
          <NavBar />
          {/* <NavCanvas classList='d-md-none' /> */}
          <Outlet />
        </PageProvider>
      </>
    )
  }
  
  export default App