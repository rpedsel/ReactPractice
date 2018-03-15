import React from 'react';

import './CharComponent.css'

const charcomponent = ( props ) => {
    return (
        <div className="CharComponent" onClick={props.click}>
        <p>{props.char}</p>
        </div>
    )
}

export default charcomponent;