import { useState, useEffect } from 'react';

function TransactionBar(props) {
    const [descrip, setDescr] = useState((props.description.length < 32) ? props.description : props.description.slice(0,17) + '...' );
    const [mobileDescrip, setMobileDescr] = useState((props.description.length < 20) ? props.description : props.description.slice(0,23) + '...');
    return (
        <>
            <div className='d-flex flex-wrap flex-shrink-1 flex-row pill-button justify-content-start align-content-center rounded-start-pill bg-info mb-4 transaction-bar overflow-x-hidden'>
                <svg onClick={props.onClick}
                    xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-dash-circle-fill mx-4" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                </svg>
                <h4 className='fw-semibold d-md-none align-self-end'><span className='fw-bold fs-3 text-decoration-underline'>${ props.cost }:</span> { mobileDescrip }</h4>
                <h5 className='fw-semibold d-none d-md-inline align-self-end'><span className='fw-bold fs-4 text-decoration-underline'>${ props.cost }:</span> { descrip }</h5>
            </div>
        </>
    ) 
}

export default TransactionBar