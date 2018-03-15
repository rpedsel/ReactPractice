import React from 'react';


const validationcomponent = ( props ) => {
    let validationMessage = "Text too long!";
    if ( props.textLength < 6 ){
        validationMessage = "Text too short!";
    }
    return (
        <div className="ValidationComponent">
            <p>{validationMessage}</p>
        </div>
    )
}

export default validationcomponent;