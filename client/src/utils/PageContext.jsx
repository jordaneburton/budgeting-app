import { createContext, useContext, useState } from 'react';

// Initialize new context for current page
const PageContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const usePageContext = () => useContext(PageContext);

// PageProvider component that holds initial state, returns provider component


export const BudgetContext = createContext();

const BudgetProvider = (props) => {
  const [currentBudget, setCurrentBudget] = useState({
    name: 'John',
    role: 'Admin',
    id: 142323,
  });

  return (
    <BudgetContext.Provider value={{ currentBudget: currentBudget }} {...props} />
  );
};





export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(
      {
        title: "Dashboard"
      }
  );

  // Function to update page state
  const setPage = (pageTitle) => {
    // Check if pageTitle matches valid page titles
    const validPages = [
        "Dashboard",
        "Select", 
        "Edit", 
        "Overviews", 
        "Profile", 
        "Error"
    ];
    const pageCheck = validPages.findIndex((page) => {
        return pageTitle.trim() == page;
    });

    if (pageCheck == -1) { return }

    // Update state with the students array with the newStudent
    setCurrentPage({ title: pageTitle });
  };

  // Provider components expect a value prop to be passed
  return (
    <PageContext.Provider value={{ currentPage, setPage }}>
      {/* Render children passed from props */}
      {children}
    </PageContext.Provider>
  );
};

export default BudgetProvider;