import { useState, useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'

function NavBar() {   
    const { currentPage, setPage } = usePageContext();
    
    return (
        <>
            {/* Nav Bar for Desktop/Tablet */}
            <Col md={3} className="bg-primary sticky-top vh-100 d-none d-md-inline z-3">
                <Nav className="justify-content-center text-center h2 flex-column flex-grow-1 my-2"> 
                    { (currentPage.title === "Dashboard")
                        ? <Link to="/" className="nav-link py-2 rounded-pill" 
                            style={{ backgroundColor: "#FFF" }}
                            >Dashboard</Link>
                        : <Link to="/" className="nav-link py-2 rounded-pill" href="Dashboard">Dashboard</Link>
                    }
                    
                    { (currentPage.title === "Select") 
                        ? <Link to="/Select" className="nav-link py-2 rounded-pill" 
                            style={{ backgroundColor: "#FFF" }}
                            >Select Budget</Link> 
                        : <Link to="/Select" className="nav-link py-2 rounded-pill" href="Select">Select Budget</Link>
                    }  

                    { (currentPage.title === "Edit") 
                        ? <Link to="/Edit" className="nav-link py-2 rounded-pill" 
                            style={{ backgroundColor: "#FFF" }}
                            >Edit Budgets</Link> 
                        : <Link to="/Edit" className="nav-link py-2 rounded-pill" href="Edit">Edit Budgets</Link> 
                    }        
                    
                    { (currentPage.title === "Overviews") 
                        ? <Link to="/Overviews" className="nav-link py-2 rounded-pill" 
                            style={{ backgroundColor: "#FFF" }}
                            >Overviews</Link>
                        : <Link to="/Overviews" className="nav-link py-2 rounded-pill" href="Overviews">Overviews</Link> 
                    }
                    
                    { (currentPage.title === "Profile") 
                        ? <Link to="/Profile" className="nav-link py-2 rounded-pill" 
                            style={{ backgroundColor: "#FFF" }}
                            >Profile</Link>
                        : <Link to="/Profile" className="nav-link py-2 rounded-pill" href="Profile">Profile</Link>
                    }

                    { (currentPage.title === "Developers") 
                        ? <Link to="/Developers" className="nav-link py-2 rounded-pill" 
                            style={{ backgroundColor: "#FFF" }}
                            >The Team
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#231B1B" className="bi bi-people m-2" viewBox="0 0 16 16">
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                                </svg>
                            </Link>
                        : <Link to="/Developers" className="nav-link py-2 rounded-pill" href="Developers">
                            The Team
                            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#231B1B" className="bi bi-people m-2" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                            </svg>
                        </Link>
                    }
                </Nav>
            </Col>
        </>
    ) 
}

export default NavBar
