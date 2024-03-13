import { useState, useEffect } from 'react';

function TransactionBar(props) {
    const [descrip, setDescr] = useState((props.description.length < 18) ? props.description : props.description.slice(0,17) + '...' );
    const [mobileDescrip, setMobileDescr] = useState((props.description.length < 24) ? props.description : props.description.slice(0,23) + '...');
    return (
        <>
            <div className='d-flex flex-wrap flex-row pill-button bg-light border-bottom border-3 justify-content-evenly align-content-center rounded-start-pill mb-4'>
                <svg onClick={props.onClick}
                    xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                </svg>
                <h4 className='fw-semibold d-md-none'>{ mobileDescrip }</h4>
                <h4 className='fw-semibold d-none d-md-inline'>{ descrip }</h4>
            </div>
        </>
    ) 
}

export default TransactionBar