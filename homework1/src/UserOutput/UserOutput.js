import React from 'react';

import './UserOutput.css';

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>I am learning {props.skill}!</p>
            <p>It is really {props.description}.</p>
        </div>
    )
};

export default useroutput;