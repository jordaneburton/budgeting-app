import React from 'react'
import ReactDOM from 'react-dom/client'
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
import SelectPage from './pages/SelectPage';
import EditPage from './pages/EditPage';
import OverviewsPage from './pages/OverviewsPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';

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
      {
        path: 'Signup',
        element: <SignupPage />
      },
      {
        path: 'Select',
        element: <SelectPage />,
      },
      {
        path: 'Edit',
        element: <EditPage />,
      },
      {
        path: 'Overviews',
        element: <OverviewsPage />,
      },
      {
        path: 'Profile',
        element: <ProfilePage />,
      },
      {
        path: 'Login',
        element: <LoginPage />,
      },
    ],
  },
]);
  
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )
  