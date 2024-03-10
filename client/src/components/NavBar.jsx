import { useState, useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav'

function NavBar() {   
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
                className="position-fixed rounded-circle top-0 start-0 m-1 z-3"
                style={{ width:"7rem", height: "5rem"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="85%" height="85%" fillRule="inherit" className="bi bi-list ms-3" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </Button>
        </>
    ) 
}

export default NavBar
