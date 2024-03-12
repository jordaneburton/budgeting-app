import { useState, useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';

function PillButtons(props) {
    const [color, setAge] = useState(props.color || '#C8BFC7');
    const [name, setName] = useState((props.name.length < 9) ? props.name : props.name.slice(0,8) + '...' )
    return (
        <>
            <div className='d-flex flex-wrap flex-column pill-button justify-content-center rounded-end-pill mb-4'
                style={{ backgroundColor: `${color}` }}>
                <h2 className='fw-semibold d-md-none'>{ props.name.toUpperCase() }</h2>
                <h2 className='fw-semibold d-none d-md-inline'>{ name.toUpperCase() }</h2>
            </div>
        </>
    ) 
}

export default PillButtons