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
            <Col md={3} className="bg-primary vh-100 d-none d-md-inline">
                <Nav className="justify-content-center text-center h2 flex-column flex-grow-1 my-2"> 
                    { (currentPage.title === "Dashboard")
                        ? <Link to="/" className="nav-link py-3 rounded-pill" 
                            style={{ backgroundColor: "#FFF" }}
                            >Dashboard</Link>
                        : <Link to="/" className="nav-link py-3 rounded-pill" href="Dashboard">Dashboard</Link>
                    }
                    
                    { (currentPage.title === "Select") 
                        ? <Link to="/Select" className="nav-link py-3 rounded-pill" 
                            style={{ backgroundColor: "#FFF" }}
                            >Select Budget</Link> 
                        : <Link to="/Select" className="nav-link py-3 rounded-pill" href="Select">Select Budget</Link>
                    }  

                    { (currentPage.title === "Edit") 
                        ? <Link to="/Edit" className="nav-link py-3 rounded-pill" 
                            style={{ backgroundColor: "#FFF" }}
                            >Edit Budgets</Link> 
                        : <Link to="/Edit" className="nav-link py-3 rounded-pill" href="Edit">Edit Budgets</Link> 
                    }        
                    
                    { (currentPage.title === "Overviews") 
                        ? <Link to="/Overviews" className="nav-link py-3 rounded-pill" 
                            style={{ backgroundColor: "#FFF" }}
                            >Overviews</Link>
                        : <Link to="/Overviews" className="nav-link py-3 rounded-pill" href="Overviews">Overviews</Link> 
                    }
                    
                    { (currentPage.title === "Profile") 
                        ? <Link to="/Profile" className="nav-link py-3 rounded-pill" 
                            style={{ backgroundColor: "#FFF" }}
                            >Profile</Link>
                        : <Link to="/Profile" className="nav-link py-3 rounded-pill" href="Profile">Profile</Link>
                    }
                </Nav>
            </Col>
        </>
    ) 
}

export default NavBar
