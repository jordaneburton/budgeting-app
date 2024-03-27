import { createContext, useContext, useState } from 'react';

// Initialize new context for current page
const PageContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const usePageContext = () => useContext(PageContext);

// PageProvider component that holds initial state, returns provider component

// Budget Context for selecting budgets

const BudgetContext = createContext();
export const useBudgetContext = () => useContext(BudgetContext);




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
        "Team", 
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

export const BudgetProvider = (props) => {
  const [currentBudget, setCurrentBudget] = useState({
    budgetID: null
  });

  const selectBudget = (budgetID) => {
    setCurrentBudget({ budgetID });
  };


  return (
    <BudgetContext.Provider value={{ currentBudget, selectBudget }} >
      {...props}
    </BudgetContext.Provider>
  );
};