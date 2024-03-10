import { useState, useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function NavCanvas() {   
    const [show, setShow] = useState(false);
    const { currentPage, setPage } = usePageContext();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {
        setShow(false);
    }, [currentPage]);
    
    return (
        <>
            <Button variant="primary" onClick={handleShow} 
                className="position-fixed rounded-circle top-0 end-0 m-1 z-3 d-md-none"
                style={{ width:"5rem", height: "5rem"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="85%" height="85%" fillRule="inherit" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </Button>
            <Navbar expand={'false'} className='d-md-none'>
                <Navbar.Offcanvas show={show} onHide={handleClose} 
                    className="bg-primary"
                    aria-labelledby={`offcanvasNavbarLabel-expand-${'false'}`}
                    placement="end">
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body bg={'primary'}>
                        <Nav className="justify-content-end text-center h2 flex-grow-1 pe-3"> 
                            { (currentPage.title === "Dashboard")
                                ? <Link to="/" className="nav-link py-3 rounded-pill" 
                                    style={{ backgroundColor: "#fff" }}
                                    >Dashboard</Link>
                                : <Link to="/" className="nav-link py-3 rounded-pill" href="Dashboard">Dashboard</Link>
                            }
                            
                            { (currentPage.title === "Select") 
                                ? <Link to="Select" className="nav-link py-3 rounded-pill" 
                                    style={{ backgroundColor: "#fff" }}
                                    >Select</Link> 
                                : <Link to="Select" className="nav-link py-3 rounded-pill" href="Select">Select Budget</Link>
                            }  

                            { (currentPage.title === "Edit") 
                                ? <Link to="Edit" className="nav-link py-3 rounded-pill" 
                                    style={{ backgroundColor: "#fff" }}
                                    >Edit Budgets</Link> 
                                : <Link to="Edit" className="nav-link py-3 rounded-pill" href="Edit">Edit Budgets</Link> 
                            }        
                            
                            { (currentPage.title === "Overviews") 
                                ? <Link to="Overviews" className="nav-link py-3 rounded-pill" 
                                    style={{ backgroundColor: "#fff" }}
                                    >Overviews</Link>
                                : <Link to="Overviews" className="nav-link py-3 rounded-pill" href="Overviews">Overviews</Link> 
                            }
                            
                            { (currentPage.title === "Profile") 
                                ? <Link to="Profile" className="nav-link py-3 rounded-pill" 
                                    style={{ backgroundColor: "#fff" }}
                                    >Profile</Link>
                                : <Link to="Profile" className="nav-link py-3 rounded-pill" href="Profile">Profile</Link>
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Navbar>
        </>
    ) 
}

export default NavCanvas