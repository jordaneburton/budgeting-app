import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
// Import our custom CSS
import './scss/styles.scss'

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
// include pages here
import ErrorPage from './pages/ErrorPage';
import DashboardPage from './pages/DashboardPage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
        // REFACTOR THESE LINES AFTER PAGES ARE CREATED
        {
          index: 'Select',
          element: <DashboardPage />,
        },
        {
          index: 'Edit',
          element: <DashboardPage />,
        },
        {
          index: 'Overviews',
          element: <DashboardPage />,
        },
        {
          index: 'Profile',
          element: <DashboardPage />,
        },
      ],
    },
  ]);
  
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )
  