import { useState, useEffect } from 'react';

function PillButtons(props) {
    const [color, setColor] = useState(props.color || '#C8BFC7');
    const [name, setName] = useState((props.name.length < 9) ? props.name : props.name.slice(0,8) + '...' );
    const [mobileName, setMobileName] = useState((props.name.length < 12) ? props.name : props.name.slice(0,10) + '...');
    return (
        <>
            <div className='d-flex flex-wrap flex-column pill-button justify-content-center rounded-end-pill mb-4'
                style={{ backgroundColor: `${color}` }}>
                <h2 className='fw-semibold d-md-none'>{ mobileName.toUpperCase() }</h2>
                <h2 className='fw-semibold d-none d-md-inline'>{ name.toUpperCase() }</h2>
            </div>
        </>
    ) 
}

export default PillButtons